/*
TOPICS:

- Linking a JS File to an HTML file

- 3 selection DOM methods
    // document.getElementById("nameOfId")
        // Example of getElementById
    */
    // let myHeaderElement = document.getElementById("my-main-header")

    // console.log(myHeaderElement)

/*
    // document.getElementsByClassName("nameOfClass")
*/

/*
    // doument.getElementsByTagName("nameOfTag")
*/
    let allLiElements = document.getElementsByTagName("h2")

/*
- CSS style selectors
- Any CSS Styling
*/
    for (let i = 0; i < allLiElements.length; i++){
        let currentLiElement = allLiElements[i]

        currentLiElement.style.color = "pink"
        currentLiElement.style.border = "2px solid black"

        // - element.innerText
        currentLiElement.innerText = i


    }
/*
- element.classList
- element.IdList
- element.innerText

*/

// .add
// .remove
// .contains