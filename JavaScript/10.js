// Call Stack - foundation for web api, promises, event loops and asyn await

/*

What is a Call Stack?
A stack data structure that keeps track of which function is currently executing.

JavaScript is single-threaded, meaning:
It has one Call Stack
It executes one task at a time

Think of a Stack of Plates 

Top
---------
plate C
---------
plate B
---------
plate A
---------

You always:

Put a new plate on top
Remove the top plate first

That's called LIFO:
Last In, First Out
The Call Stack works exactly the same way.

*/

// Example
function one() {
    console.log("One");
}

one();

console.log("End");

/*

Step 1 = Global Execution Context is created.

---------
Global
---------

// Step 2 = one();

---------
one()
---------
Global
---------

Step 3 = one() finishes.

---------
Global
---------



Rule:

Whenever a function is called:
Push onto the stack.

Whenever a function finishes:
Pop from the stack.



Stack Overflow:
Maximum Call Stack Size Exceeded
This happens because of infinite recursion.

*/

function hello() {   // INfinite FUnction
    hello();   
}

hello();


/* 

Global

↓

hello

↓

hello

↓

hello

↓

hello

↓

hello

↓

hello

↓

...

The stack keeps growing until there's no more room.
Then JavaScript throws:

RangeError:
Maximum Call Stack Size Exceeded

Execution Context vs Call Stack

Students often mix these up.


Difference between Execution Context and Call Stack

Execution COntext
Created for every function call	
Contains variables, Lexical Environment, etc.	

CallStack
Stores all active Execution Contexts
Just keeps track of which context is running

Think of it like this:
Execution Context = One worker.
Call Stack = The building where all active workers are standing.

*/




