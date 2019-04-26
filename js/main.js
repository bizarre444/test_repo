var button = document.getElementById('button');
button.addEventListener('click', onButtonClick);

var elemName = document.getElementById('name');
var elemEmail = document.getElementById('email');
var elemPhone = document.getElementById('phone');
var elemText = document.getElementById('textarea');
var fields = document.getElementsByClassName('field');

patName = /^[А-Яа-я]+$/;
patEmail = /^([A-zА-я0-9_-]+\.)*[A-zА-я0-9_-]+@[A-zА-я0-9_-]+(\.[A-zА-я0-9_-]+)*\.[A-zА-я]{2,6}$/;     
patPhone = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;


var generateErrorMessage = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = text;
    return error;
}

var removeValidation = function () {
    var errors = form.querySelectorAll('.error')
    for (var i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
}


function onButtonClick(e) {
    e.preventDefault();

    removeValidation();

    var inpArr = [elemName.value, elemEmail.value, elemPhone.value];
    console.log(inpArr);

    if (inpArr[0].search(patName)==-1 || !fields[0].value) {
        console.log('ошибка при вводе имени!');
        if (!fields[0].value) {
            var error = generateErrorMessage('Заполните поле!');
            form[0].parentElement.insertBefore(error, form[0]);
        } else {
            var error = generateErrorMessage('Неверное значение!');
            form[0].parentElement.insertBefore(error, form[0]);
        }
    };

    if (inpArr[1].search(patEmail) == -1 || !fields[1].value) {
        console.log('ошибка при вводе email!');
        if (!fields[0].value) {
            var error = generateErrorMessage('Заполните поле!');
            form[1].parentElement.insertBefore(error, form[1]);
        } else {
            var error = generateErrorMessage('Неверное значение!');
            form[1].parentElement.insertBefore(error, form[1]);
        }
    };

    if (inpArr[2].search(patPhone) == -1 || !fields[2].value) {
        console.log('ошибка при вводе phone!');
        if (!fields[2].value) {
            var error = generateErrorMessage('Заполните поле!');
            form[2].parentElement.insertBefore(error, form[2]);
        } else { 
            var error = generateErrorMessage('Неверное значение!');
            form[2].parentElement.insertBefore(error, form[2]);
        }
    };
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}