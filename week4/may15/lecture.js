// - Arrarys:
    // - Assesing Arrays and their Data
        // let studentNames = ["Anthony", "Phoenix", "Sarah", "Jessie"]
        //                     // 0          1          2         3
        // console.log(studentNames[1]);
        // //  - Multidimensional arrays (3d arrays)
        //     // - Nested Arrays are the arrays INSIDE of a 3d array
        // let rsvpGroups = [
        //     ["Bob", "Jan"], // 0
        //     ["Jim", "Pam",["baby one", "baby two"]], // 1
        //     ["Dwight", "Michael"] // 2
        // ]
        // // to log "baby one" use this
        // console.log(rsvpGroups[1][2][0])




    // - Common Methods


// - Loops
    // - for
    // - while
    // - looping through 3d arrays
        let gameOfThrones = [
            ["Arya", "Jon Snow", "Sansa"],
            ["Cersei", "Jamie"],
            ["Stannis", "Renly"]
        ]


        function loopThrough3DArray (pieceOfPaper) {
        //     // 1) I need to do something over and over again on the piece of paper:
                for (let sectionNumber = 0; sectionNumber < pieceOfPaper.length; sectionNumber++){
        //         // Pre-Step: Sometime it's helpful to label current section we're looking at with a HELPER VARIABLE
                let currentSection = pieceOfPaper[sectionNumber];
        //         // i: I want to look at each section one by one on piece of paper.
        //         // ii: Once i am looking at the correct section, I want to do something over and over again, again:
                    for(let currentSectionItemIndex = 0; currentSectionItemIndex < currentSection.length; currentSectionItemIndex++){
        //
        // a) Now that I am looking at current individual section, I want to look at the current numbered  item in that section
                        let theCurrentSectionItem = currentSection[currentSectionItemIndex];
        //                 // b) Once i have seen that numbered item, I want to write it down on another piece of paper.
                        console.log(theCurrentSectionItem);
                    }
                }
            }


        // loopThrough3DArray(gameOfThrones)
       


// -Objects


// New Content:
    // .splice Array Method
        // Sibling method of the .slice Array Method
        // Definition: .splice will mutate, or permanetly change, an existing array to either delete, replace or both some elements inside of that array.
            // Skeleton Syntax:                                                         !!!!!!!!! OPTIONAL !!!!!!!!!!!
                // nameOfYourArray.splice(startingIndex, numOfElementsToDelete, elementOnetoReplaceWith, elementTwoToReplaceWith)
                // Parameters Necessary:
                    // 1 Your starting index --> Where to begin splice
                    // 2 How many to delete? --> How many elements should we splice out?
                    // 3 What elements to replace the deleted elements with? --> You can list out as many values as you like and SavaScript .splice will put all those elements at the starting index.
            // let primaryColors = ["red", "yellow", "blue"]


            // console.log(primaryColors)
               
            //     primaryColors.splice(1,1)


            //     console.log(primaryColors)


            //     primaryColors.splice(1,0, "green")


            //     console.log(primaryColors)
                   
            //     primaryColors.splice(1,1, "green", "purple", "blue", "orange")


            //     console.log(primaryColors)
               
    // Spread operator
        // Definition: This operator allows us to "spread out", or list out, every individual element inside of an array
        // Why? The most common usage is when we take contents of one array, and put them inside another array
            // Skeleton Syntax:
                // let sampleArray = [1,2,3]
                // Spread Operator below
                    // let newArray = [...sampleArray]
           
            let cabinetDrawer = ["ring", "perfume", "towels"]
            // let shelfDrawer = [...cabinetDrawer]


            // // console.log("cabinetDrawer: ", cabinetDrawer)
            // // console.log("shelfDrawer: ", shelfDrawer)


            let randomStuffDrawer = ["random receipts", "dog treats", ...cabinetDrawer];


            console.log("cabinetDrawer: ", cabinetDrawer)
            console.log("shelfDrawer: ", randomStuffDrawer)


    // Array Destructuring --> Allows us to label indvidual items inside of an array
        // Skeleton Syntax:
            // let [nameOfFirstElement, nameOfSecondElement...] = theExistingArray;
    // let studentIdNumbers = [234, 532, 444, 2314, 1234];


    // const[sarahS, phoenix, jessie, elle, davidC] = studentIdNumbers


    // console.log(sarahS)


    // console.log(jessie)