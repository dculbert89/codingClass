let aiHealthStat = 100;
let aiAttackStat = 50;
let aiDefenseStat = 60;
let aiSpecialAttack = "Laser Beam";


let yourHealth = 100;
let yourAttackStat = 45;
let yourDefenseStat = 55;
let yourSpecialAttack = "Logic Bomb"


// Prompt 1:
//   - Write an if-else-if statement that does the following:
//     - If the aiHealthStat is equal to or less than 0, AND yourHealth is greater than 0, console.log the string "You win the game!".
//     - Else if the aiHealthStat is greater than 0 AND yourHealth is equal to or less than 0, console.log the string "You lose the game!".
//     - If none of the above statements are true, console.log the string "The game continues."


if (aiHealthStat <= 0 && yourHealth <= 0) {
    console.log("You win the game!");
} else if(aiHealthStat > 0 && yourHealth <= 0) {
    console.log("You lose the game!");
} else {
    console.log("The game continues!");
}


// Prompt 2:
// - Write an if-else-if statement that does the following:
//   - If the aiAttackStat is greater than yourDefenseStat, console.log the total sum of subtracting the aiAttackStat from yourHealth.
//   - Else if the aiAttackStat is lower than yourDefenseStat, console.log the string "You took no damage!"


if(aiAttackStat > yourDefenseStat) {
    yourHealth = yourHealth - aiAttackStat;
    console.log(yourHealth);
} else if(aiAttackStat < yourDefenseStat) {
    console.log("You took no damage!");
}
