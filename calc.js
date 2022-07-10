let firstNum = "";
let secondNum = "";
let operator = "";
let total = "";

const sum = (a , b) => a + b;
const subtract = (a , b) => a - b;
const multiply = (a , b) => a * b;
const divide = (a , b) => a / b;
let btn = "";

for (i = 0; i < 10; i ++){
let btn = document.createElement('button');
btn.id = i;
btn.textContent = i
btn.addEventListener('click',function(){
    firstNum += btn.textContent
})
let numPad = document.getElementById("numberpad");
numPad.appendChild(btn)
};

let operators = document.getElementById("operators")
const sumBtn = document.createElement('button');
sumBtn.textContent = "+";
operators.appendChild(sumBtn);

const multiplyBtn = document.createElement('button');
multiplyBtn.textContent = "*";
operators.appendChild(multiplyBtn);

const divideBtn = document.createElement('button');
divideBtn.textContent = "/";
operators.appendChild(divideBtn);

const subtractBtn = document.createElement('button');
subtractBtn.textContent = "-";
operators.appendChild(subtractBtn);

