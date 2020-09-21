window.onload = function(){
  document.getElementById('tab2').style.backgroundColor = '#ec407a';
}

var count = [false,false,false];

function getValue()
{
    var rangeValue = document.getElementsByClassName('controls__range')[0].value;
    //document.getElementsByClassName('controls__range')[0].setAttribute('name', rangeValue);
    document.getElementsByClassName('range__value')[0].innerHTML = rangeValue;
}
