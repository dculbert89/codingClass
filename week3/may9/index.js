// // // Arrays -> Storage container for stuff
// // let exampleArray = ["dog", "cats", "rodents", "lizards"];
// // let petAges = [10, 15, 14, 12, undefined, null, true, false];

// // Array Method -> coding operation that allws us to do something to an array and it's contents
//     // Put inside box:
//         // .unshift()
//         // .push()
//     // Take out box:
//         // .pop()
//         // .shift()
//     // Clone a box:
//         // .slice()
//     // Find something in box
//         // .indexOf()
//     // Flip box on its head:
//         // .reverse
//     // How to tell if a box is a box:
//         // Array.isArray()
//     // How to tell how many things are in box: 
//         // .length    (technically a property)

//     // Logical Statements -> Checks if conditions are true or not. To do something if true, do something else if false
//     let puppysAge = 9

//     if (puppysAge < 20) {
//         console.log("Do not spay just yet")
//     } else {
//         console.log("Time to go to the vet")
//     }


//     let xaviersAge = 4
//     let lizardMaxAge = 50

//     if (xaviersAge < 4){
//         console.log("Just a baby")
//     } else if (xaviersAge === 50){
//         console.log("Old man lizard")
//     } else {
//         console.log("Just a lizard living his lizard life")
//     }


//     // Student Q: Difference between == and ===
//         // ==  ->  Only requires the two values being compared
//         // to be the same IDBCursorWithValue. (JavaScript may implicitly coerce
//         // one value into another data type)
//             // Example
//             if (10 == "10")
        
//         // ===   ->  Requires the two values being compared to be the same value AND the same data type.
//             if (10 === "10")  --> return false





// // Loops: --> Do something over and over until a breaking point.
  

// // while
//         // Skeleton Syntax:
//             // Example:
//             //  while (logical condition) {
//                 // any code here will repeat until logical condition is no longer true
//                 // }

// let grandfathersAge = 40;

// while(grandfathersAge < 67) {
//     console.log("time to go to the office")
//     grandfathersAge += 1
//     // grandfathersAge++
//     // grandfathersAge = grandfathersAge + 1
//     console.log("My grandpa's new age: ", grandfathersAge)
// }




// let currentClassDay = 11;
// let numOf2023ClassDays = 30;

// while(currentClassDay < numOf2023ClassDays){
//     console.log("Time to log into Zoom")
//     console.log("oh sh*t not another JS problem..")
//     currentClassDay++;
// }



// let vetClinicQueue = ["Koda", "Olive", "Ace", "Maple", "Phinn", "Yuki"]
// let currentPetIndexNumber = 0;

// while(currentPetIndexNumber < vetClinicQueue.length) {
//     console.log("Hello, " + vetClinicQueue[currentPetIndexNumber])
//     currentPetIndexNumber
// }



// let vetClinicQueue = ["Koda", "Olive", "Ace", "Maple", "Phinn", "Yuki"]
// let currentPetIndexNumber = 0;

// while(vetClinicQueue.length > 0) {
//     let currentPetBeingSeen = vetClinicQueue.shift();
//     console.log("currentPetBeingSeen: ", currentPetBeingSeen);
//     console.log("The vet clinic queue", vetClinicQueue);
// }



// // for loops --> A marathon runner.
//     // 1) Starting point
//     // 2) Race Conditions (When is it over?)
//     // 3) Vicory Lap celebration --> What do we do at the end of each race?


// for(let numOfKmsRunSoFar = 0; numOfKmsRunSoFar < 10; numOfKmsRunSoFar++ ){
//     console.log(numOfKmsRunSoFar);
// }



// let morePetsArray = ["Mona", "Toto", "Eevee", "Lincoln", "Coco", "Luna"]

// for (let currentQueueNumber = 0; currentQueueNumber < morePetsArray.length; currentQueueNumber++){
//     console("Currently seeing pet number ", currentQueueNumber)
//     console.log("Hello, ", morePetsArray[cu])
// }


