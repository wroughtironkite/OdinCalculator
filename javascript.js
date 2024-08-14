function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function solve(num1, num2, operand) {
    if (operand == 'add') return add(num1, num2);
    if (operand == 'subtract') return subtract(num1, num2);
    if (operand == 'multiply') return multiply(num1, num2);
    if (operand == 'divide') return divide(num1, num2);
}

function refresh() {
    firstNumber = null;
    secondNumber = null;
    operand = null;
    currentNumber = null;

    outputRefresh();
}

function outputRefresh() {
    if (currentNumber == null) {
        output.textContent = "";
    }

    else {
        output.textContent = currentNumber;
    }
}


//define output and all buttons
const output = document.querySelector("#outputscreen");
const clear = document.querySelector("#clear");
const posneg = document.querySelector("#posneg");
const percent = document.querySelector("#percent");
const division = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiplication = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

//define input numbers (2), operand, and current number
let firstNumber = null;
let secondNumber = null;
let operand = null;
let currentNumber = null;

clear.addEventListener("click", () => refresh());
