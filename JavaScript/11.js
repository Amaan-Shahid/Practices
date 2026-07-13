// Web APIs

/*

Is setTimeout() part of JavaScript? ----> Answer is NO. Neither fetch(), addEventListener(), setTimeInterval(), DOM methods like document.querySelector().

These are provided by the environment in which JavaScript runs. For Example Brower, NOde.js

What is a Web API?
A Web API is a feature provided by the browser that JavaScript can use.

+--------------------------+
|      Browser             |
|                          |
|  +--------------------+  |
|  |   JavaScript       |  |
|  |      Engine        |  |
|  +--------------------+  |
|                          |
|  Web APIs               |
|  - setTimeout()         |
|  - fetch()              |
|  - DOM                  |
|  - addEventListener()   |
+--------------------------+

JS can ask the browser can you handle this timer for me?
Browser Says yeah Sure! I'll do that

*/

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");

/*

Step 1 - Global Execution Context
Step 2 - Print Start
Step 3 - SetTimeout, does JS stops - NO .....Instead Timer is now managed by the browser, call stack become free agin.
Step 4 - Print End
Step 5 - After 2 Seconds, The browser says:
"The timer has finished."
But...
Can it directly execute the callback?
NO

Because JavaScript can only execute code from the Call Stack.
So the browser places the callback into the Callback Queue.

and Eventually Timer printed,

Final Output:
Start
End
Timer

Now Imagine if JS waited for setTImeout, then everything like scroll, click button, animations type text, would stop.

That would be terrible.

Instead:
The browser handles the waiting.
JavaScript keeps working.

*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

/*

Actual Output:
A
C
B

Even with 0 milliseconds.

0 does NOT mean:
Execute immediately.

It means:
Execute after the current synchronous code has finished.

...................................................................
COMMON WEB APIs

setTimeout()
setInterval()
fetch()
addEventListener()
localStorage
navigator
document


Browser vs JavaScript

JavaScript:
Variables	
Functions	
Objects	
Closures	
Arrays	

Browser:
setTimeout()
DOM
fetch()
localStorage
addEventListener()

*/console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 3000);

console.log("End");

/*

0 ms

Start

↓

Timer given to Browser

↓

End

↓

JavaScript finishes

↓

3 seconds later

↓

Browser says:

Timer completed

↓

Callback Queue

↓

Call Stack

↓

Hello




......Question
Why does setTimeout(..., 0) execute last?

setTimeout() is handled by the browser's Web API. When the timer expires, its callback is placed into the Callback Queue. The Event Loop moves callbacks from the Callback Queue to the Call Stack only when the Call Stack is empty. Therefore, all synchronous JavaScript code executes before the callback, even if the timer delay is 0 milliseconds.

*/

