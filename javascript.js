function add(num1, num2) {
    return (num1 + num2).toString();
}

function subtract(num1, num2) {
    return (num1 - num2).toString();
}

function multiply(num1, num2) {
    return (num1 * num2).toString();
}

function divide(num1, num2) {
    if (num2 != 0 && num2 != "0") return (num1 / num2).toString();
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

    equalPressed = false;

    if (currentNumber == null) {
        output.textContent = "";
    }

   
    else {
        let slicepoint = 15;
        if (currentNumber * 1 < 0) slicepoint = 16;
        currentNumber = currentNumber.slice(0, slicepoint);
        output.textContent = currentNumber;
    }
}

function hasDecimal(number) {
    number = number.toString();
    return (number.includes("."));
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
const del = document.querySelector("#delete");

//define input numbers (2), operand, and current number
let firstNumber = null;
let secondNumber = null;
let operand = null;
let currentNumber = null;
let equalPressed = false;


clear.addEventListener("click", () => refresh());

posneg.addEventListener("click", () => {
    if (currentNumber == null) currentNumber = "-";
    else currentNumber = (currentNumber * -1).toString();
    outputRefresh();
})

percent.addEventListener("click", () => {
    if (currentNumber != null) currentNumber = (currentNumber/100).toString();
    outputRefresh();
})

one.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "1";
    else currentNumber = (currentNumber + "1");
    outputRefresh();
})

two.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "2";
    else currentNumber = (currentNumber + "2");
    outputRefresh();
})

three.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "3";
    else currentNumber = (currentNumber + "3");
    outputRefresh();
})

four.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "4";
    else currentNumber = (currentNumber + "4");
    outputRefresh();
})

five.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "5";
    else currentNumber = (currentNumber + "5");
    outputRefresh();
})

six.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "6";
    else currentNumber = (currentNumber + "6");
    outputRefresh();
})

seven.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "7";
    else currentNumber = (currentNumber + "7");
    outputRefresh();
})

eight.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "8";
    else currentNumber = (currentNumber + "8");
    outputRefresh();
})

nine.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "9";
    else currentNumber = (currentNumber + "9");
    outputRefresh();
})

zero.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "0";
    else currentNumber = (currentNumber + "0");
    outputRefresh();
})

decimal.addEventListener("click", () => {
    if (currentNumber == null || equalPressed == true) currentNumber = "0.";
    if (currentNumber != null && hasDecimal(currentNumber) == false) currentNumber = currentNumber + ".";
    outputRefresh();
})

del.addEventListener("click", () => {
    if (equalPressed == false) currentNumber = currentNumber.slice(0, -1);
    if (equalPressed == true) currentNumber = null;
    outputRefresh();
})

plus.addEventListener("click", () => {
    if (currentNumber != null) {
        if (operand != null) {
            secondNumber = currentNumber * 1;
            currentNumber = solve(firstNumber, secondNumber, operand);
        }

    operand = '+';
    firstNumber = currentNumber * 1;
    outputRefresh();
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

    operand = '-';
    firstNumber = currentNumber * 1;
    outputRefresh();
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

    operand = '*';
    firstNumber = currentNumber * 1;
    outputRefresh();
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

    operand = '/';
    firstNumber = currentNumber * 1;
    outputRefresh();
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
    equalPressed = true;
    }
})

document.addEventListener("keydown", function(key) {
    if (key.code == 'Digit0' || key.code == 'Numpad0') zero.click();
    if (key.code == 'Digit1' || key.code == 'Numpad1') one.click();
    if (key.code == 'Digit2' || key.code == 'Numpad2') two.click();
    if (key.code == 'Digit3' || key.code == 'Numpad3') three.click();
    if (key.code == 'Digit4' || key.code == 'Numpad4') four.click();
    if (key.code == 'Digit5' || key.code == 'Numpad5') five.click();
    if (key.code == 'Digit6' || key.code == 'Numpad6') six.click();
    if (key.code == 'Digit7' || key.code == 'Numpad7') seven.click();
    if (key.code == 'Digit8' || key.code == 'Numpad8') eight.click();
    if (key.code == 'Digit9' || key.code == 'Numpad9') nine.click();
    if (key.key == '.' || key.code == 'NumpadDecimal') decimal.click();
    if (key.key == '+' || key.code == 'NumpadAdd') plus.click();
    if (key.key == '-' || key.code == 'NumpadSubtract') {
        if (currentNumber == null) posneg.click();
        else minus.click();
        }
    if (key.key == '*' || key.code == 'NumpadMultiply') multiplication.click();
    if (key.key == '/' || key.code == 'NumpadDivide') division.click();
    if (key.key == '=' || key.code == 'NumpadEnter' || key.code == 'Enter') equals.click();
    if (key.key == '%') percent.click();
    if (key.code == 'Backspace') del.click();
    if (key.code == 'Escape') clear.click();
})
