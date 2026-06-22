// Difference between var let and const
// var can be redeclare and reassign
// let can be reassign but not redeclare
// const can be neither redeclare nor reassign

// Scope of Variables
// Functional/Block or GLobal Scope but Var doesn't have block scope

// Global Scope 
let name = Amaan
function greet (){
    console.log(name)
}
greet()
console.log(name) // BOth will gonna give OUtput as Amaan as they are in global scope and also lexically scoped

// Funtion Scope
function give (){
    let age = 18;  // Function Scope
    console.log(age);   
}

// Hoisting

a=10;
console.log (a);   // Hoisting gonna get declarations on top before execution
var a;             // Incase of Var, it gonna work and gives 10 or undefined depending upon initailization

// in case of let and const it will give ReferenceError ca they enter temporary dead zone until their declaration

// Question 1
var a = 10;

function test(){
    console.log(a);

    var a = 20;
}

test();

// It will give us Undefined, since when function is called, due to hoisting declaration of a moves to top, since var allows redeclaration, so it will decalared but not intialized

// Question 2
let a = 10;

function test(){
    console.log(a);
}

test();

// since Let a is already declared in Global Scope, it gives 10 as output

// Scope Chain => Local => Parent => GLobal
let a = 100;

function outer(){

    let b = 50;

    function inner(){  // Inner can access a,b, and c but outer can't access c

        let c = 25;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();

// Quiz 1
console.log(x);

var x = 5;    // Undefined due to Hoisting

// Quiz 2
console.log(x);

let x = 5;   // Reference Error due to Temporal Dead Zone

// Quiz 3
if(true){
    var x = 10;
}

console.log(x);   // 10 as var doesn;t have block scope

// Quiz 4
if(true){
    let x = 10;
}

console.log(x);   // Error! Have declared yet

// Question
let x = 1;

function test() {

    console.log(x);

    {
        console.log(x);

        let x = 2;

        console.log(x);
    }

    console.log(x);
}

test();  // OUput would be 1 then reference error

// Question 
var a = 5;

function foo() {

    console.log(a);

    if (false) {
        var a = 10;
    }

    console.log(a);
}

foo();   // Undefined

