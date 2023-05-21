// function evenOrOdd(number) {
//     if (number % 2 === 0){
//       console.log("even");
//     } else {
//       console.log("odd");
//     }
//    }

//    evenOrOdd(3)

// arr1 = [1,-4,7,12]

// function positiveSum(arr) {
//     let total = 0
    
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > 0){
//         total += arr[i];
//       }
//     }
//      return total
//   }

//   console.log(positiveSum(arr1))

// function repeatStr (n, s) {
//   let result = "";
//   for (let i = 0; i < n; i++){
//     result += s;
//   }
//   console.log("'" + result + "'");
// }

// repeatStr(6, "I")

// function squareSum(numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]**numbers[i];
//   }
//   return sum;
// }

// console.log(squareSum([1, 2, 2]))


// function summation (num) {
//   let sum = 0;
//   for(let i = 0; i <= num; i++){
//     // sum += i
//     sum = sum + i
//   }
//   return sum
// }

// console.log(summation(8))


// function noSpace(x){
//   let newStr = "";
//   for(let i = 0; i < x.length; i++){
//     if(x[i] !== " "){
//       newStr
//     }
//   }
//   return newStr
// }

// console.log(noSpace("8 j 8"))

// function saleHotdogs(n){
//   if (n < 5){
//     return 100 * n
//   }
//   if (n>= 5 && n <10){
//     return 95 * n
//   }
//   if ( n >= 10) {
//     return 90 * n
//   }
//   return saleHotdogs
// }

function howManydays(month){
  var days;
  switch (n){
      
      case 1: n===1 || n===3 || n===5 || n ===7 || n ===8 || n ===10 || n===12
        x = 31
      
      
      case 2: n===4 || n===6 || n===9 || n===11 
        x = 30
      
      
      case 3: n===2 
        x = 28
      
  
  }
  return days;
}