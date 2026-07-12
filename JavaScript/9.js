// Closures

function greet() {
    let name = "Amaan";

    console.log(name);
}

greet();

// Now what happens if greet func finishes => Function destroyed -> Correct

// The Function Execution Context is destroyed.

function greet() {
    let name = "Amaan";

    return name;
}

console.log(greet());

// NOw look at this

function greet() {

    let name = "Amaan";

    return function () {
        console.log(name);
    };

}

const sayHello = greet();

sayHello();

// Didn't greet() already finish?
// Wasn't its Execution Context destroyed? ... then wheres the name coming from? 
// Answer is Closures

// This time instead of returning a string , we are returning a function. This returned function remembers where it was created. NOt where its called. => this is a Closure


// A function together with the Lexical Environment in which it was created.


/*

Visual Diagram

Global

│

▼

greet()

name = "Amaan"

↓

return inner function

↓

Inner function carries

↓

Closure

↓

{name = "Amaan"}


Although, Execution Context Destroyed but Data isn't

*/

// Definition
// A closure is a function that remembers and can access variables from its lexical environment even after the outer function has finished executing.


function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = outer();

/*

Although the Function Execution Context is destroyed after the function returns, the returned inner function still has a reference to the outer function's Lexical Environment. Because that Lexical Environment is still reachable through the closure, JavaScript's garbage collector does not remove it.

*/
