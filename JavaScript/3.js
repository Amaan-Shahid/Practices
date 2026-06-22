// Project: Function-Based Calculator

/* Create a calculator that can perform:

Addition
Subtraction
Multiplication
Division

using separate functions for each operation.

The calculator should accept:

First Number
Second Number
Operation

and return the result.
*/

function calculator(num1, num2, operation){
    if(operation === "multiply") return multiply(num1,num2);
    else if(operation === "divide") return divide(num1,num2);
    else if(operation === "add") return add(num1,num2);
    else if(operation === "subtract") return subtract(num1,num2);
    else return "Wrong Operation!";
}

const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => {
    if (num2===0) {
        return "Division by Zero isn't possible!";
    }
    else return num1/num2;
}
const add = (num1, num2) => num1+num2;
const subtract = (num1, num2) => num1-num2;


