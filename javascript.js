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
    if (num2 != 0 && num2 != "0") return num1 / num2;
    if (num2 == 0 || num2 == "0") return "ERROR";
}

function solve(num1, num2, operand) {
    if (operand == '+') return add(num1, num2);
    if (operand == '-') return subtract(num1, num2);
    if (operand == '*') return multiply(num1, num2);
    if (operand == '/') return divide(num1, num2);
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
//placeholder to check if decimals
let hasDecimal = false;

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
    else currentNumber = (currentNumber + "1")*1;
    outputRefresh();
})

two.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "2";
    else currentNumber = (currentNumber + "2")*1;
    outputRefresh();
})

three.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "3";
    else currentNumber = (currentNumber + "3")*1;
    outputRefresh();
})

four.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "4";
    else currentNumber = (currentNumber + "4")*1;
    outputRefresh();
})

five.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "5";
    else currentNumber = (currentNumber + "5")*1;
    outputRefresh();
})

six.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "6";
    else currentNumber = (currentNumber + "6")*1;
    outputRefresh();
})

seven.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "7";
    else currentNumber = (currentNumber + "7")*1;
    outputRefresh();
})

eight.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "8";
    else currentNumber = (currentNumber + "8")*1;
    outputRefresh();
})

nine.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "9";
    else currentNumber = (currentNumber + "9")*1;
    outputRefresh();
})

zero.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "0";
    else currentNumber = (currentNumber + "0")*1;
    outputRefresh();
})

plus.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    outputRefresh();
    operand = '+';
    firstNumber = currentNumber * 1;
    secondNumber = null;
    currentNumber = null;
    }
})

minus.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    outputRefresh();
    operand = '-';
    firstNumber = currentNumber * 1;
    secondNumber = null;
    currentNumber = null;
    }


})

multiplication.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    outputRefresh();
    operand = '*';
    firstNumber = currentNumber * 1;
    secondNumber = null;
    currentNumber = null;
    }
})

division.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    outputRefresh();
    operand = '/';
    firstNumber = currentNumber * 1;
    secondNumber = null;
    currentNumber = null;
    }
})

equals.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    outputRefresh();
    operand = null;
    firstNumber = null;
    secondNumber = null;
    currentNumber = null;
    }
})


