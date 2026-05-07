const display = document.querySelector("#display");
let btns = document.querySelectorAll(".btn");
let equal = document.querySelector("#equals");

let num1 = "";
let num2 = ""; 
let operator = "";

display.textContent = "";

btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            num1 += button.value;
            display.textContent = Number.parseInt(num1);
            console.log("num1 is " + num1);
        } else {
            num2 += button.value;
            display.textContent = Number.parseInt(num2);
            console.log("num2 is " + num2);
        }
        
    });
});

const add = function(num1, num2) {
    display.textContent = num1 + num2;
    return num1 + num2;
}

const subtract = function(num1, num2) {
    display.textContent = num1 - num2;
    return num1 - num2;
}

const multiply = function(num1, num2) {
    display.textContent = num1 * num2;
    return num1 * num2;
}

const divide = function(num1, num2) {
    if (num2 === 0) {
        alert("Division by zero is not allowed");
    }
    display.textContent = num1 / num2;
    return num1 / num2;
}

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
            return null;
    }
};

let submits = document.querySelectorAll(".operator");

submits.forEach((submit) => {

    submit.addEventListener("click", () => {
        display.textContent = "";
        operator = submit.value;
        console.log(operator);
        num2 = "";
    });
});


equal.addEventListener("click", operate(operator, num1, num2));