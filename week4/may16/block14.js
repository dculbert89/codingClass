// Only odds

const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
const odds = [];
for (const num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds);



// Vowel Vs Consonant

const vowels = ['a', 'e', 'i', 'o', 'u']
   
function countVowel(str){
    let count = 0

    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)) {
            count++;
        } 
    }
    return count;
}  

const string = countVowel('hello');



console.log("hello has " + string + " vowels");


// Reverse Array

function reverseArray(arr) {
    var numArr = arr.length;    
    var newArr = [];    
    for (i = 0; i < numArr; i++) {      
        let inArr = arr;
        newArr[i] = inArr.pop(i);       
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3]));


// FizzBuzz

function main(){
    var i;
    for (i=1; i<=100; i++){
       
        if (i%15 == 0){    
            console.log("FizzBuzz");   
         
        
        } else if ((i%3) == 0) { 
            console.log("Fizz");                
         
       
        } else if ((i%5) == 0) {                    
            console.log("Buzz");                
     
        } else {
            console.log(i)
        }
    }
 
    return
}

console.log(main())