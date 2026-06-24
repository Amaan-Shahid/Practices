// Array Fundamentals

// What's an Array?
// Array is something that stores muliple values in a single variable

// Without Arrays, we have to do something like this
let student1 = "Amaan";
let student2 = "Ali"
let student3 = "Shoukat"

// and so on .... Imagine 100 Students

// so Instead of this Trash, we can use Array like this
let students = ["Amaan", "ALi", "SHoukat"];

let fruits = ["Apple", "Mango", "Banana"]; 

// Arrays has indexes starting from 0 just like any other language

// Accessing Elements is way too simple, let assume we have to access Mango in fruits array
console.log(fruits[1]);  // Since Indexes starts from Zero

// Updating an Element
student2 = "Amna";

// Array Length
console.log(fruits.length);

// Accessing last Element
console.log(fruits[fruits.length-1])

// Traversing with For Loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Using For...of => Modern Way
for(const fruit of fruits){
    console.log(fruit);
}

// Real World Example
let skills = ["HTML","CSS", "JavaScript", "React"];

for(const skill of skills){
    console.log(skill);
}

// Push Operation
// Adds element(s) to the END.
fruits.push("Kiwi");
console.log(fruits);

// Push Multiple Values
fruits.push("Orange", "Rasberry", "BlueBerry" , "Papaya");
console.log(fruits);

// Return Value of push()
let arr = [1,2];
let result = arr.push(3);
console.log(result);   // It will gonna return 3, as push() return the new length of array, not the array itself.

// Pop Operation
// Removes the LAST element

fruits.pop()
console.log(fruits);

// Return Value of pop()
let removed = fruits.pop();
console.log(removed);

// push() → returns new length
// pop() → returns removed element

// Unshift OPeration
// Adds element(s) to the FRONT

fruits.unshift("Dragon Fruit");
console.log(fruits);
// unshift() returns new length

// shift() Operation
// Removes FIRST element.

fruits.shift(); 
console.log(fruits);
// Return Removed Element


// Map
let users = ["amaan","ali","usman"];
let Users = users.map(   // It creates a NEW array.
    user => user.toUpperCase()
)
console.log(users)
console.log(Users)
// map() doesn't modify the original array.

// Question
const nums = [1,2,3];

const solution = nums.map(num => {  // It will not gonna work - gives undefined => [ undefined, undefined, undefined ] - as {num*2} doesn't returning anything.
    num * 2;
});

console.log(solution);


// Filter Operation | Keep only matching elements
let numbers =[1,2,3,4,5,6,7,8,9]
let even = numbers.filter(number => number %2==0);
console.log(even);

/*

map()    → transform everything
filter() → keep many items
find()   → get FIRST matching item

*/

// Find Operation
console.log(users.find(user => user.length > 4)) // Output would be amaan

// Real World Example
const candidates = [
    {
        id: 1,
        name: "Ali"
    },
    {
        id: 2,
        name: "Amaan"
    },
    {
        id: 3,
        name: "Ahmed"
    }
];

const candidate = candidates.find(  // Finds Candidate with ID - 2
    candidate => candidate.id === 2
);

console.log(candidate);

// // every() → do ALL elements match?
// // OUtputs true or false
// const marks = [60,70,80];
// const results = marks.every(
//     mark => mark >= 50
// );
// console.log(results);  // true

// // some() → do SOME elements match?
// // True or False
// ["Ali","Ahmed"].some(  // False
//     name => name.length > 5
// )  

// // Example
// ["Ali","Ahmed"].some(
//     name => name.length > 5
// ) // false


/*

[].some(num => num > 0)

some() asks: "Does at least one element satisfy the condition?"
The array is empty, so there is no element that can satisfy it.
Therefore, the answer is false.

[].every(num => num > 0)

every() asks: "Do all elements satisfy the condition?"
There are no elements that violate the condition.
Since no counterexample exists, JavaScript returns true.

*/


// reduce() --> Takes manu values and return one value

// Sum of Numbers
const numss = [1,2,3,4];

const total = numss.reduce(
    (sum, num) => sum + num,
    0
);

console.log(total);  // Output would be 10

// Anatomy of Reduce
/*

array.reduce(
    (accumulator, currentValue) => {
        // logic
    },
    initialValue
);

*/

// Product Example
/*

const nums = [2,3,4];

const result = nums.reduce(
    (product, num) => product * num,
    1
);

console.log(result);

*/


// sort() - By Default sort in JS works by sorting alphabetically - Suited for string data
console.log(fruits)
fruits.sort();
console.log(fruits)


// So to sort in ascending or descending, we have to ompare function.
const array = [1, 10, 2, 5];

array.sort((a, b) => a - b); // For Ascending Order -> for Descending it would be b - a

console.log(array);

// Spread Operator (...)  -> it removes square brackets in output
const row = [1,2,3];
console.log(...row);


// Copying Arrays
const newFruits = fruits;
const newestFruit = [...fruits]

// Merging Arrays
const frontend = ["HTML","CSS"];
const backend = ["Node","MongoDB"];

const skillas = [
    ...frontend,
    ...backend
];

console.log(skillss);  // Outout -> ["HTML","CSS","Node","MongoDB"]