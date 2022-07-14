let firstNumStr = "";
let firstNum = 0;
let secondNumStr = "";
let secondNum = 0;
let operator = "";
let total = "";
let display = document.querySelector("#display");
display.textContent = "0";
let test = "1str";

const reset = function () {
  firstNumStr = "";
  firstNum = 0;
  secondNumStr = "";
  secondNum = 0;
  operator = "";
  total = "";
  display.textContent = 0;
  test = "1str"
};

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operators = document.getElementById("operators");
let numPad = document.getElementById("numberpad");
const operate = document.createElement("button");
operate.textContent = "=";
operate.classList.add("equal");
operate.classList.add("operator");
operators.appendChild(operate);

let clear = document.createElement("button");
numPad.appendChild(clear);
clear.classList.add("number");
clear.id = "clear";
clear.textContent = "A/C";
clear.addEventListener("click", reset)

for (i = 0; i < 10; i++) {
  let btn = document.createElement("button");
  btn.classList.add("number");
  btn.textContent = i;
  btn.id = "a" + i;
  btn.addEventListener("click", function (e) {
    if (operator == "="){
      reset();
      firstNumStr += e.target.textContent;
      display.textContent = firstNumStr;
    } else if (test == "1str") {
      firstNumStr += e.target.textContent;
      display.textContent = firstNumStr;
    } else if (test == "2str") {
      secondNumStr += e.target.textContent;
      display.textContent = firstNumStr + operator + secondNumStr;
    }
  });
  numPad.appendChild(btn);
}

operate.addEventListener("click", function () {
  secondNum = Number(secondNumStr);
  if (secondNumStr == "0" && operator == "/") {
    alert("universe implodes");
    reset();
    test = "1str";
  }
  switch (operator) {
    case "+":
      total = sum(firstNum, secondNum);
      display.textContent = total;
      break;

    case "*":
      total = multiply(firstNum, secondNum);
      display.textContent = total;
      break;

    case "/":
      total = divide(firstNum, secondNum);
      display.textContent = total;
      break;

    case "-":
      total = subtract(firstNum, secondNum);
      display.textContent = total;
      break;
  }
});

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

const saveTime = function () {
  display.textContent = total;
  firstNum = total;
  secondNumStr = "";
  firstNumStr = total;
  test = "2str";
};

const operatorList = document.querySelectorAll(".operator");
for (i = 0; i < operatorList.length; i++) {
  operatorList[i].addEventListener("click", function (e) {
    if (secondNumStr == "0" && operator == "/") {
      alert("universe implodes");
      reset();
      test = "1str";
    } else if (secondNumStr !== "") {
      secondNum = Number(secondNumStr);
      switch (operator) {
        case "+":
          total = sum(firstNum, secondNum);
          operator = e.target.textContent;
          saveTime();
          break;

        case "*":
          total = multiply(firstNum, secondNum);
          operator = e.target.textContent;
          saveTime();
          break;

        case "/":
          total = divide(firstNum, secondNum);
          operator = e.target.textContent;
          saveTime();
          break;

        case "-":
          total = subtract(firstNum, secondNum);
          operator = e.target.textContent;
          saveTime();
          break;
      }
    } else {
      firstNum = Number(firstNumStr);
      operator = e.target.textContent;
      display.textContent = firstNumStr + operator;
      test = "2str";
    }
  });
}