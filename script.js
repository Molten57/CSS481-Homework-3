const operators = ['+', '-', '*', '/'];

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

function addNumber(button) {
    let number = button.textContent;
    document.querySelector("#display").value += number;
}

function clearDisplay() {
    document.querySelector("#display").value = "";
}

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

function evaluateExpression() {
    let display = document.querySelector("#display")
    let expression = display.value;
    let evaluated = eval(expression);

    if (evaluated !== undefined) {
        display.value = eval(expression);
    }
}