// Problem 1: 
// create an object for your favorite pokemon
// the object should have the following properties: name, age, type (fire/water/etc), and an array of possible evolutions.
// then below your object console.log each of these properties with dot notation and bracket notation

// const myFavePoke = {
//     name: "Gastly",
//     age: 20,
//     type: "Ghost",
//     evolution: ['gastly', 'haunter', 'gengar'],
//     getName: function(){
//         console.log(`I am ${this.name}`)
//     }
// }

// console.log(myFavePoke.name);
// console.log(myFavePoke.age);
// console.log(myFavePoke.type);
// console.log(myFavePoke.evolution);

// console.log(myFavePoke['name']);
// console.log(myFavePoke['age']);
// console.log(myFavePoke['type']);
// console.log(myFavePoke['evolution']);


// Problem 2:
// create a function that will console.log the sentence: 
// "I am <insert pokemon name>"
// then add the function to your object as a method
// then invoke the function so that you see the console.log in the terminal

// const myFavePoke = {
//     name: "Gastly",
//     age: 20,
//     type: "Ghost",
//     evolution: ['gastly', 'haunter', 'gengar'],
//     getName: function(){
//         console.log(`I am ${this.name}`)
//     }
// }

// myFavePoke.getName()



// Problem 3:
// create a function that will increase the age of our pokemon by 1 year: 
// then add the function to your object as a method
// then invoke the function so that you increase the age of your pokemon and then console.log the age (after you have invoked the function)

// const myFavePoke = {
//     name: "Gastly",
//     age: 20,
//     type: "Ghost",
//     evolution: ['gastly', 'haunter', 'gengar'],
//     getName: function(){
//         console.log(`I am ${this.name}`)
//     },
//     growUp: function(age){
//         return myFavePoke.age = myFavePoke.age + 1;
//     }
// }

// console.log(myFavePoke);
// myFavePoke.getName();
// myFavePoke.growUp();
// console.log(myFavePoke.age);


// Problem 4:
// It is time for our pokemon to start dueling, but first they need health and defense stats
// add a health property to our pokemon and set it equal to 50
// add a defense property to our pokemon and set it equal to 20
// next, create a function called 'defend' that will take a single parameter, which is a number. 
// the function will compare the parameter to the defense property of our pokemon.  If the parameter is higher than, or equal to our defense then we will take damage.  Subtract from our health stat the difference between the parameter and our defense stat. (for example if the parameter was 30, we would subtract 10 from our health points. )
// if the parameter was lower than our defense, console.log the following sentence:  'The attack was successfully avoided!'
// then add the function to your object as a method
// then invoke the function, passing in the number 10 and then console.log the health property (after you have invoked the function)

const myFavePoke = {
    name: "Gastly",
    health: 50,
    defense: 20,
    age: 20,
    type: "Ghost",
    evolution: ['gastly', 'haunter', 'gengar'],
    getName: function(){
        console.log(`I am ${this.name}`)
    },
    growUp: function(age){
        return myFavePoke.age = myFavePoke.age + 1;
    },
    defend: function(num){
        if (num >= myFavePoke.defense){
            return myFavePoke.health = myFavePoke.health - (num - myFavePoke.defense);
        } else
            console.log('The attack was successfully avoided!')
    }
}

console.log("Gastly's health before attack", myFavePoke.health)
myFavePoke.defend(10)
console.log("Gastly's health after attack", myFavePoke.health)

