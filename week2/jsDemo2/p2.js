let confirmationCodeA = "abcdefg";
let confirmationCodeB = "abcdefg";

let authCodeOne = "987654321";
let authCodeTwo = "98765421"; 

function confirm(data1, data2) {
    if (data1 == data2) {
        return true;
    } else {
        return false;
    }
}

console.log(confirm(confirmationCodeA, confirmationCodeB));
console.log(confirm(authCodeOne, authCodeTwo))