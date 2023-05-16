// ****!!!!!!!!   FOR and WHILE Loops    !!!!*********

// while

// let n = 0;

// // while (is true) run code
// while (n < 3) {
//     console.log('in the loop:',n);
// // n = n +1
//   n++;
// }

// console.log('after the loop:', n);
// // Expected output: 3


// let count = 0;

// while(count){
//     console.log('i am count', count)
// }


// while(count >= 0){
//     console.log('in loop', count);
//     // count--
//     count = count -1;
// }

// console.log('after of loop:', count);



//for

// const animalArr = ['dog', 'cat', 'cow']

//    where to start; condition; what to do
// for(let i = 0; i < animalArr.length; i++){
//     console.log('i am i:', animalArr[i])
// }

// const numbersArr = [3444, 5555, 6666, 7777];

// for(let i = numbersArr.length - 1; i >= 0; i--){
//     console.log(`Index of ${i}:`, numbersArr[i])
// }

// console.log()



// for(k = 1; k <= 50; k += 2) {
//     console.log(k)
// }



// Print all numbers down to 0
// - create a function
// - it should take one parameter, which represents a number
// - the function should print all the numbers from the parameter down to, and including 0


// function countDown(num){
//     while(num >= 0){
//         console.log(num);
//         // num = num - 1;
//         num--;
//     }
// }

// countDown(10)

// function countDown(num){
//     for(let i = num; i >= 0; i--){
//         console.log('for loop num: ', i)
//     }
// }

// countDown(7)


// Print all odd numbers less than 100
// - create a function
// - print all odd numbers less than 100


// function oddNumbers (){
//     for (let i = 99; i>0; i--){
//         if(i % 2 === 1){
//             console.log(i);
              
//         }      
//     }
// }

// oddNumbers()


// Multiplication tables
// - create a function 
// - it should take one parameter, which represents a number
// - print the multiplication of that number from 1 to 10

// function multiply (num){
//     let count = 10;
//     while (count>0){
//         console.log(count * num);
//         count = count - 1;
//     }
// }

// multiply(2)

// function multiply(num){
//     for(let i = 1; i <= 10; i++){
//         console.log(i * num);
//     }
// }

// multiply(2)


// - create an array
// - create a function that takes one parameter, which will be an array
// - the function should print each element of the array

// function arrayElement (i){

//     while 
//     console.log(myArr)
// }

// arrayElement()

// const animalArr = ['dog', 'cat', 'cow'];

// function printArray(arr){
//     for(let i = 0; i < animalArr.length; i++){
//     console.log(arr[i]);
//     }
// }

// printArray(animalArr)

Factorial 
- create a function
- it should take one parameter, which represents a number
- return the factorial of the parameter


// function factorial(num){
//     if (num > 0) {
//         console.log((num = (num - 1) * num))
//     }
// }

// factorial(8)


function factorial(num){
    let answer = 1;

    while(num > 0){
        // answer = answer * num;
        // num = num - 1;

        answer *= num
        num--
    }
    return answer
}


console.log(factorial(2))



// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   };
  
//   console.log(factorial(3)); // 6


// MyPush
// - create a function
// - it should take two parameters, the first is an array and the second is an element to be added to the array
// - add the element to the end of the original array
// - return the new length of the array

// const animals = ['pig', 'goats', 'cows']

// function myPush(arr, elem){
//     let endOfArray = arr.length;
//     arr[endOfArray] = elem;

//     return arr.length;
// }

// console.log('length: ', myPush(animals, "horse"))
// console.log('animals', animals)