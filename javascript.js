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

posneg.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "-";
    else currentNumber = currentNumber * -1;
    outputRefresh();
})

percent.addEventListener("click", () => {
    if (currentNumber != null) currentNumber = currentNumber/100;
    outputRefresh();
})

one.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "1";
    else currentNumber = currentNumber + "1";
    outputRefresh();
})

two.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "2";
    else currentNumber = currentNumber + "2";
    outputRefresh();
})

three.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "3";
    else currentNumber = currentNumber + "3";
    outputRefresh();
})

four.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "4";
    else currentNumber = currentNumber + "4";
    outputRefresh();
})

five.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "5";
    else currentNumber = currentNumber + "5";
    outputRefresh();
})

six.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "6";
    else currentNumber = currentNumber + "6";
    outputRefresh();
})

seven.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "7";
    else currentNumber = currentNumber + "7";
    outputRefresh();
})

eight.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "8";
    else currentNumber = currentNumber + "8";
    outputRefresh();
})

nine.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "9";
    else currentNumber = currentNumber + "9";
    outputRefresh();
})

zero.addEventListener("click", () => {
    if (currentNumber != null && currentNumber != "-") currentNumber = currentNumber + "0";
    outputRefresh();
})





