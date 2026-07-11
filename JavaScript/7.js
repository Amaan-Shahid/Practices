// Execution Context

let a = 10;

function greet() {
    console.log("Hello");
}

greet();


// === What actually happens?

/* 

Normally we think, JS reads line by line but that's not true. Its first scan the whole file.

What is Execution COntext?
An Execution Context is the environment JavaScript creates to execute your code.
It includes;
Variables
Functions
Memory
The current line being executed

Types of Execution Context:

Global Execution Context (GEC)
Created once when your JavaScript file starts.

Function Execution Context (FEC)
Created every time a function is called.
Calling greet() creates a brand new execution context just for that function.

Eval Execution Context
Created when using:
eval("...");


There are 2 phases in Execution Context which is 
Memory Creation Phase
Will create memories for variable and stores functions directly.

Execution Phase
Now JavaScript starts from the first line.

Visual Flow 

JavaScript File

        │

        ▼

Create Global Execution Context

        │

        ▼

Memory Creation Phase

        │

        ▼

Execution Phase

        │

        ▼

Function Call?

        │

       Yes

        │

        ▼

Create Function Execution Context

        │

        ▼

Run Function

        │

        ▼

Destroy Function Context

        │

        ▼

Continue Global Execution


*/
