// Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.
            arrayOne = [2, 4, 6, 8, 11, 20, 15, 22]
            arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            arrayThree =[70, 42, 55, 81, 21, 91, 34]
            arrayFour = [2, 4, 6, 8, 10, 11, 12]

            function onlyOdd (arrays){
                // create a helper variable
                let oddNumbers = [];
                // look at each number
                for (let i = 0; i < arrays.length; i++) {
                    // Define what we're looking for
                    if (arrays[i] % 2 !== 0) {
                        oddNumbers.push(arrays[i]);
                    }
                }
                // and give the odd numbers
                return oddNumbers;
            }    

            console.log(onlyOdd(arrayOne));
            console.log(onlyOdd(arrayTwo));
            console.log(onlyOdd(arrayThree));
            console.log(onlyOdd(arrayFour));



// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels. 
// Every other letter is considered a consonant.
// Hint: Define two variables that keep track of the number of consonants and vowels.
            function vowelsAndConsonants(word) {
                // create a helper variable
                let numVowels = 0;
                let numConsonants = 0;
                // look at each word and see how many vowels/consonants it has
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
                        numVowels++;
                    } else {
                        numConsonants++;
                    }
                }
                // Print the phrase
                console.log('"' + word + '" has ' + numVowels + ' vowels and ' + numConsonants + ' consonants.');
            }

            vowelsAndConsonants("hello");
            vowelsAndConsonants("ukelele");
            vowelsAndConsonants("awesome");
            vowelsAndConsonants("onomonopia");
            vowelsAndConsonants("textbook");



// With a for loop, create a JavaScript code that creates a new array in reverse order.
        // Array info
        array1 = [1, 2, 3]
        array2 = [1, 3, 5, 7, 9, 11]
        array3 = [20, 50, 30, 60, 200]
        array4 = [1, -1, 2, -3, 5, -8, 13]
    
                    // !!!!!! forgot to use loop !!!!!!!!!!!!
                        // function to reverse the array
                        // function newArray(array){
                        //     console.log(array.reverse());
                        // }

                        // newArray(array1);
                        // newArray(array2);
                        // newArray(array3);
                        // newArray(array4);

        function reverseArray(arr){
            const answer = [];

            for(i = 0; i < arr.length; i++){
                let element = arr[i];
                answer.unshift(element);
            }

            return answer;
        }

        console.log(reverseArray(array1));
        console.log(reverseArray(array2));
        console.log(reverseArray(array3));
        console.log(reverseArray(array4));





// Create a JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
        
        // !!!!!!!! FOR LOOP !!!!!!!!!
        // function fizzBuzz() {
        //     // counter
        //     for (let num = 1; num <= 100; num++) {
        //         // multiples of both 3 and 5, print "FizzBuzz" instead of the number
        //         if (num % 3 === 0 && num % 5 === 0) {
        //             console.log("FizzBuzz");
        //             // multiple of 3, print "Fizz" instead of the number.
        //         } else if (num % 3 === 0) {
        //             console.log("Fizz");
        //             // multiple of 5, print "Buzz" instead of the number.
        //         } else if (num % 5 === 0) {
        //             console.log("Buzz");
        //             // Print the number if none of the above are true
        //         } else {
        //             console.log(num);
        //         }
        //     }
        // }

        // fizzBuzz();


        // !!!!!!!! WHILE LOOP !!!!!!!!!
        function fizzBuzz(){
            let counter = 1;

            while(counter <=100){
                if(counter % 3 === 0 && counter % 5 === 0){
                    console.log("FizzBuzz");
                } else if (counter % 3 === 0){
                    console.log("Fizz");
                } else if (counter % 5 === 0){
                    console.log("Buzz");
                } else {
                    console.log(counter);
                }

                console.log(counter);
                counter++;

               }
            }

            fizzBuzz();