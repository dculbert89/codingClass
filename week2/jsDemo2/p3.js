let yourMove = "attack";
let moveOfAI = "defend"; 

if(yourMove === "attack") {
    console.log("You attacked your oppenet");
} else if(yourMove !== "attack") {
    console.log("You failed to beat the oppponent's defense");
}

let your2ndMove = "defend";
let opponents2ndMove = "attack"; 

if (your2ndMove === "defend") {
    console.log("You defended against your opponent's attack!");
} else if (your2ndMove !== "defend") {
    console.log("You took damage from your opponent's attack!");
}