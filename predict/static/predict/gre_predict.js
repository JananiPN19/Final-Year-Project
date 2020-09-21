window.onload = function(){
  document.getElementById('tab2').style.backgroundColor = '#ec407a';
  document.getElementsByClassName('button')[0].disabled = false;
}

var count = [false,false,false];

function getValue()
{
    var rangeValue = document.getElementsByClassName('controls__range')[0].value;
    //document.getElementsByClassName('controls__range')[0].setAttribute('name', rangeValue);
    document.getElementsByClassName('range__value')[0].innerHTML = rangeValue;
}

function validateGRE()
{
    var greValue = document.getElementById('gre_score').value;
    var greRegex = /^[0-9]{3}$/;
    if(!greRegex.test(greValue))
    {
        document.getElementsByClassName('error')[0].style.display = 'block';
        count[0] = true;
    }
    else if(greValue<260 || greValue>340)
    {
      document.getElementsByClassName('error')[0].style.display = 'block';
      count[0] = true;
    }
    else
    {
        document.getElementsByClassName('error')[0].style.display = 'none';
        count[0]=false;
    }
}


function validateTOEFL()
{
    var toeflValue = document.getElementById('toefl_score').value;
    var toeflRegex = /^[0-9]{1,3}$/;
    if(!toeflRegex.test(toeflValue) || (toeflValue<=0 || toeflValue>120))
    {
        document.getElementsByClassName('error')[1].style.display = 'block';
        count[1] = true;
    }
    else
    {
        document.getElementsByClassName('error')[1].style.display = 'none';
        count[1]=false;
    }
}
function validateCGPA()
{
    var cgpaValue = parseFloat(document.getElementById('cgpa_score').value);
    var regex = /^-?\d*(\.\d+)?$/;
    if(!regex.test(cgpaValue) || (cgpaValue<6.50 || cgpaValue>10))
    {
        document.getElementsByClassName('error')[2].style.display = 'block';
        count[2] = true;
    }
    else
    {
        document.getElementsByClassName('error')[2].style.display = 'none';
        count[2] = false;
    }
}

function enableOrDisable(){
    if(count[0]==count[1]==count[2]==true){
        document.getElementsByClassName('button')[0].disabled = true;
    }
}
