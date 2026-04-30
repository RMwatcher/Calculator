const display = document.querySelector("#display");
let btns = document.querySelectorAll(".btn");

let num1, num2, operator;

let numbers = {
    first: [0],
    second: [0],
    sign: ""
};

display.textContent = "";

btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.value);
        numbers.first = Number.parseInt(e.target.value);
        display.textContent += numbers.first;
        console.log(numbers.first);
    });
});

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    if (num2 === 0) {
        alert("Division by zero is not allowed");
    }
    return num1 / num2;
}

let submits = document.querySelectorAll(".operator");

submits.forEach((submit) => {

    submit.addEventListener("click", (e) => {
        operator = e.target.value;
        console.log(operator);
    });
});

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            break;
    }
}