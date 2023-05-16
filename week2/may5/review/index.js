// Arrays are simply a box or a container used to store "stuff"
// (specifically, JavaScript values). 

let varA = "music records"
let varB = "furniture"
let varC = "lamp"
let movingBox = ["music records", "furniture", "lamp", "tv"]
            //           0              1         2     3    
// All arrays are labeled with index postions. Specifically, 
// every element (or item) in the array is labeled a numeric
// index position from 0 onwards.
        // How do we access individual elements?
        // Array notation refers to the coding operation of
        // accessing an element in an array by its index number.
    // Skeleton Syntax for array notation:
        // Example:
            // nameOfYourArray [indexNumberOfTheElementYouWant]

            console.log(movingBox[2])
            // These two are the same
            console.log(movingBox[3])
            //                   length of array - 1 = 3
            console.log(movingBox[movingBox.length - 1])

            // dculbert89@GamingPC review % node index.js
            // lamp
            // tv
            // tv

// Array Methods: Simply you can do to a "box".
    // .push
    // Tech Deff: adds an element to the end of an array
    // Elle's Deff: put a thing at the top of a box
        // Skeleton Syntax:
        // nameOfYourArray.push(theThingYouWantToAddToYourBox)
let movingBoxTwo = ["stool", "lamp", "cutlery"];
console.log(movingBoxTwo)

movingBoxTwo.push("coat");
console.log(movingBoxTwo)

// dculbert89@GamingPC review % node index.js
// lamp
// tv

let movingBoxTwo = ["stool", "lamp", "cutlery"];

function helpMyForgetfulMom (momsLastMinuteItem) {
    movingBoxTwo.push(momsLastMinuteItem);
    console.log(movingBoxTwo);
};

helpMyForgetfulMom("chair")
helpMyForgetfulMom("jewely")
helpMyForgetfulMom("dog toys")

// dculbert89@GamingPC review % node index.js
// [ 'stool', 'lamp', 'cutlery', 'chair' ]
// [ 'stool', 'lamp', 'cutlery', 'chair', 'jewely' ]
// [ 'stool', 'lamp', 'cutlery', 'chair', 'jewely', 'dog toys' ]

        // !!!!!!!!!!!THIS ONE DIDN'T WORK!!!!!!!!!!!!
let movingBoxThree = []
let movingBoxFour = ["styrofoam"]

function helpMyForgetfulMomVersionTwo (newCardboardBox, momsLastMinuteItem){
    newCardboardBox.push(momsLastMinuteItem)
    newCardboardBox.push(anotherLastMinuteItem)
    console.log(newCardboardBox);
}

helpMyForgetfulMomVersionTwo (movingBoxThree, "art supplies", "paintbrush");
helpMyForgetfulMomVersionTwo (movingBoxFour, "paintingOne", "paintingThree");
helpMyForgetfulMomVersionTwo (movingBoxFour, "paintingTwo", "paintingFour");

// .pop
    // skeleton syntax:
        // nameOfYourArrary.pop()
        // You don't need to put anything in the parentheses.
    // Removes the last thing from a box
// .shift
    // skeleton syntax:
        // nameOfYourArrary.shift()
        // You don't need to put anything in the parentheses.
    // Removes the first thing you add to a box
// .unshift
    // skeleton syntax:
        // nameOfYourArrary.unshift()
        // You don't need to put anything in the parentheses.
    // adds something to the bottom (beginning) of a box
// .slice
    // skeleton syntax:
        // nameOfYourArrary.slice()
        // You don't need to put anything in the parentheses.
    // Options for .slice
        // nameOfYourArrary.slice()
            // This will clone the entire array
        // nameOfYourArrary.slice(startingIndesNumber)  
            // This will clone the entire array, but start at index position
let clonedAnimals = ["dolly the sheep", "some random mouse", "some random cow"];

let newClonedAnimals = clonedAnimals.slice(1);
console.log(newClonedAnimals)
        // Skeleton Syntax:
        // nameOfYourArray.slice(startingIndexNumber, endingIndexNumber;)
let moreClonedAnimals = clonedAnimals.slice(1, 2)
console.log(moreClonedAnimals)
    // Clones a box

// .indexOf Skeleton Syntax:
    // nameOfYourArray.indexOf (theThingYoureLookingFor)
let mySistersApartmentFloor = ["pizza boxes", "cardboard boxes", "rumba"];
    // .indexOf searches for something inside of a box and gives you
    // the "list number" (aka index of that thing)
console.log(mySistersApartmentFloor.indexOf("rumba"))
console.log(mySistersApartmentFloor.indexOf("pizza boxes"))

// .includes Skeleton Syntax:
    // nameOfYourArray.includes (theThingYoureLookingFor)
    // This searches for whether a box contains given item.
    // TRUE or FALSE
let mySistersApartmentFloor = ["pizza boxes", "cardboard boxes", "rumba", "pair of earrings"];
console.log(mySistersApartmentFloor.includes("pair of earrings"))

// .reverse Skeleton Syntax:
    // nameOfYourArray.includes ()
    // You don't need to put anything in the parentheses.
    // Flips box on it's head (reversing it)
 let mySistersApartmentFloor = ["pizza boxes", "cardboard boxes", "rumba", "pair of earrings"];
 console.log(mySistersApartmentFloor.reverse())

// Array.isArray Skeleton Syntax:
    // Array.isArray(nameOfYourArray)
    // Tool tells you whether a box is in face a box
    // TRUE or FALSE

console.log(Array.isArray(mySistersApartmentFloor))
console.log(Array.isArray(10))

// Prompt: I want to teach my very-literal nephew how to grab 1st and Last blocks out 
// of a series of blocks, and then add the numbers on them to get final sum. Write a 
// function to do this.

function addFirstAndLastBlock (blocksArr) {
    let firstBlock = blocksArr[0]
    let lastBlock = blocksArr[blocksArr.length - 1]
    
    return firstBlock + lastBlock
}

console.log(addFirstAndLastBlock([1, 2, 3, 4, 5]))