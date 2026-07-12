// Lexical Environment

let university = "NUST";

function student() {
    console.log(university);
}

student();


// Question arises how student func finds university. The variable isn't inside the function. but JS founds it. How?
// Due to LExical Environment

// The place where variables and functions live, along with a reference to their parent environment.

/* 

GLOBAL ROOM

university = "NUST"
student = function

students func creates it own room, its checks in its room is this variable available? If not, then they would gonna go towards its parent and search there.

Every Lexical Environment contains:
1. Variables
2. Functions
3. Reference to Parent Environment


Current Environment                 ..........Scope Chaining

↓

Parent Environment

↓

Parent's Parent

↓

Global

*/


let name = "Amaan";

function first() {

    let name = "Ali";

    function second() {

        console.log(name);

    }

    second();

}

first();


/*

When second() executes, JavaScript first looks for a variable named name in second()'s Lexical Environment. Since it doesn't find one, it follows the Outer Environment Reference to the Lexical Environment of first(). There it finds a variable named name whose value is 'Ali', so the search stops. JavaScript never continues to the Global Lexical Environment because the variable has already been resolved.

*/
