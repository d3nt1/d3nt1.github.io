/* Скрипт Hello world
//Записывает в универсальную(var) переменную myHeading захваченное значение селектора h1
var myHeading = document.querySelector('h1');
//Перезапись свойства "Содержание текста(textContent) переменной myHeading
myHeading.textContent = 'Hello world!';
*/
// Смена изображения при клике на него
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/RNM.jpg') {
		myImage.setAttribute ('src', 'images/sandero.jpg');
	} else{
		myImage.setAttribute ('src', 'images/RNM.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
//Функция персонализированного приветствия
function setUserName() {
	//Вызов диалогового окна с полем ввода
	var myName = prompt('Please enter your name.');
	//Вызов API с функцией установки значения имени
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Добро пожаловать, ' + myName;
}
//Первая инициализация на сайте
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Добро пожаловать, ' + storedName;
}
//Вызов функции по нажатию
myButton.onclick = function() {
	setUserName();
}