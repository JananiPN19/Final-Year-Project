var firstNameRegex = /^[a-zA-Z]+$/;
var lastNameRegex = /^[a-zA-Z]+$/;
var emailRegex = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;

window.onload = function()
{
    document.getElementsByClassName('feedback__submit')[0].addEventListener('click' , submitFeedback);
}

function submitFeedback()
{
    var firstName = document.getElementsByClassName('feedback__input--firstname')[0].value;
    var lastName = document.getElementsByClassName('feedback__input--lastname')[0].value;
    var email = document.getElementsByClassName('feedback__input--email')[0].value;
    var comment = document.getElementsByClassName('feedback__input--comment')[0].value;

    if(firstNameRegex.test(firstName) && lastNameRegex.test(lastName) && emailRegex.test(email) && comment.length!=0)
    {
        document.getElementsByClassName('feedback__success')[0].style.display = 'block';
    }
    else
    {
        if(!firstNameRegex.test(firstName))
        {
            document.getElementsByClassName('feedback__error--firstname')[0].style.display = 'block';
        }
        else
        {
            document.getElementsByClassName('feedback__error--firstname')[0].style.display = 'none';
        }
        if(!lastNameRegex.test(lastName))
        {
            document.getElementsByClassName('feedback__error--lastname')[0].style.display = 'block';
        }
        else
        {
            document.getElementsByClassName('feedback__error--lastname')[0].style.display = 'none';
        }
        if(!emailRegex.test(email))
        {
            document.getElementsByClassName('feedback__error--email')[0].style.display = 'block';
        }
        else
        {
            document.getElementsByClassName('feedback__error--email')[0].style.display = 'none';
        }
        if(comment.length==0)
        {
            document.getElementsByClassName('feedback__error--comment')[0].style.display = 'block';
        }
        else
        {
            document.getElementsByClassName('feedback__error--comment')[0].style.display = 'none';
        }
    }

}