// Two things to be mindful of this weekend:
    // 1) Try to avoid absolute measurements, and use relative measurements
        // Relative Measurements:
            // %
            // em
            // rem
        // 2) Starting thinking about your website in the context of flex or grid

// Object over an array?
// A:
    // objects are meant to be used to label data
    // Arrays are meant to be group unorganized and unlabeled data.

    // Array
// let studentName = ["Anthony", "Sarah", "Phoenix", "Rachel"]
//                       0          1        2          3
   
//     // Object
// let instructorsOf2304 = {
//     leadInstructorOne: "Elle Oshiro",
//     leadInstructorTwo: "Ed Haddican",
//     mentor: "Tri Le"
// }

// Object Review
    // Creating an object

// let talkingMeowth =  {
//     name: "Meowth",
//     age: 20,
//     isHero: true,
//     friends: ["Jessie", "James"],
//     hasChildren: undefined
// }

// Object notation
    // Dot notation
        // Skeleton Syntax:
            // nameOfObject.nameOfKey
                // let theKeyImLookingFor = "name";
            // Note: Dot notation will ALWAYS look for the key name that matches exactly what you wrote after the dot (aka period).

                // console.log(talkingMeowth.name)
                // console.log(talkingMeowth.theKeyImLookingFor)
                // Both console.logs below won't work beause the key name after the period does not exist in the object.

    // Bracket notation
        // Skeleton Syntax:
            // nameOfObject["nameOfKey"]
                // console(talkingMeowth["name"])
                //    ^^SAME as below \/
                // console.log(talkingMeowth[theKeyImLookingFor])
            // Note: Bracket notation can use variables that are storing key names


// Object Methods:

// let talkingMeowth =  {
//     name: "Meowth",
//     age: 20,
//     isHero: true,
//     friends: ["Jessie", "James"],
//     hasChildren: undefined,
//     sayCatchphrase: function(){
//         console.log("Team Rocket is blasing off again!")
//     },
//     haveBirthday: undefined
// }

// // Dot notation
// talkingMeowth.sayCatchphrase()

// // Bracket notation
// talkingMeowth["sayCatchphrase"]()

// // Declare funtion outside and then put it in Object

// function haveBirthday() {
//     talkingMeowth.age = talkingMeowth.age + 1;
//     console.log(talkingMeowth.age);
// }

// console.log(talkingMeowth)

// talkingMeowth.haveBirthday = haveBirthday

// console.log(talkingMeowth)


// THE "THIS" KEYWORD
    // Definition: "THIS" in coding, is a contextual keyword
    // that refers to the context of the object arount it

    // let newPhoneSpecs = {
    //     versionNum: 14,
    //     screenSize: 6,
    //     company: "Apple",
    //     getPhoneSpecs: function() {
    //         console.log({
    //             versionNum: newPhoneSpecs.versionNum,
    //             screenSize: this.screenSize,
    //             company: this.company
    //         })
    //     }
    // }

    // let superBasicObj = {
    //     getBasicObjSpecs: function(){
    //         console.log(this)
    //     }
    // }

    // newPhoneSpecs.getPhoneSpecs()
    // superBasicObj.getBasicObjSpecs()


// NEW JS MATERIAL: MULTIDIMENSIANAL ARRAYS (AKA 3D ARRAYS)

// For context: 2d arrays (single-dimensional arrays)
    let singleDimArray = [1, 2, 3, 4, 5];

    let multiDimArray = [
        [1, 2],
        [3],
        [4,5]
    ]

    let partyRSVPs = [
        ["David", "Wife"],
        ["Bob"],
        ["Mom", "Dad"]
    ]

    console.log(partyRSVPs[0])
    console.log(partyRSVPs[1])
    console.log(partyRSVPs[2])

    console.log(partyRSVPs[0][1])
    console.log(partyRSVPs[2][0])