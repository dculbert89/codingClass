

// Variables
const varA = 5+5
const varB = 20*2
const varC = 42-3
// User Saying
const userSaying = "You have recieved this message because you have been chosen to open an important vault. Here is the combination: "

// Print to Terminal
// console.log((userSaying + [varA , varB , varC ]))



function code() {
    return (userSaying + " " + varA + " " + varB + " " + varC);
}


console.log (code());