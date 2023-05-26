// Prompt #2: 
// You've finally secured a great programming job at a major toy company. Things have been going pretty smoothly, but this year there's been a big problem. It appears that due to a factory accident, there are some dangerous chemicals in some of the toys. 

// Write a function called removeFaultyToys that accepts one parameter called toyInventory, which you can expect will be an array of objects, where each object is a toy's individual details. That parameter could receive an argument value like this:

let toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true
    },
    {
        name: "Teddy Bear",
        containsChemicals: false
    }
]

// Your function should return a new array with only the toys that do NOT contain any dangerous chemicals. 

function removeFaultyToys (toyInventory) {
    if (toyInventory.containsChemicals === false) {
        return toyInventory; 
    }
}

// Use one of the array looping methods to solve this puzzle.
console.log(toyInventory2023.filter(removeFaultyToys))


// function removeFaultyToys (toyInventory) {
//     // Option1:
//     function doesThisContainChemicals (singleToy) {
//         if (!singleToy.containsChemicals) {
//             // if (singleToy.containsChemicals === false)
//             // line 36 and 37 are the same
//             return singleToy
//         }
//     }
// }

    // let undamagedToys = toyInventory.filter(doesThisContainChemicals)
    // return undamagedToys;

    // // Option 2
    // let undamagedToys = toyInventory.filter((singleToy) =>{
    //     if (!singleToy.containsChemicals) {
    //         return singleToy
    //     }
    // })