// --- Basic Math Functions ---
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "LMAO No"; // Snarky error for divide by zero
    return a / b;
};

// --- Operate Function ---
const operate = (operator, a, b) => {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
};

// --- State Variables ---
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

// --- DOM Elements ---
const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');

// --- Functions ---
const updateDisplay = (value) => {
    display.textContent = value;
};

const clearCalculator = () => {
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    shouldResetScreen = false;
    updateDisplay('0');
};

const deleteNumber = () => {
    if (display.textContent === "LMAO No") {
        clearCalculator();
        return;
    }
    display.textContent = display.textContent.toString().slice(0, -1);
    if (display.textContent === '') updateDisplay('0');
};

const appendNumber = (number) => {
    if (display.textContent === "LMAO No") clearCalculator();
    if (display.textContent === '0' || shouldResetScreen) {
        display.textContent = '';
        shouldResetScreen = false;
    }
    // Prevent multiple decimals (Extra Credit)
    if (number === '.' && display.textContent.includes('.')) return;
    display.textContent += number;
};

const setOperation = (operator) => {
    if (display.textContent === "LMAO No") clearCalculator();

    // Handle consecutive operators: just swap the operator, don't evaluate
    if (currentOperation !== null && shouldResetScreen) {
        currentOperation = operator;
        return;
    }

    // Chain operations (evaluate previous pair before starting new one)
    if (currentOperation !== null) evaluate();

    firstOperand = display.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
};

const roundResult = (number) => {
    return Math.round(number * 100000) / 100000; // Prevents long decimal overflow
};

const evaluate = () => {
    // Prevent issues if = is pressed without a full equation
    if (currentOperation === null || shouldResetScreen) return;

    // If dividing by zero error is already on screen, do nothing
    if (display.textContent === "LMAO No") return;

    secondOperand = display.textContent;
    const result = operate(currentOperation, firstOperand, secondOperand);

    if (result === "LMAO No") {
        updateDisplay(result);
    } else {
        updateDisplay(roundResult(result));
    }

    // Prepare for the next operation
    currentOperation = null;
    shouldResetScreen = true;
};

// --- Event Listeners ---
digitButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.dataset.num));
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.dataset.op));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clearCalculator);
backspaceButton.addEventListener('click', deleteNumber);

// --- Keyboard Support ---
window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendNumber(e.key);
    if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault(); // Prevents "Enter" from triggering the last clicked button
        evaluate();
    }
    if (e.key === 'Backspace') deleteNumber();
    if (e.key === 'Escape') clearCalculator();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperation(e.key);
    }
});