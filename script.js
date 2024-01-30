

//main variables

let display = document.getElementById("display")
let firstNum
let secondNum
let operator
const buttons = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
let displaySplit
let cutDisplay

// basic math functions 
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


//update display
function updateDisplay() {
    displaySplit = display.textContent
    cutDisplay = displaySplit.split(/[+-/*]/)
    firstNum = parseInt(cutDisplay[0])
    secondNum = parseInt(cutDisplay[1])
    operator = displaySplit.match(/[+-/*]/)
}
//add numbers to display
buttons.forEach(function (button) {

    button.addEventListener("click", () =>
        display.textContent += button.textContent)

})

//functions



// updateDisplay after every button press
buttons.forEach(function (button) {
    button.addEventListener("click", () => updateDisplay())
})
// calling operate
let equals = document.querySelector(".equals")
equals.addEventListener("click", () =>
    display.textContent = operate()
)


operators.forEach(function (operand) {
    operand.addEventListener("click", () =>
        document.getElementById("display").textContent += operand.textContent)

})




const clear = document.querySelector(".remove")
clear.addEventListener("click", () => {
    document.getElementById("display").textContent = ""
    updateDisplay()

})

/* trying to remove the last input in the display
 const removeOne = document.querySelector (".reduce")
removeOne.addEventListener ('click', () =>
document.getElementById ("display").textContent)
 */







