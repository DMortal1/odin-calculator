
// Global Variables
let displayString = "";
let entry1 = 0;
let entry2 = 0;
let currentOperation = "";
let numberDictionary = {
    "decimal-seperator": ".",
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
}

// Declare Buttons and Display

// maximum 13 digits (string length 13)
// use Ne+n or Ne-n for values beyond these
const displaySection = document.querySelector("#display");
const buttonsSection = document.querySelector("#buttons");

const remainderButton = document.querySelector("#remainder");
const clearentryButton = document.querySelector("#clear-entry");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");

const reciprocalButton = document.querySelector("#reciprocal");
const exponentButton = document.querySelector("#exponent");
const rootButton = document.querySelector("#root");
const divideButton = document.querySelector("#divide");

const nineButton = document.querySelector("#nine");
const eightButton = document.querySelector("#eight");
const sevenButton = document.querySelector("#seven");
const multiplyButton = document.querySelector("#multiply");

const sixButton = document.querySelector("#six");
const fiveButton = document.querySelector("#five");
const fourButton = document.querySelector("#four");
const minusButton = document.querySelector("#minus");

const threeButton = document.querySelector("#three");
const twoButton = document.querySelector("#two");
const oneButton = document.querySelector("#one");
const plusButton = document.querySelector("#plus");

const plusminusButton = document.querySelector("#change-sign");
const zeroButton = document.querySelector("#zero");
const dotButton = document.querySelector("#decimal-seperator");
const equalsButton = document.querySelector("#equals");

// Add Event Listeners

buttonsSection.addEventListener('click',pushNumber);

clearButton.addEventListener('click',clear);
backspaceButton.addEventListener('click',popDisplay);

// Functions

function updateDisplay() {
    displaySection.innerHTML = displayString;
}

function pushDisplay(string) {
    if(displayString.length < 13){
        displayString = displayString + string;
    }
    updateDisplay();
}

function popDisplay() {
    if(displayString.length > 0){
        displayString = displayString.slice(0,-1);
    }
    updateDisplay();
}

function pushNumber(event) {
    let targetID = (event.target).id;
    let toPush = numberDictionary[targetID];
    if(toPush !== undefined) {
        pushDisplay(toPush);
    }
}

// Update Display Functions

function equals() {
}

function clearentry() {
}

function clear() {
    displayString = "";
    updateDisplay();
}

function backspace() {
}

// Operation Functions

function plus() {
}

function minus() {
}

function multiply() {
}

function divide() {
}

function plusminus() {
}

function reciprocal() {
}

function exponent() {
}

function root() {
}

function remainder() {
}