const display = document.querySelector("#display");
let btns = document.querySelectorAll(".btn");
let equal = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let num1 = "";
let num2 = ""; 
let operator = "";
let newOperator = "";
const million = 1000000;

display.textContent = "";

btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            num1 += button.value;
            display.textContent = num1;
        } else {
            num2 += button.value;
            display.textContent = num2;
        }
    });
});

// round all answers by one million
const add = function(num1, num2) {
    let answer = num1 + num2;
    display.textContent = Math.round(answer * million) / million;
    return answer;
}

const subtract = function(num1, num2) {
    let answer = num1 - num2;
    display.textContent = Math.round(answer * million) / million;
    return answer;
}

const multiply = function(num1, num2) {
    let answer = num1 * num2;
    display.textContent = Math.round(answer * million) / million;
    return answer;
}

const divide = function(num1, num2) {
    if (num2 === 0) {
        alert("Division by zero is not allowed");
    }
    let answer = num1 / num2;
    display.textContent = Math.round(answer * million) / million;
    return answer;
}

const operate = function(operator, num1, num2) {
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
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

    // checks to see if user click on a operator sign
    submit.addEventListener("click", () => {
        if (operator === "") {
            operator = submit.value;
            num2 = "";
        } else {
            newOperator = operate(operator, num1, num2);
            num1 = newOperator;
            num2 = "";
        }
    });
});
    
// perform operations using given numbers and operator sign
equal.addEventListener("click", () => {
     if (operator === "" || (num1 === "" || num2 === "")) {
        alert("Please input your numbers and/or operator sign.");
    } else {
        operate(operator, num1, num2)
        num1 = "";
        num2 = ""; 
        operator = "";
    }
});

// return all variables back to null
clear.addEventListener("click", () => {
    num1 = "";
    num2 = ""; 
    operator = "";
    display.textContent = "";
});
