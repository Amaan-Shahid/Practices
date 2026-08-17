/*

What's the difference between javascript and node.js.
JavaScript is a programming language while node js is runtime environment in which JS can run

Different Environments uses different engines
Google uses V8
Firefox uses SpiderMonkey
Safari uses JavaScriptCore
Node.js also uses V8

So, node uses the same V8 javscript engine and builds a runtime around it.

JavaScript Engine is something that can executes JS.
- V8 is Google's Js Engine

but V8 alone is not node.js 
V8 only knows how to execute JS but node added many more capabilities around it like fileSystem
NOde = V8 + Node APIs + runtime infrastructure

// .. What is a Runtime?
Runtime environment provides the environment and facilities required to run the program.

In Browser: 

JavaScript
    to
Browser Runtime
    to
DOM
Web APIs
Timers
Networking
Storage
Rendering

In Node:

JavaScript
    to
Node Runtime
    to
File System
HTTP
Networking
Processes
Buffers
Streams
Events
Timers


===> Difference between Browser JS and NOde.js
browser is designed primarily around:

Web page
   
HTML
CSS
JavaScript
   
DOM
   
Rendering

JavaScript can interact with:
HTML
DOM
user interactions
browser storage
network APIs
browser timers


Node isn't responsible for rendering web pages.
Instead, it gives JavaScript access to system/backend capabilities.

Node's asynchronous, event-driven architecture was designed to deal efficiently with this kind of work.

// Event-Driven Programming
Node initiated an operation and will react when the operation completes. It's Event Driven Programming

The Event Loop Mental Model

             JavaScript
                 │
                 ▼
            Call Stack
                 │
        ┌────────┴─────────┐
        │                  │
        ▼                  ▼
   Synchronous         Async APIs
     work                  │
                           ▼
                        libuv /
                    OS facilities
                           │
                           ▼
                   completed work
                           │
                           ▼
                     Event Loop
                           │
                           ▼
                     Call Stack

libuv ====
libuv is a library Node uses to provide important asynchronous infrastructure.

It plays a major role in:

event loop
asynchronous I/O
thread pool
cross-platform behavior

Node.js
   │
   ├── V8
   │
   └── libuv
         │
         ├── Event Loop
         ├── Async I/O
         └── Thread Pool

----------------------------
JavaScript execution in Node is primarily single-threaded, while Node's runtime can use the operating system and libuv's thread pool for certain asynchronous operations.

*/

console.log("Hi, from Node!")

// Node Environment
console.log("Node is running");
console.log('Node Version:', process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("PID:", process.pid);
console.log('Current Working Directory:', process.cwd());

/*

JavaScript
   ↓
Node runtime
   ↓
process information

-------------------------------
Node's asynchronous I/O model
------------------------------

Request A
   ↓
File I/O begins
   ↓
Node can continue handling other work
             │
             └────→ Request B
                       ↓
                    process B
             │
             ↓
File A completes
   ↓
Continue A



Node is excellent at handling lots of I/O concurrency, but CPU-heavy work requires careful architecture.


Node doesn't turn every JavaScript operation into asynchronous magic.
Rather:

JavaScript execution
+
asynchronous Node APIs
+
event loop
+
OS/libuv



*************************
Node.js is a JavaScript runtime built around Google's V8 engine. It allows JavaScript to execute outside the browser and provides APIs for tasks such as filesystem access, networking, processes, streams and other system-level operations. Its event-driven, non-blocking I/O model makes it particularly suitable for I/O-heavy applications such as APIs and real-time services.
***************************

*/
