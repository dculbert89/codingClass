// The tortoise and the hare both run at different speeds, so it will help to have a visual tool to see how they run. 

let tortoise = document.getElementsByClassName("race-square-tortoise")

for (let i = 0; i < tortoise.length; i++) {
    tortoise[i].style.backgroundColor = "green"
}

// First, write some JS code that styles each .race-square-tortoise element's background color to green. He's quite slow, so he has to step on each individual race tile.

let hare = document.getElementsByClassName("race-square-hare")

for (let i = 0; i < hare.length; i += 3){
    hare[i].style.backgroundColor = "pink"
    }

// However, the hare is much faster. He can run so fast that he can go three tiles at a time. Write some JS code that styles each third .race-square-hare element's background color to pink to represent the hare's pace of running. 

// Lastly... there is a surprise competitor! It's the famous Japanese shinkansen bullet train! It's a little bit faster than the hare, so write some JS code that styles each 10th .race-square-train element's background color to grey. Hopefully that's not too big of a pace advantage... 

let train = document.getElementsByClassName("race-square-train")

for (let i = 0; i < train.length; i += 10){
    train[i].style.backgroundColor = "grey"
    }