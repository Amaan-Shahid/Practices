// What is a Function? 
// Somthing that  Input -> Function -> OUtput

// Function Declaration
function greet(){
    console.log("Hello Amaan!")   // Prints Hello Amaan!
}

greet()  // Funciton Call

// Function with Parameter
function greetwithParameter(name){
   console.log("Hello " + name + "!")   // Hello Name!
}

greetwithParameter();   

// Function with Return Value
function add (a,b){
    return a + b
}

let result = add (3,5);
console.log(result)

// Difference between Console.log and Return
// Console.log prints value in console while return statement return the value back to the calling function

// FUnction Expressions
// Fuction stored in a Variable

const greeting = function (){
    console.log("Hello Amaan!");
}

greeting();


// Function Declaratoin Hoisting
sayHello();

function sayHello() {   // It will gonna works completely fine as funciton declation can be hoisted
    console.log("Hello"); 
}  

// While Function Expressions are not hoisted, So
sayHello();

const sayHello = function() {  // It will gonna gives an error
    console.log("Hello");
};


// Arrow Function
const gree = () => {
    console.log("Hello")
}

gree();

// Arrow Function with One Parameter
const arrow = name => {
    console.log("Hello " + name)
}

arrow();

// Now with multiple parameters adb shorter return statement
const short = (a,b) => a + b;   // Function return a+b
let answer = short(5,4);
console.log(answer);



// Callback Function
// Function passed as an Argument to another function

function first (name){
    console.log("Hello " + name);
}

function initial (first){  // Callback Funciton, as first which is itself a fucntion is passed over to another function
    first("Amaan");
}

// Real WOrld Example
setTimeout(() => console.log("Executed after 2 seconds"),2000);

// OUtput => Executed after 2 seconds

// setTimeout( callback, delay);

// Practice Q1
function cube(num){
    return num*num*num;
}
// Convert this to Arrow Function:

const multiply = (num) => num*num*num;

// Practice Q2
// Create a callback function that prints: Task Completed after 3 seconds
function taskdone(){
    console.log("Task Completed")
}

setTimeout(taskdone,3000); // callback function