/*

What is the Event Loop?
The Event Loop continuously monitors the Call Stack and, when it becomes empty, moves ready callbacks from the Callback Queue to the Call Stack.

Remember one thing carefully, Event Loop doesn't executes code, its the JS who executes. Event Loop is the like the chef, who prepare dinner for JS. The Event Loop is more like a traffic controller.

COmplete JavaScript Runtime Environment:


                JavaScript Runtime

              +----------------+
              |   Call Stack   |
              +----------------+
                      ▲
                      │
                 Event Loop
                      ▲
                      │
              +----------------+
              | Callback Queue |
              +----------------+
                      ▲
                      │
              +----------------+
              |   Browser      |
              |   Web APIs     |
              +----------------+ 

*/

console.log("Start");

setTimeout(() => {
    console.log("A");
}, 1000);

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("End");

/*

Start

↓

A timer starts

↓

B timer starts

↓

End

↓

1 second

↓

A goes to Callback Queue

↓

Stack Empty?

↓

Print A

↓

2 seconds

↓

B goes to Callback Queue

↓

Print B

*/