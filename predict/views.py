from django.shortcuts import render

import pandas as pd
import numpy as np
import pickle

# Create your views here.

def gre(request):
    return render(request, 'predict/gre_predict.html', {})

def gre_predict(request):
    global backend_gre
    if request.method == 'POST':
        backend_gre = request.POST.get('gre_score')
        backend_toefl = request.POST.get('toefl_score')
        backend_univ_rating = request.POST.get('univ_rating')
        backend_cgpa = request.POST.get('cgpa')
        backend_research = request.POST.get('research')

        df = pd.read_csv('predict\\static\\predict\\grad_ad.csv')
        df.drop(['Serial No.'],axis=1,inplace=True)
        df.drop(['SOP'],axis=1,inplace=True)
        df.drop(['LOR '],axis=1,inplace=True)
        df=df.rename(columns = {'Chance of Admit ':'Chance of Admit'})
        df['Chance of Admit'] = np.where(df['Chance of Admit']>0.5,1,0)
        column_list = df.columns

        data = {'column_list': column_list}


        data1 = {'GRE Score': backend_gre, 'TOEFL Score': backend_toefl, 'University Rating': backend_univ_rating, 'CGPA': backend_cgpa, 'Research': backend_research}

        ds = pd.DataFrame(data1, index=[0])

        loaded_model = pickle.load(open('predict\\static\\predict\\final_model.pkl', 'rb'))
        out = loaded_model.predict(X=ds)

        if out == 1:
            return render(request, 'predict/congrats.html', {})
        else:
            return render(request, 'predict/failure.html', {})

def college_display(request):
    df = pd.read_csv('predict\\static\\colleges.csv')
    gre_range = list(set(df['Gre_Range']))
    for i in gre_range:
        start,end = map(int,i.split('-'))
        college_list = df[df.Gre_Range==i]
        college_name = list(college_list['College_name'])
        college_site = list(college_list['College_Site'])
        college_info = []
        for l in range(len(college_name)):
            college_info.append([college_name[l],college_site[l]])
        college_data = {'college_info':college_info}
        if int(backend_gre) in range(start,end+1):
            return render(request,'result-page.html',college_data)
            break
