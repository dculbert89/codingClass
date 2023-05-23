// Callback Functions
    // Definition: function that is used inside of another function as an argument
        // example:
            function add (a,b){
                return a+b;
            }

            function subtract (a, b){
                return a-b;
            }
                                    // \/ add or substract
            function calculator(a, b, callback) {
                return callback(a, b)
            }

// Jaclyn's Plain English Example
function cleanBathroom(){
    return "I'm cleaning the bathroom"
}

function goTakeCareOfBossDog(){
    return "Ok boss I'll take care of the dog"
}

// Main Function
function ellesToDoToday (jobAssignment){
    // return jobAssignment()
    let ellesJobToday = jobAssignment()
    return ellesJobToday
}

// Function Expression (anonymous functions/ anonymous expressions
const newVar = () => {
    console.log("I am a function expression")
}
 


// Loops
    // for loop
    // while loop
    // for... in loop (!!!!!!!ONLY FOR OBJECTS!!!!!!!!)


let groceryList = [
    "eggs",
    "milk",
    "bread",
    "lettuce",
    "chicken"
]

// Array Looping Methods
    // .forEach
        // always returns undefined
        // It will run one callback function for each individual element in an array
    // .map
    // .filter
    // .sort
    // .some
    // .every
