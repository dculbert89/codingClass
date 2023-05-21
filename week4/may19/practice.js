/*
You are a new developer at a tech company, and you have just realized you've accidentally left typos in all of the company's data! 

Write some code that takes the array provided to you below. Notice that the array is an array of objects, where each object is a "chunk" of code containing a typo. Using the appropriate array looping method, write a callback function for that array looping method that will remove the "typo" key-value pair from each object. 

If you do everything correctly, the console.log at the bottom of this file should print the data set with all typos removed to the console.

*/

let companyDatabase = [
    {
        actualCode: "abcdefg",
        typo: "hello world whats up"
    },
    {
        actualCode: "0123456",
        typo: "f******************!!!"
    },
    {
        actualCode: "function theFunction...",
        typo: "Elle was here 🤪"
    }
]

// Write your code below
    function removeTypo(){
    for(let i = 0; i < companyDatabase.length; i++){
        let dataObj = companyDatabase[i];
        delete dataObj.typo
    }
}

companyDatabase.filter(removeTypo)

// Write your code above

console.log(companyDatabase)





/*
Remember that song, "Who let the dogs out?" Well, the "one who let the dogs out" - that's you. And not only are you great at letting the dogs out, you have perfected a master algorithm that, when given any array of animals, will let all the dogs out.

Take a look at the array provided below. Using an appropriate array looping method, return a new array that only returns the "dog"s in that array. 

*/

let seattleZoo = ["dog", "giraffe", "monkey", "dog", "lion", "dog", "orangutan", "lizards"];
// After you let all the dogs out of this array, you should get an array of 3 "dog" elements. 

// Write your code below:

function dog (str) {
    if (str === "dog") {
        return str
    }
}

    let dogArray = seattleZoo.filter(dog)

    console.log(dogArray)




    /*
Hey developers. Remember that nerd programmer from the first problem? Well I'm her baby sister, and I've got a great plan. I just need from you an algorithm that can infect all her code with not one, but TWO typos, and all with one single algorithm!! *evil laughter*

Using the appropriate array looping method, write some code that takes in an array of objects, where each object represents a chunk of code. A sample array is provided below.

Your code should add two key-value pairs to each object in the array. The first key-value pair will have a key called "typoOne" (feel free to give it any typo value you like), and the second key-value pair will have a key called "typoTwo" (with any value). 

If you do everything right, the console.log at the bottom of this file should show two typo key-value pairs in each object in the array. 

For example, if this were one of the objects in the ellesCode array:
{
    actualCode: "console.log('data...')"
}

Then, after your function runs, the above object could look like this: 
{
    actualCode: "console.log('data...')",
    typoOne: "amiocmosicjaoid",
    typoTwo: "asdjghkll"
}
*/

let ellesCode = [
    {
        actualCode: "function theFunction..."
    },
    {
        actualCode: "if (valueA == valueB)..."
    },
    {
        actualCode: "const randomNum =..."
    }
]

// Write your code below:

for (i = 0; i < ellesCode.length; i++){
    // console.log(ellesCode[i])
    let dataObj = ellesCode[i];
    // console.log(dataObj)
    dataObj.typoOne = "one one one"
    dataObj.typoTwo = "two two two"
    
}

// Write your code above

console.log(ellesCode)