// // Skeleton Suntax of a funcion declaration:

// // function nameOfFunction (paramA, paramB) {
//     // You can write whatever code you want to execute
// // }

// // Comparison Operator Defintion:
// // ! will convert a value to its opposite boolean

// // == equal to
//     // Will attempt to compare two values, 
//     // and if those values are different data types, 
//     // will try to convert one of the values into the 
//     // same data type as the other value (if possible)

// // === equal to same value & data type
//     // Will force both values to be both the SAME data 
//     // typoe as well as the SAME value
//     // TIP: If you're ever in doubt over which equality
//     // operator to use, just use the true equality.

// // != not equal
// // !== not equal to same value & data types
//     // Requires both values to NOT be the same data type and value
// // > greater than
// // < less than
// // >= greater than or equal to
// // <= less than or equal to

// // OR operator
//     // ||
// // AND operator
//     // &&

// //Skeleton Syntax for If-Else Statements:
//     // allow us to giver our JavaScript code the ability to "think" for itself.
//     // JavaScript programs to be able to figure out what to do in a give situation.
// //Syntax:
//     // if (logicalConditionGoesInHere) {
//         // What code do you want to run if this logical condition is true
//     // else {
//         // What code do you want to run if all above is NOT true.
//     // }

// // Syntax for if-else-if-else statements
//     // if (logicalConditionGoesInHere) {
//         // What code do you want to run if this logical condition is true
//     // } else if (anotherLogicalConditionInHere) {
//         // Note: You can have as many else-if statemnets under your
//         // if statment (but remember, above your else statement) as 
//         // you want
//     // }
//     // else {
//         // What code do you want to run if all above is NOT true.
//     // }
    
// // function canIGoOutsideWhenRaining (currentTemp, hasARaincoat) {
// //     if (currentTemp > 50 || hasARaincoat === true) {
// //     console.log("we can go outside!")
// // } else {
// //     console.log("we can't go outside")
// // }
// // } 

// // canIGoOutsideWhenRaining(49, false)

// // function whatMealTimeIsIt(timeOfDay) {
// //     if(timeOfDay === "morning") {
// //         console.log("It's time for breakfast")
// //     } else if (timeOfDay === "afternoon") {
// //         console.log("It's time for lunchtime")
// //     } else if(timeOfDay === "midnight" || timeOfDay === "early morning"){
// //         console.log("snacktime!")
// //     } else {
// //         console.log("it's time for dinner")
// //     }
// // }

// // whatMealTimeIsIt("afternoon")
// // whatMealTimeIsIt("midnight")
// // whatMealTimeIsIt("late")

// function doMultipleLogicOperations (userName, password) {
//     if (userName.length < 5) {
//         console.log("Your name is too short")
//     }

//     if (userName === "admin") {
//         console.log("you  may not take that username")
//     }
    
//     if (password === 0) {
//         console.log("You forgot to ender your password info")
//     }
// }

// doMultipleLogicOperations("admin", "")

// Explicit vs Implicit Coercion
//Explicit Coercion
    // This is when you as a developer are specifaclly trying to 
    // convert one value to another different data type.

// let strVariable = "10";

// let newNumVar = Number(strVariable)

// Implicit Coercion:
    // This is when JS, on its own, tries to convert data types
    // into other data types while trying to solve logical problems
    // or other coding operations

// console.log("10" === 10)