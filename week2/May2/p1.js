// Problem #1
    // Declare a function, defaultGreet, that has 2 parameters, one called firstName
    // and another called lastName. You can expect that both of those parameters
    // will always be input by your users as string arguments.
    // defaultGreet should return a string greeting that concatenates the two names
    // together.
    // If the user did not pass in a lastName as an argument, set the lastName as "Doe".
    // Reminder: Don't forget to invoke your function after you write it to test that
    // it works as expected!
    // Write your code below:

// function defaultGreet(firstName, lastName) {
//     if (lastName.length === 0) {
//         let greetingSentance = firstName + " " + "Doe" + ", hello!"
    
//         return greetingSentance;
//     } else {
//         let greetingSentance = firstName + " " + lastName + ", hello!"
    
//         return greetingSentance;
//     }
// }

// console.log(defaultGreet("David", ""))



// Problem #2
    // Declare a function called myMnemonic that has 4 parameters: stringA, stringB
    // and so on. You can expect that your users will always input string arguments
    // for each of those parameters.
    // myMnemonic should return the total sum of each length of each string argument,
    // added all together.
    // For example, if the length of stringA is 1, stringB 2, stringC 3, and stringD 4,
    // then your function should return 10 (4 + 3 + 2 + 1).
    // // Reminder: Don't forget to invoke your function after you write it to test that
    // it works as expected!
    // Write your code below:

// function myMnemonic (stringA, stringB, stringC, stringD) {
//     return stringA.length + stringB.length + stringC.length + stringD.length
// }

// console.log(myMnemonic("a", "as", "the", "four")

// Problem #3
    // Declare a function called evenOrOdd that takes in one parameter called numberValue.
    // You can expect that your users will always input a number argument for that
    // parameter.
    // evenOrOdd should return a string that says "Even" if the numberValue is an even
    // number, or a string that says "Odd" if the numberValue is an odd number.
    // Reminder: Don't forget to invoke your function after you write it to test that
    // it works as expected!
    // Write your code below:

    function evenOrOdd (numberValue) {
        if (numberValue % 2 === 0) {
            return ("The number is even");
        } else {
            return ("The number is odd")
        }
      }
console.log(evenOrOdd (2))