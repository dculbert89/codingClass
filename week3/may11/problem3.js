/*
#3: 
Prompt: Using the tv show/movie object you made in the previous problem, add a new key-value pair to each of your objects. That key-value pair should have a key called "sayCatchphrase". The value of that new key should be a function that, when invoked, outputs a string that matches that character's defining catchphrase. 

If the character you chose doesn't really have a catchphrase, just have the function return something that your character might say. 

Once you finish, you should test your function twice, once using dot notation, and again using bracket notation.  
*/

const faveCharacter = {
    name: "Monkey D. Luffy",
    age: 19,
    occupation: "pirate",
    isHero: "He's going to be the Pirate King",
    sayCatchphrase: function(){
        console.log("I'm going to be King of the Pirates")
    }
    // sayCatchphrase: "I'm going to be King of the Pirates",
}

// Dot
faveCharacter.sayCatchphrase()

// Bracket
faveCharacter["sayCatchphrase"]