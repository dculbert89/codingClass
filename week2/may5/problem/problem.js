// Prompt #1:
// In "Avengers: Infinity War", the supervillain Thanos obtains all 5 Infinity Stones 
// and snaps half of the universe as though they never existed. 

// Write a function that accepts an array of superheroes (represented as strings) and 
// returns a new array 
// where half of the superheroes have been "snapped out of existence". For convenience, 
// you should remove the latter half of the array's superheroes.
// For example:
// If you were given an array like
// ["Iron Man", "Captain America", "Thor", "Dr. Strange", "Spiderman", "Groot"]
// Your function should return ["Iron Man", "Captain America", "Thor"]
// (the latter half of the array has been removed)

// let superHeroes = ["Iron Man", "Captain America", "Thor", "Dr. Strange", "Spiderman", "Groot"]

// function snappedOutOfExistence (heroArr) {
//     return superHeroes.slice(0,3);
// }

// console.log(snappedOutOfExistence())


// // *************!!!!!!! Elle's Solution !!!!!!!!*************
// // Pre-step: I need instructions
// function infinityWar (listOfSuperHeroes) {

// // Real life translation of this problem:
// // 1) I have a list of names. I need to remove the latter half of the list's names
// // 2) Next, once I have the list of names, I need to count how many names are in the list
// let numOfHeroes = listOfSuperHeroes.length;
// // 3) Once I know how many names are on the list, I need to divide that number by 2
// let howMuchIsHalf = numOfHeroes / 2
//     // a) Caveat: If the number I divided is a decimal number, I need to choose 
//     // between round up or down. ***ROUND DOWN = Math.floor****
// let halfOfHeroesWholeNumber = Math.floor(howMuchIsHalf)
// // 4) Once I know the whole integer from Step#3, on my piece of paper (the list of heroes)
// // I will count how many heroes I want to keep, and how many to cross off
//     // To help do this IRL, I can get another piece ofpaper to write down the new list of heroes
// let newPieceOfPaper = listOfSuperHeroes.slice(0, halfOfHeroesWholeNumber);
// // 5) I can have my nephew give me the new list
// return newPieceOfPaper;
// }

// console.log(infinityWar(["Iron Man", "Captain America", "Thor", "Dr. Strange", "Spiderman", "Groot"])})



// In Pokemon, you can have a team of 6 pokemon total, and if you ever try to add more than 6 pokemon to 
// your team roster, the last one you added is sent to the PokeCenter for storage. Write a function that accepts 
// two parameters: an array of strings (where each string is a pokemon's name), and another parameter that will 
// be a string representing a newly caught pokemon's name. You can expect that the 1st parameter (the array) will 
// always contain 6 elements or less (and never more).
// Your function should add the pokemon to your team roster array IF there is room for that pokemon (i.e. less than 6). 
// If there's no room for that pokemon, remove the last pokemon from the array, and then add the newly caught pokemon.
// Finally, your function should return the newly updated pokemon roster array.
// For example:
// Example #1:
// If you were given these 2 argument values:
// addPokemonToRoster(["pikachu", "squirtle", "charmander"], "bulbasaur")
// Then your function would return:
// ["pikachu", "squirtle", "charmander", "bulbasaur"]
// Example #2:
// If you were given these 2 argument values:
// addPokemonToRoster(["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "ratata"], "mewtwo")
// Then your function would return:
// ["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "mewtwo"]
// (Note that "ratata", being the last pokemon, was removed and replaced by "mewtwo")



// Pre-step: I need instructions and paper that has my roster and my new pokemon
function updatePokeRoster (teamRoster, newPoke) {
    // Steps in IRL plain English:
    // 1) Look at pape and count how many on team
    let howManyPokeOnTeam = teamRoster.length;
    // 2) Once I know how many, I ask:
        // a)Are there 6 on my team?
            // Option 1) "no" then add at the end of the list
    if (howManyPokeOnTeam < 6) {
        teamRoster.push(newPoke);
            // Option 2) "yes"
                // i) cross off last pokemon
    } else {
        teamRoster.pop();
                // ii) add new pokemon
        teamRoster.push(newPoke);
    }
    return teamRoster;
};

 
    // 3) Write down updated pokemon roster on paper.
   
console.log(updatePokeRoster(["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "ratata"], "mewtwo"))

