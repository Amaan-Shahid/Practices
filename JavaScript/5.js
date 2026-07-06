// What is an Object? -> An object is a collection of key-value pairs.

const student = {  // Creating Object
    name: "Amaan",
    age: 20,
    dept: "CSE"
}

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2028
}

// Accessing Properties with Dot Notation
console.log(car.brand)

// Accessing Properties with Bracket Notation
console.log(car["model"])

// If value comes from a variable than we must use bracket notation
// key === "branch"
// student.branch === student."branch" -> which isn't true.

// Updating properties
student.name = "Amaan Shahid"
console.log(student["name"])

// .. Adding new Properties
student.course = "BESE-30"
student.section = 'A';
console.log(student.course)
console.log(student.section)

// Deleting Properties
console.log(student)
delete student.section;
console.log(student)

// Array inside an object
const person = {
    name: "Amaan Shahid",
    age: 20,
    isStudent: true,
    hobbies: ["fun","fun","fun"]
}

console.log(person);

// Access Nested Array

console.log(person.hobbies[0]);

// Nested Objects
// lets say we already have an object named as student, lets create another object name Uni inside that object
student.Uni = {
    name: "NUST",
    CPGA: "Mat poochoo",
    city: "Islamabad H-12 / Rawalpindi MCS"
}

console.log(student)

// Objects Inside Arrays
const students = [
    {
        rank: 1,
        name: "Amaan"
    },
    {
        rank: 2,
        name: "Ali"
    },
    {
        rank: 3,
        name: "Amna"
    }
]

console.log(students)
console.log(students[1])
// While every other things remains same, like adding, deleting properties, updating etc as we do it single object.


// Real API Example
const user = {
    id: 1,
    name: "Amaan",

    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    },

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
};

console.log(user.address.country) // Accessing Data



// Objects Methods & this
// What is a method? => A function inside an object.
student.greet = function (){
    console.log("Hello Amaan!")
}

console.log(student);

student.greet();  // Calling a Method

// student.greet -> Not Exectuing Function but refering to the function





/*

const student = {
    greet: function () {
        console.log("Hello");
    }
};

const student = {                                 ======> Modern JS allows this
    greet() {
        console.log("Hello");
    }
};


*/



// Now the question arises why exactly we used methods => answer would be without method, we have to hardcode everything if we want to access object info.


// ==================================================================================

// this keyword -> used to define current object
const student2 = {
    name: "Ali",

    introduce() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// inside objects methods,prefer not to use arrow function as Arrow functions do not have their own this.

/*

Object Destructuring
Destructuring means unpacking values from an object or array into separate variables.


Without Object Destructuring
const student = {
    name: "Amaan",
    age: 20,
    cgpa: 3.5
};

const name = student.name;
const age = student.age;
const cgpa = student.cgpa;

console.log(name);
console.log(age);
console.log(cgpa);              ---------------> Works but it's repetitive


With Destructuring

const student = {
    name: "Amaan",
    age: 20,
    cgpa: 3.5
};

const { name, age, cgpa } = student;

console.log(name);
console.log(age);
console.log(cgpa);



Rule #1
The variable names must match the property names.



Suppose you want a different variable name.
const student = {
    name: "Amaan",
    age: 20
};

const { name: studentName } = student;

console.log(studentName);


....Mulitple Nested Values
const {
    university: {
        name,
        city
    }
} = student;

console.log(name);
console.log(city);


*/



// Array Destructuring
// const colors = [
//     "Red",
//     "Blue",
//     "Green"
// ];

// const [first, second] = colors;

// console.log(first);
// console.log(second);


// Skip Elements
const nums = [10,20,30];

const [, second] = nums; // The comma skips the first element.

console.log(second);  

// Imagine an API returns:
const individual = {
    id: 1,
    name: "Amaan",
    email: "amaan@gmail.com"
};

// So, Instead of
console.log(individual.name);
console.log(individual.email);

// While person knowledge of Object Destructuring.....will
// const {name, email} = individual;



const employee = {
    id: 101,
    name: "Amaan",
    department: {
        name: "Engineering",
        floor: 3
    },
    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ]
};

// Using destructuring only:

// Get id.
// Get name.
// Get department.name as departmentName.
// Get floor.
// Get the first skill as primarySkill.

// No dot notation after the destructuring statement.


const {id} = employee;

const {name} = employee;

const {
    department: {
        name : departmentName
    }
} = employee;

const {
    department: {
        floor
    }
} = employee;

const {
    skills : [primarySkill]
} = employee;





