let variable = "_"

const displayScreen = document.getElementById("numDisplay");

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");


handleButtonPress = function(x) {
    variable = x;
    displayScreen.innerText = variable;
}

button1.addEventListener('click', () => handleButtonPress(1));
button2.addEventListener('click', () => handleButtonPress(2));
button3.addEventListener('click', () => handleButtonPress(3));
button4.addEventListener('click', () => handleButtonPress(4));
button5.addEventListener('click', () => handleButtonPress(5));
button6.addEventListener('click', () => handleButtonPress(6));
button7.addEventListener('click', () => handleButtonPress(7));
button8.addEventListener('click', () => handleButtonPress(8));
button9.addEventListener('click', () => handleButtonPress(9));
button0.addEventListener('click', () => handleButtonPress(0));

