let constant_one = "";
let constant_two = "";
let operator = "";
let a = 0;
let this_result = 0;

const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".input");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const displayInput = (input) => display.textContent = input;

function getNumbers(event){
    if(operator===""){
        constant_one += event.target.textContent;
        displayInput(constant_one);
    }
    else{
        constant_two += event.target.textContent;
        displayInput(constant_two);
    }
}

numbers.forEach((element) => element.addEventListener("click", getNumbers));
