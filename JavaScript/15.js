/* 

What is an API?

Imagine you build an e-commerce website like Amazon.
You have a frontend (React).

Browser
and a backend.
Server

Question:
How does the browser know:

Products?
Prices?
Login?
Orders?
Reviews?

It doesn't.
The frontend knows nothing.
The Frontend Can't Access the Database

Imagine this database:

Products

---------------------
ID | Name | Price
1  | iPhone | 1200
2  | Mouse  | 20
3  | Keyboard | 50

Can your React app directly access this?
No. Why?
Because that database is on the server.

If browsers could access databases directly...
Anyone could run:

DELETE FROM Products;

Game over.

Instead,

Browser

↓

Request

↓

Server

↓

Database  

=> Only the server talks to the database.

So, what's an API?   (Application Programming Interface)

The API takes requests.
The API returns responses.
That's it.

=================================================================

Real Example

Suppose Instagram wants your profile.

Instead of saying:
Give me your database.

The browser says:

GET

/api/users/15

The server replies:

{
    "id":15,
    "name":"Amaan",
    "followers":240
}

The browser never touched the database.

======================================================

Client

↓

Request

↓

Server

↓

Response

↓

Client

*/


// Response - Always in JSON Format

[
    {
        "id":1,
        "name":"Ali"
    },
    {
        "id":2,
        "name":"Ahmed"
    }
]


/*

Why JSON?

Imagine:

React

↓

Node

↓

Python

↓

Java

↓

PHP

↓

C#

All different languages.

They need one common language.

That's JSON.

=========================================================


HTTP Methods

The browser doesn't always want the same thing.

Sometimes it wants data.
Sometimes it wants to create data.
Sometimes update.
Sometimes delete.

That's why HTTP methods exist.

GET
GET /users

Meaning:

Give me users.

Read only.

POST
POST /users

Meaning:

Create a user.


PUT
PUT /users/5

Meaning:

Replace the entire user.

Example:

Old

{
    "name":"Ali",
    "age":20
}

PUT

{
    "name":"Ahmed",
    "age":25
}

Everything is replaced.

PATCH
PATCH /users/5

Meaning:

Update only part of the user.

Example

Old

{
    "name":"Ali",
    "age":20
}

PATCH

{
    "age":21
}

Only age changes.

DELETE
DELETE /users/5

Meaning

Delete this user.

=================================================


Real Example

When you open YouTube.

Browser

↓

GET /videos

Server

↓

[
    {
        "title":"JavaScript Tutorial"
    },
    {
        "title":"React Course"
    }
]

=================================================

Where Does fetch() Fit?
JavaScript

↓

fetch()

↓

Browser

↓

Internet 🌍

↓

Server

↓

Database

↓

Server

↓

Browser

↓

Promise resolves

↓

Your JavaScript


Your JavaScript doesn't talk to the server directly.
It asks the browser to make the network request.
The browser handles the networking, and when the response arrives, it fulfills the Promise returned by fetch().

This fits perfectly with what you've already learned about Web APIs. fetch() is another browser-provided API, just like setTimeout().

*/

// What does fetch() actually return?
const result = fetch("https://api.example.com/users");

// It will not gonna return a response but a promise of a response

// response is itself an object
console.log(response.status);

// May be 200 or 404 etc
response.ok // return true or false

// Now we recieve a HTTP response, browser knows status, headers and body, but body is still a stream of bytes. THus we need to convet that into something useful

/*

Maybe:

JSON
Text
Blob (images/files)
ArrayBuffer (binary data)

*/

response.json()
response.text()
response.blob()
response.arrayBuffer()

// but still .json will gonna return another promise

/*

This data doesn't instantly become a JavaScript object.

The browser must:

Read the response body.
Decode the bytes into text.
Parse the JSON text into JavaScript objects.

For a tiny response, this is fast.
For a huge response, it takes time.
So JavaScript treats it as asynchronous.


===============================================

Network Request
        │
        ▼
Promise<Response>
        │
        ▼
Response Object
        │
        ▼
Read + Parse JSON
        │
        ▼
Promise<Object>
        │
        ▼
JavaScript Object

=================================================


fetch()

↓

Browser starts request

↓

Promise<Response>

↓

await pauses async function

↓

Server replies

↓

Promise fulfilled

↓

Response object received

↓

response.json()

↓

Promise<Object>

↓

await pauses again

↓

JSON parsed

↓

JavaScript object available


===============================================


Different Ways to Read the Body

The body can represent many kinds of data.

JSON
await response.json();

Returns:

{
    name: "Ali"
}

=>
Text
await response.text();

Returns:

Hello World

=?
Blob

Used for:

Images
PDFs
Videos
Audio
await response.blob();

=>
ArrayBuffer

Used for binary data.
await response.arrayBuffer();
Mostly used in advanced applications.


==============================================
Response Object
Response {
    body: ReadableStream,
    bodyUsed: false,
    headers: Headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "https://..."
}

where is the data?
In the body, but in the readable stream format, that why we need to convert it into readable data format like JSON

response.ok   vs response.status
response.status gives the exact HTTP status code.
response.ok gives a simple boolean.

*/

try{

    const response = await fetch("/users");

    if(!response.ok){

        throw new Error(`HTTP Error ${response.status}`);

    }

    const users = await response.json();

    console.log(users);

}
catch(error){

    console.log(error.message);

}

/*

Why do we manually throw an error?
Because:

fetch()

↓

does NOT reject

↓

404



========================

now while writing code in try catch, as catch is general error handling that means if any error occurs in try, catch will gonna executes, but what about the remaining code that will never executes. lets say, if something loading, when loading becomes false, either its success or failure, that mean in both cases it needs to convert. that why finally blocks exists, it will gonna executes every single time regardless of any error.

*/

loading = true;

try {

    const response = await fetch(url);

}
catch(error){

    console.log(error);

}
finally{

    loading = false;

}

// Sending Data with Fetch (POST Request)
// since in post we are sending info so we need pass option parat=meter as well --->  fetch(url, options)

fetch("https://example.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Amaan",
        age: 20
    })

});

/*

If we dont use method: post , then be default it gonna be a get request

header tell about the message not give the message, its telling i'm send json

body is the actual data, but network doesnt know about JSon object, it only know, text/binary data so we need to use stringify to convert it into JSOn object.

*/

