// Promises, Microtasks & Macrotasks


/*

What is a Promise?
A Promise is an object that represents the future result of an asynchronous operation.

Imagine you order food through an app.

Right now, you don't have your food.
Instead, you have a promise:
"Your order will arrive."

It can be in one of three states.
Pending
   │
   ├────────► Fulfilled
   │
   └────────► Rejected   

*/

const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Order Delivered");
    } else {
        reject("Order Cancelled");
    }

});

// Here, resolve means sucess while reject means failure. Initially its pending, Later fullfilled or rejected

// Using .then()

promise.then(result => {
    console.log(result);
});

// Output would order delivered , if rejected 

promise.catch(error => {
    console.log(error);
});

// Output: Order Cancelled

/*

Where does .then() go?

Does it use:

Call Stack?
Callback Queue?
Web APIs?

Not exactly.
It uses a Microtask Queue.



Two Queues Exist
Until now, you've only seen one queue.

Macrotask Queue

↓

setTimeout()
setInterval()
DOM Events

Now JavaScript introduces another queue.



Microtask Queue

↓

Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()


The Priority Rule
The Event Loop always empties the Microtask Queue before taking a task from the Macrotask Queue.

VIP Lane 🟢

Microtasks

-------------------

Normal Lane 🔵

Macrotasks

The VIP lane is always cleared first.

*/

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*

Ouput:
Start
End
Promise
Timer


Call Stack

↓

Start

↓

setTimeout()

↓

Promise.then()

↓

End

↓

Stack Empty

↓

Microtask Queue

↓

Promise

↓

Macrotask Queue

↓

Timer

Why Did JavaScript Do This?
Promises often represent operations that are already completed or very close to completion.

Example:

Promise.resolve(42);
There's no reason to make this wait behind timers.
So JavaScript gives Promises higher priority.


The Complete Priority Order

1. Finish all synchronous code.

↓

2. Empty ALL Microtasks.

↓

3. Execute ONE Macrotask.

↓

4. Empty any new Microtasks.

↓

5. Execute the next Macrotask.

↓

Repeat.

*/


//... Interview Question:
console.log("Start");

Promise.resolve().then(() => {
    console.log("P1");

    Promise.resolve().then(() => {
        console.log("P2");
    });
});

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

/*

Output:

Start
End
P1
P2
Timer

Why?
The Event Loop completely empties the Microtask Queue before taking even a single Macrotask.

*/



