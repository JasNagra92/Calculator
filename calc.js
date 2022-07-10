let firstNumStr = "";
let firstNum = 0;
let secondNumStr = "";
let secondNum = 0;
let operator = "";
let total = "";

const sum = (a , b) => a + b;
const subtract = (a , b) => a - b;
const multiply = (a , b) => a * b;
const divide = (a , b) => a / b;

for (i = 0; i < 10; i ++){

let btn = document.createElement('button');
btn.classList.add("number");
btn.textContent = i
btn.onclick = function(e){firstNumStr += e.target.textContent}
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

sumBtn.addEventListener("click", function (){
    firstNum = Number(firstNumStr);
    operator = "sum";
    const numList = document.querySelectorAll('.number');
    for (i = 0; i < numList.length; i++){
        numList[i].onclick = function (e){
            secondNumStr += e.target.textContent
        }}
})