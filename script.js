

// Get DOM elements
const buttons = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
let display = document.getElementById("display")

// Variables for calculations
let firstNum
let secondNum
let operator
let displaySplit
let cutDisplay

// Basic math functions 
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

// Operate function
const operate = function () {
    if (operator == "+") {
        return add()
    } else if (operator == "-") {
        return subtract()
    } else if (operator == "*") {
        return multiply()
    } else if (operator == "/") {
        return divide()
    }
}

// Update display
function updateDisplay() {
    displaySplit = display.textContent
    cutDisplay = displaySplit.split(/[+-/*]/)
    firstNum = parseInt(cutDisplay[0])
    secondNum = parseInt(cutDisplay[1])
    operator = displaySplit.match(/[+-/*]/)
}

// Add numbers to display and update the display value with each button click
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        updateDisplay();
    })
})

// Calling operate once = is pressed
let equals = document.querySelector(".equals")
equals.addEventListener("click", () =>
    display.textContent = operate())

// Add operator to display
operators.forEach(function (operand) {
    operand.addEventListener("click", () =>
        document.getElementById("display").textContent += operand.textContent)
})

// Clear the display
const clear = document.querySelector(".remove")
clear.addEventListener("click", () => {
    document.getElementById("display").textContent = ""
    updateDisplay()
})

/* trying to remove the last input in the display, get back to this later
 const removeOne = document.querySelector (".reduce")
removeOne.addEventListener ('click', () =>
document.getElementById ("display").textContent)
 */







