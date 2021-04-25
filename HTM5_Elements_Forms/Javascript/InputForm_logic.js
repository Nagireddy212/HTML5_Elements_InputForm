const text = document.querySelector('#text'); //storing the value using id=text
const textError = document.querySelector('.text-error'); //similarly getting output for texterror 
text.addEventListener('input', () => {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) 
        textError.textContent = "";
    else 
        textError.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output =document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', () => {
output.textContent = salary.value;
});
