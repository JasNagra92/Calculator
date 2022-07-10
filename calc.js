let firstNumStr = "";
let firstNum = 0;
let secondNumStr = "";
let secondNum = 0;
let operator = "";
let total = "";

let numPad = document.getElementById("numberpad");
const operate = document.createElement("button");
operate.textContent = "=";
numPad.appendChild(operate);

operate.addEventListener("click", function () {
  secondNum = Number(secondNumStr);
  switch (operator) {
    case "+":
      total = sum(firstNum, secondNum);
      break;

    case "*":
      total = multiply(firstNum, secondNum);
      break;

    case "/":
      total = divide(firstNum, secondNum);
      break;

    case "-":
      total = subtract(firstNum, secondNum);
      break;
  }
});

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

for (i = 0; i < 10; i++) {
  let btn = document.createElement("button");
  btn.classList.add("number");
  btn.textContent = i;
  btn.onclick = function (e) {
    firstNumStr += e.target.textContent;
  };
  numPad.appendChild(btn);
}

let operators = document.getElementById("operators");

const sumBtn = document.createElement("button");
sumBtn.textContent = "+";
sumBtn.classList.add("operator");
operators.appendChild(sumBtn);

const multiplyBtn = document.createElement("button");
multiplyBtn.textContent = "*";
multiplyBtn.classList.add("operator");
operators.appendChild(multiplyBtn);

const divideBtn = document.createElement("button");
divideBtn.textContent = "/";
divideBtn.classList.add("operator");
operators.appendChild(divideBtn);

const subtractBtn = document.createElement("button");
subtractBtn.textContent = "-";
subtractBtn.classList.add("operator");
operators.appendChild(subtractBtn);

const operatorList = document.querySelectorAll(".operator");
for (i = 0; i < operatorList.length; i++) {
  operatorList[i].addEventListener("click", function (e) {
    firstNum = Number(firstNumStr);
    operator = e.target.textContent;

    const numList = document.querySelectorAll(".number");
    for (i = 0; i < numList.length; i++) {
      numList[i].onclick = function (e) {
        secondNumStr += e.target.textContent;
      };
    }
  });
}


