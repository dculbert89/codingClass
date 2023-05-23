// INTERMEDIATE ARRAY LOOPING METHODS

// .includes
    // skele
        // nameOfArray. includes(theValueYoureLooingFor)
        let array = [1,2,3]

        console.log(array.includes(2))


// .some
    // This method will check each element in an array for wether or not it contains SOME sort of returned value from the callback function
        // skele syntax:

    // This method will return a boolean

    let usernames = ["bob1", "jenny2", "iloveiphones", "plugoutlet", "jen"]

    function isThisUsernameLongEnough (username) {
        if (username.length > 5) {
            return username;
        }
    }

    console.log(usernames.some(isThisUsernameLongEnough))


// .every
    // This method will check each element in an array for wether ALL elements match the returned value from the callback function

    let arrofNum = [1,2,3,4,5,6]

    function isItGreaterThanOne(singlenum){
        if (singlenum >= 1){
            return singlenum;
        }
    }

    console.log(
        arrofNum.every(isItGreaterThanOne)
    )


// .sort
    // Automatically will sort an array of elements by either alphabetical or numerical value
        // nameOfYourArray.sort()

    let puppyToys = [
        "teddy bear",
        "kong toy",
        "spiky ball",
        "giraff:"
    ]

    let sortedToysBox = puppyToys.sort()

    console.log(sortedToysBox)


    let arrOfNums = [1,39,25,100,95,4,79]

        // How to sort numbers in order?
            // Ascending
            let arrOne = arrOfNums.sort((a, b) => {
                return a - b;
            })

            console.log("array1 Ascending: ", arrOne)

            // Descending
            let arrTwo = arrOfNums.sort((a, b) => {
                return b - a;
            })
        
            console.log("array2 Descending: ", arrTwo)
