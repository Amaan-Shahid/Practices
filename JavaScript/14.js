// async / await

// Before ES2017
// Suppose you wanted to fetch user data using promises.

fetchUser()
    .then(user => {
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log(posts);
    })
    .catch(err => {
        console.log(err);
    });

// Works perfectly, But imagine 10 asynchronous operations. It becomes difficult to read. So JavaScript introduced:    

async function getData() {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);

    console.log(posts);
}

// What does async do?

async function greet() {
    return "Hello";
}

// What does this function return?
// NOrmally we assume it would be "Hello" but in reality, it would return Promise { "Hello" }
// Every async function always returns a Promise.

// Even this one
async function number() {
    return 5;
}

// it would behaves like
Promise.resolve(5)

// Example

async function greet() {
    return "Hello";
}

console.log(greet());

// Output -> Promise { "Hello" }

greet().then(result => {
    console.log(result);
});

// Output: -> Hello

// What does await do?
async function example() {

    console.log("A");

    await Promise.resolve();

    console.log("B");

}

// Normally we assume that JS paused for a while but the async function pauses, not the entire JavaScript engine.

async function demo() {

    console.log("1");

    await Promise.resolve();

    console.log("2");

}

demo();

console.log("3");

// output
// 1
// 3
// 2

// this is because, JS prints 1, then await statements appears, so instead of waiting, JS says pause this async function and move to synchronous statement that is print 2, when call stack becomes empty, event loop will check the microqueue, and continue the await statement.



// await Internally Uses Promises
const data = await fetchData();

// is conceptually similar to:
fetchData().then(data => {
    // continue execution
});

// So await is really syntax sugar built on top of Promises.

// Error Handling, instead of
fetchData()
    .then(...)
    .catch(err => {
        console.log(err);
    });

// Use
async function getData() {

    try {

        const data = await fetchData();

        console.log(data);

    } catch(err) {

        console.log(err);

    }

}
// It feels much closer to synchronous code and is one reason async/await became so popular.

/*

Summary:

async =>	Makes a function always return a Promise
await =>	Pauses only the current async function until the Promise settles
JavaScript Engine =>	Keeps executing other available code
Resume =>	Happens as a Microtask

*/
