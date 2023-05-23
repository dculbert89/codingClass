// // Callback Functions
//     // Definition: function that is used inside of another function as an argument

// const { func } = require("prop-types");

//         // example:
//             function add (a,b){
//                 return a+b;
//             }

//             function subtract (a, b){
//                 return a-b;
//             }
//                                     // \/ add or substract
//             function calculator(a, b, callback) {
//                 return callback(a, b)
//             }

// // Jaclyn's Plain English Example
// function cleanBathroom(){
//     return "I'm cleaning the bathroom"
// }

// function goTakeCareOfBossDog(){
//     return "Ok boss I'll take care of the dog"
// }

// // Main Function
// function ellesToDoToday (jobAssignment){
//     // return jobAssignment()
//     let ellesJobToday = jobAssignment()
//     return ellesJobToday
// }

// // Function Expression (anonymous functions/ anonymous expressions
// const newVar = () => {
//     console.log("I am a function expression")
// }
 


// Loops
    // for loop
    // while loop
    // for... in loop (!!!!!!!ONLY FOR OBJECTS!!!!!!!!)


// let momsGroceryList = [
//     "eggs",
//     "milk",
//     "bread",
//     "lettuce",
//     "chicken"
// ]

// Array Looping Methods
    // .forEach
        // always returns undefined
        // It will run one callback function for each individual element in an array

        // function slapGroceryItem (groceryListItem) {
        //     console.log("ok mom I will slap the " + groceryListItem);
        // }
        
        // momsGroceryList.forEach(slapGroceryItem)



    // .map  (basically a for loop that returns new array)
        // returns new array where each element in the new array is the returned out of the callback function

        let momsGroceryList = [
            "eggs",
            "milk",
            "bread",
            "lettuce",
            "chicken"
        ]

        function replaceGroceryItemWithCandy (singleGroceryItem) {
            return "Crunchy Chocolate Bars"
        }

        let myGroceryHaul = momsGroceryList.map(replaceGroceryItemWithCandy)
            
        console.log(myGroceryHaul)


    // .filter
        // return a new array where it only contains that have passed a certain logical test

        // let arrOfNums = [1,2,3,4,5,6]

        // function isGreaterThanThree (num) {
        //     if (num > 3) {
        //         return num;
        //     }
        // }

        // let newFilterArray = arrOfNums.filter(isGreaterThanThree)

        // console.log(newFilterArray)



    // .sort
    // .some
    // .every
