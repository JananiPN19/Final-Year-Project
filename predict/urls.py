from django.urls import path, include
from django.conf import settings

from .views import gre, gre_predict,college_display

urlpatterns = [
    path('gre',gre,name='gre'),
    path('gre_predict',gre_predict,name='gre_predict'),
    path('college_display',college_display,name='college_display'),
]
