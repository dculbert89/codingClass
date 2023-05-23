// Unit Tests

// Prompt #1
function multiplication(a, b) {
    return a * b;
}
// The function multiplication(a, b) to take two input numbers and return the correct result
    // expect multiplication (2, 10) to return (20)
    // expect multiplication (1, 5) to return (5)
    // expect multiplication (5, 5) to return (25)
        // if user input != int then return error


        // Prompt #2

    // Callback Function
    function onlyOddCallBack (num){
      if(num % 2 ===1) {
        return num;
      }
    }

    // The Function
function concatOdds(arr1, arr2) {
    const onlyOdd = [];

    onlyOdd.push(arr1.filter(onlyOddCallBack))
    onlyOdd.push(arr2.filter(onlyOddCallBack))
  
  return onlyOdd

}
  console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]))

    // if input isn't an integer then output error
    // should only print a single number that is odd rather than print each odd


// Functional Tests:

// #1
// Identify the expectations.
    // function ability to checkout with or without an account for the user. User should be asked to set up an account if the user doesn't have an one. 

// Write specifications in pseudocode/plain English for all the tests that would be useful for that prompt.
    // is the cart empty? Then checkout ability isn't shown to the user and "Cart is empty" is displayed
    // When cart has =<1 item then checkout option is given
        // ask user
            // shipping address
            // payment method
            // review
            // cancel checkout

