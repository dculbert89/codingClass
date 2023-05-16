// Write a function to check whether an `input` is an array or not.
// - write a function
// - it takes one parameter
// - the function should return true if the input is an array, and false if it is not an array
//   - Test data: console.log(is_array('w3resource')); //false
//   - Test data: console.log(is_array([1, 2, 4, 0]));  //true

// function is_array(param) {
//     if (Array.isArray(param)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(is_array('w3resource')); //false
// console.log(is_array([1, 2, 4, 0]));  //true


// Write a function to get a specific element of an array. 
// - write a function
// - it will take two parameters, the first is an array, the second is the index 
//      that you are looking for
// - the function should return the element of the array at the specified index
// - do not mutate the original array

// function findElem(arr, idx){
//     return arr[idx]
// }

// console.log(findElem([1, 2, 3], 2))
// console.log(findElem(['hi', 'bye', 'hello', 'farewell'], 2))


// Write a function that will add the first and last numbers in an array
// - write a function
// - it will take one parameter that is an array of numbers
// - return the sum of the first and last numbers of the array 

// const myArr = [4, 5, 6, 7, 8]

// function arrayAddition(arr) {
//     return arr[0] + arr[arr.length - 1]
// }

// console.log(arrayAddition(myArr))


// Correct Length? 
// - Write a function 
// - it takes two parameters, an array and a number
// - returns true if the  length of the array matches the provided number and false if it does not. 

const arr = [4, 5, 6, 7, 8, 8]

function checkLength (arr, num) {
    if (arr.length === num) {
    return true
    } else {
    return false
    }
}

console.log(checkLength(arr, 6)) //true
console.log(checkLength(arr, 8)) //false
