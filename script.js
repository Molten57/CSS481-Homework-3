const operators = ['+', '-', '*', '/'];

// adds onclick events for the number & operator buttons
window.onload = () => {
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");

    numberButtons.forEach(button => {
        button.addEventListener("click", () => addNumber(button));
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => addOperator(button));
    })
}

// adds a number to the expression, based on button value
function addNumber(button) {
    let number = button.textContent;
    document.querySelector("#display").value += number;
}

// clears the expression
function clearDisplay() {
    document.querySelector("#display").value = "";
    showExpressionOverlay(false);
}

// adds a operator to the expression, based on button value
function addOperator(button) {
    let operator = button.textContent;
    let display = document.querySelector("#display")
    let expression = display.value;
    let lastInput = expression[expression.length - 1];

    if (expression === "") {
        return;
    }

    if (operator === "x") {
        operator = "*";
    }

    if (operators.includes(lastInput)) {
        expression = expression.substring(0, expression.length - 1) + operator;
    } else {
        expression += operator;
    }

    display.value = expression;
}

// evaluates the expression currently held in display
function evaluateExpression() {
    let display = document.querySelector("#display")
    let expression = display.value;
    let evaluated = eval(expression);

    if (evaluated !== undefined) {
        display.value = eval(expression);
        showExpressionOverlay(true);
    }
}

// true for an '=' sign to be overlayed on top of expression input, false for no overlay
function showExpressionOverlay(visible) {
    let display = (visible) ? "inline" : "none";
    document.querySelector(".input-overlay").style.display = display;
}