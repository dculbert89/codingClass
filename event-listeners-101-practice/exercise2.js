// Let's also practice the different type of button press type of user events that can occur. 

// First, we'll do the regular click event. On the #circle-one element, set an event listener that when you click it, will turn its background color blue.

let circleOneElement = document.getElementById("circle-one")

circleOneElement.addEventListener("click", () => {
    circleOneElement.style.backgroundColor = "blue"
})

// Next, we'll do the event when any key is pressed on the keyboard. On the #circle-two element, set an event listener that when you press any key on the keyboard, will turn its background color green.

let circleTwoElement = document.getElementById("circle-two")

circleTwoElement.addEventListener("keypress", () => {
    circleTwoElement.style.backgroundColor = "green"
})

// Lastly, we'll do the event when the user releases a key on the keyboard. On the #circle-three element, set an event listener that when you release any key on the keyboard, will turn its background color red. 

let circleThreeElement = document.getElementById("circle-three")

circleThreeElement.addEventListener("keyup", () => {
    circleThreeElement.style.backgroundColor = "red"
})