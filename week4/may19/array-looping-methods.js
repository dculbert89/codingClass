// Intermediate Array Looping Methods
    // Callback Functions -->
        // Def: A callback function is a function used inside of another function as an argument value.

// function add(valA, valB){
//     return valA + valB
// };

// function substract(valA, valB) {
//     return valA - valB
// }

// function basicCalculator(valA, valB, mathOperation) {
//     return mathOperation(valA, valB)
// }

// console.log(basicCalculator(1, 2, substract))
// console.log(basicCalculator(1, 2, add))

    // for each -->
        // Method will run a given callback function ONCE for each element in an array.
        // Skele Syntax:
            // 1. If function has been declared
                // nameOfYourArray.forEach(nameOfYourCallbackFunction)
            // 2
                // nameOfYourArray.forEach(singleParameterThatWillRepresentASingleElementInTheArray) => { // do sometihng here...}

            // Note: the .forEach method will Always return undefined. It cannot return anyting.
                // The most commusages is to change data, but not actually return it.
    
    
    // // Function Declaration
    // let letterCounter = 0;
    // function stampLetter (letter) {
    //     console.log(`I have just stamped letter: ${letter}`)
    //     letterCounter = letterCounter + 1;
    //     console.log("LetterCounter current count: ", letterCounter)
    // }

    // let lettersArray = ["Mr. Jones", "Mrs. Brown", "Mr. and Mrs. Smith"];

    // lettersArray.forEach(stampLetter)
    // // lettersArray.forEach((letter) => console.log(letter)) // can only be used ONCE

    // //Function expression
    // const sayHello = () => console.log("Hello")

    // .map
        // Def --> Like the .forEach method, the .map method will run a callback function on each individual element in a given array. 
            // The difference between map and forEach is that map will return a whole array where the return value of the callback function gets put into a new array
        // Skele Syntax:
            // nameOfYourArray.map(nameOfYourCallbackFunction)
function addMetalPartToProduct(product){
    return product + "Metal Part"
}

let productConveyorBelt = ["iphone1", "iphone2", "iphone3", "iphone4"]
console.log("Before: ", productConveyorBelt)

let finishedProducts = productConveyorBelt.map(addMetalPartToProduct);

console.log("After: ", finishedProducts)

    // .filter
        // will remove all elements from an array that does not pass a certain logical test ( i.e. a logical test in a callback function)
            // Skele Syntax:
                // nameOfYourArray.filter(nameOfYourCallbackFunction)

function isItEven (numValue){
    if (numValue % 2 === 0) {
        return numValue
    }
}

let exampleArrOfNums = [1,2,3,4,5];
console.log("Before: ", exampleArrOfNums)

let filteredArrayOfEvensOnly = exampleArrOfNums.filter(isItEven)
console.log("After: ", filteredArrayOfEvensOnly)