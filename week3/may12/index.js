// If value is true, print true

// if value is false, print corresponding result

const input1 = "I am String"
const input2 = "false"
const input3 = "null"
const input4 = "undefined"
const input5 = 0
const input6 = ""

if(input1){
    console.log("true")
} else {
    console.log("false")
}


if(input1){
    console.log("true")
} else {
    console.log("false")
}


if(input2){
    console.log("true")
} else {
    console.log("false")
}


if(input3){
    console.log("true")
} else {
    console.log("false")
}


if(input4){
    console.log("true")
} else {
    console.log("false")
}


if(input5){
    console.log("true")
} else {
    console.log("false")
}


if(input6){
    console.log("true")
} else {
    console.log("false")
}


// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

function sumOfNumbers(num1, num2){
    let answer = num1 + num2;
       
    if (answer > 100){
        return answer + " is greater than 100";
    } else if (answer > 0){
        return answer + " is greater than 0";
    } else if (answer = 0) {
        return answer + " is equal to zero";
    } else {
        return answer + " is a negative number";
    }
}

console.log(sumOfNumbers(50, 51));
console.log(sumOfNumbers(99, -2));
console.log(sumOfNumbers(0, 101));
console.log(sumOfNumbers(0, 101));
console.log(sumOfNumbers(500, -500));
console.log(sumOfNumbers(-5, 0));

// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

function equalToFive (num1, num2){
    if (num1 === 5 && num2 === 5){
        console.log("true");
    } else {
        console.log("false");
    }
}

equalToFive(5, 6);
equalToFive(10, 11);
equalToFive(0, 0);
equalToFive(1000, -1000);
equalToFive(6, 4);
equalToFive(5, 5);

// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

// Values to test:

function strictEquality (param1A, param1B, param2A, param2B){
    if (param1A === param1B || param2A === param2B) {
        console.log("true");
        } else {
        console.log("false");
    }
}

strictEquality("cat", "cat", 6, "6");
strictEquality("five", 5, "dog", "dawg");
strictEquality(0, false, "horse", "horse");
strictEquality("eight", "eight", "ate", "ate");
strictEquality(11, "eleven", "four", "for");
strictEquality("cake", "cake", "pie", "pie");

