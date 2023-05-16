/*
#2: 
Prompt: Each person in this pairing should create an object that describes the main character of that person's favorite tv show or movie. Each object should contain at least 5 key-value pairs (although please feel free to include more if you like.) Those key-value pairs should have keys called:
    - name (which you can expect will be given a string value)
    - age (which you can expect will be given an integer value)
    - occupations (which you can expect will be given an array of strings, where each string represents an occupation)
    - isHero (which you can expect will be a boolean) 

Lastly, you should write 8 console.log statements. The first 4 should console.log each individual key-value pair using bracket notation, and the latter 4 should console.log each key-value pair using dot notation. 

At the end of this exercise, each of you should have 2 objects, one for each of you. 
*/

const faveCharacter = {
    name: "Monkey D. Luffy",
    age: 19,
    occupation: "pirate",
    isHero: "He's going to be the Pirate King",
}

// Bracket Notation
console.log(faveCharacter["name"]);
console.log(faveCharacter["age"]);
console.log(faveCharacter["occupation"]);
console.log(faveCharacter["isHero"]);

// Dot Notation
console.log(faveCharacter.name);
console.log(faveCharacter.age);
console.log(faveCharacter.occupation);
console.log(faveCharacter.isHero);