
// 
// Global Variables
// 

let storeString = ""; // Operand 1
let entryString = ""; // Operand 2
let currentOperation = null;
let resetDisplayFlag = false;

// 
// Declare Buttons and Display
// 

// maximum 13 digits (string length 13)
// use Ne+n or Ne-n for values beyond these
const entrySection = document.querySelector("#entry");
const storeSection = document.querySelector("#store");

const buttonsSection = document.querySelector("#buttons");

const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const dotButton = document.querySelector("#decimal-seperator");
const equalsButton = document.querySelector("#equals");

// 
// Add Event Listeners
// 

clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', removeDigit);

dotButton.addEventListener('click', appendDot);
equalsButton.addEventListener('click', evaluate);

numberButtons.forEach(button => button.addEventListener("click",appendNumber));
operatorButtons.forEach(button => button.addEventListener("click",setOperation));

window.addEventListener("keydown", keyboardInput);

// 
// Functions
// 

function appendNumber(event) {
    let numb = event.target.id.split("").pop();
    if(entrySection.innerHTML === "0" || resetDisplayFlag) {
        resetDisplay();
    }
    entrySection.innerHTML += numb;
}

function setOperation(event) {
    let op = convertOperator(event.target.id);
    if(currentOperation !== null) {
        evaluate();
    }
    storeString = entrySection.innerHTML;
    currentOperation = op;
    storeSection.innerHTML = `${storeString} ${currentOperation}`;
    resetDisplayFlag = true;
}

function resetDisplay() {
    entrySection.innerHTML = "";
    resetDisplayFlag = false;
}

function clear() {
    entrySection.innerHTML = "0";
    storeSection.innerHTML = "";
    
    entryString = "";
    storeString = "";

    currentOperation = null;
}

function appendDot() {
    if(resetDisplayFlag) {
        resetDisplay();
    }
    if(entrySection.innerHTML === "") {
        entrySection.innerHTML = "0";
    }
    if(entrySection.innerHTML.includes(".")) {
        return;
    }
    entrySection.innerHTML += ".";
}

function removeDigit() {
    entrySection.innerHTML = entrySection.innerHTML.slice(0,-1);
}

function evaluate() {
    if(currentOperation === null || resetDisplayFlag) {
        return;
    }
    if(currentOperation === "divide" && entrySection.innerHTML === "0") {
        alert("Cannot divide by zero")
        return;
    }
    entryString = entrySection.innerHTML;
    entrySection.innerHTML = roundResult(operate(currentOperation, storeString, entryString));
    storeSection.innerHTML = `${storeString} ${currentOperation} ${entryString} =`;
    currentOperation = null;
}

function roundResult(numb) {
    return Math.round(numb*1000)/1000;
}

function keyboardInput(event) {
    let key = event.key;
    switch(key) {
        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
            event.target.id = key;
            appendNumber(event);
            break;
        case ".":
            appendDot();
            break;
        case "=": case "Enter":
            evaluate();
            break;
        case "Backspace":
            removeDigit();
            break;
        case "Escape":
            clear();
            break;
        case "+": case "-": case "*": case "/":
            event.target.id = convertOperator(key);
            setOperation(event);
            break;
        default:
            break;
    }
}

function convertOperator(op) {
    switch(op) {
        case "+": case "plus": case "+":
            return "+";
        case "-": case "minus": case "&#8722":
            return "&#8722";
        case "*": case "multiply": case "&#215":
            return "&#215";
        case "/": case "divide": case "&#247":
            return "&#247";
        default:
            return null;
    }
}

function plus(a,b) {
    return a+b;
}

function minus(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
            return plus(a,b);
        case "&#8722":
            return minus(a,b);
        case "&#215":
            return multiply(a,b);
        case "&#247":
            if(b === 0) {
                return null;
            } else {
                return divide(a,b);
            }
        default:
            return null;
    }
}