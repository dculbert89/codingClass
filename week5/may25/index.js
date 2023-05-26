let buttonIngredient = document.getElementsByTagName("button")[0]

let paragraphIngredient = document.getElementById("my-paragraph")

let initialParagraphText = "Welcome to 2304"

                                // the action, function 
buttonIngredient.addEventListener("click", () => {
    initialParagraphText = initialParagraphText + "!!"
    paragraphIngredient.innerText = initialParagraphText
})