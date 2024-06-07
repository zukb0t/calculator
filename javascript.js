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
const checkDecimal = (number) => number.split(".").length > 2 ? number.substring(0,number.length-1)
                                :number;


function operate(num1, num2, operator){
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);
    switch(operator){
        case("+"):
            a = add(value1, value2);
        break;
        case("-"):
            a = subtract(value1,value2);
        break;
        case("*"):
            a = multiply(value1,value2);
        break;
        case("/"):
            if(value2===0){
                return "cannot divide by zero";
            }
            else{
                a = divide(value1,value2);
            }
        break;
    }
    return Math.round(a * 100)/100;
}

function getNumbers(event){
    if(operator===""){
        constant_one += event.target.textContent;
        constant_one = checkDecimal(constant_one);
        displayInput(constant_one);
    }
    else{
        constant_two += event.target.textContent;
        constant_two = checkDecimal(constant_two);
        displayInput(constant_two);
    }
}

function getResult(event){
    if(operator===""){
        operator = event.target.textContent;
    }
    else{
        this_result = operate(constant_one,constant_two,operator);
        displayInput(this_result);
        updateCalculations(this_result);
        operator = event.target.textContent;
    }
}

function updateCalculations(number){
    constant_one = number;
    constant_two = "";
}

function erase(){
    display.textContent = "0";
    operator = "";
    constant_one = "";
    constant_two = "";
    this_result = 0;
    a = 0;
}

numbers.forEach((element) => element.addEventListener("click", getNumbers));
operators.forEach((element) => element.addEventListener("click",getResult));
clear.addEventListener("click", erase);
equals.addEventListener("click",getResult);
