// function dogsHealthy (dogtemp, diet) {
//     if (dogtemp > 96 && diet !== "vegan") {
//     console.log("The dog is healthy")
//     } else if (diet == "vegan" && dogtemp < 100) {
//         console.log("the dog is on a special diet, but healthy")
//     } else {
//         console.log("the dog is not healthy. Please seek care")
//     }
// } 

// dogsHealthy (98, "vegan")

// // Paramameters are declare
// function nameOfFunction (paramOne, paramTwo) {}

// // Arguements are when you INVOKE
// nameOfFunction (argumentOne, ArgumentTwo)

// JavaScript review

// Topics:

    //  - Truthiness and Falsiness
        // Boolean --> true or false
        // let isItRaining = true;
        // let hasDoneDoctorCheckup = false;

        // let randomString = 'hello'
        // let randomNumber = 10;

        // true == randomString

        // Strings
            // Non-empty strings are considered TRUTHY
            // Empty strings are considered FALSEY
            // "" == "hello"
        // Numbers
            // All non-zero numbers are considered TRUTHY
            // Zeros are considered FALSEY
            // true == 0
        // Undefined + Null + NaN
            // All of these data types are all considered FALSEY

// Explicit vs Implicit Coercion
//Explicit Coercion
    // This is when you as a developer are specifaclly trying to 
    // convert one value to another different data type.
    // let stringNumber = "15"
    // let actualNumber = Number(stringNumber)

// let strVariable = "10";

// let newNumVar = Number(strVariable)

// Implicit Coercion:
    // This is when JS, on its own, tries to convert data types
    // into other data types while trying to solve logical problems
    // or other coding operations