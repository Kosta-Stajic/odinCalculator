//numbers and operator functions
let firstNum = 2;
let operator = "-";
let secondNum = 3;

//basic math functions//
const add = function () {
    return firstNum + secondNum;
}

const subtract = function () {
    return firstNum - secondNum;
}
const multiply = function () {
    return firstNum * secondNum
   
}
const divide = function () {
    return firstNum / secondNum;
}

//operate function

const operate = function () {
    if (operator === "+") {
        return add()
    } else if (operator === "-") {
        return subtract()
    } else if (operator === "*") {
        return multiply()
    } else if (operator === "/") {
        return divide()
    }
}

let storeValue = 0;

