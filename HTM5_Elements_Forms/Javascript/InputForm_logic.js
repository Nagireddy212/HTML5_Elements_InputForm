const salary = document.querySelector('#salary');
const output =document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', () => {
output.textContent = salary.value;
});

// UC1 FirstName validation
const text = document.querySelector('#text'); //storing the value using id=text
const textError = document.querySelector('.text-error'); //similarly getting output for texterror 
text.addEventListener('input', () => {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) 
        textError.textContent = "";
    else 
        textError.textContent = "Name is Incorrect";
});

// UC2 Email validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
let nameRegex = RegExp("^([a-zA-z]+)([a-zA-Z0-9_\.\-]+)@([a-z]+)\.([a-zA-Z]{2,4})\.([a-zA-Z]{2})?$");
if(nameRegex.test(email.value))
        emailError.textContent = "";
    else 
    emailError.textContent = "Invalid Email address";
});
<<<<<<< HEAD
=======

// UC3 TelPhone number validation
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    if (telRegex.test(tel.value)) 
        telError.textContent = "";
    else 
        telError.textContent = "Invalid telephone number";
});
>>>>>>> UC3
