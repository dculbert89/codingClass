// If value is true, print true

// if value is false, print corresponding result

// using an array and a for loop

const input = ["i am a string", "false", "null", "undefined", 0, ""]

function trueOrFalse (input){
    for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
        let myArr = input[inputIndex];
    if (myArr){
        console.log("true");
    } else {
        console.log("false");
    }
    }
    return trueOrFalse
}

trueOrFalse(input);
