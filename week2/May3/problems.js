// // Prompt #1:
// // In the Netflix tv show, "The Queen's Gambit", the main character, Beth Harmon, becomes a 
// // chess prodigy who faces numerous opponents with different levels of skill throughout her career.
// //  Write a program that simulates a simplified chess rating system for Beth's opponents using an 
// //  if-else if-else statement.
// // Consider the following rating categories:
// // Beginner: 0 - 1200
// // Intermediate: 1201 - 1800
// // Advanced: 1801 - 2200
// // Master: 2201 and above
// // Your program should take the opponent's chess rating as an input argument and output their skill
// //  level (Beginner, Intermediate, Advanced, or Master) as output.
// // For example, if you gave your function the chess rating of 1900, your function would return "Advanced"

// function bethOpponent (skill) {
//     if (skill >= 0 && skill <=1200) {
//         return "beginner"
//     }else if (skill >= 1201 && skill <=1800) {
//         return "Intermediate"
//     }else if (skill >= 1801 && skill <=2200) {
//         return "Advanced"
//     }else {
//         return "Master"
//     }
// }

// let skill = bethOpponent(2400)

// console.log("Beth's chess level: ", skill)


// Prompt #2:
// In the show, "The Mandalorian," the protagonist (The Mandalorian) travels across the 
// galaxy completing bounty missions to protect The Child, aka "Baby Yoda." Write a function 
// that helps this bounty hunter figure out how to budget their reward money 
// (after all, Baby Yoda child-care is very expensive!)
// Consider the following bounty mission difficulty levels and their corresponding reward amounts:
// Easy: 5,000 credits
// Medium: 10,000 credits
// Hard: 20,000 credits
// Legendary: 50,000 credits
// Assume that Baby Yoda's child healthcare premiums cost 20% of your total income, and 
// feeding / clothing both you and Baby Yoda costs another 500 credits per month. Your function 
// should return the total profit made based upon the difficulty of a given bounty mission that 
// has been completed.
// For example, if your function is given the input argument of "Easy", your function should 
// return 3500, since 20% of this bounty's income is 1,000 credits, so 5,000 - (1,000 + 500) = 3,500, 
// so the Mandalorian has 3,500 credits left after paying for himself and the baby. (edited)

// function budget (bountyDifficulty) {
//     let monthsIncome = 0;

//     if (bountyDifficulty === "Easy") {
//     monthsIncome = 5000
//     }else if (bountyDifficulty === "Medium") {
//         monthsIncome = 10000
//     }else if (bountyDifficulty === "Hard") {
//         monthsIncome = 20000
//     }else if(bountyDifficulty === "Legendary") {
//         monthsIncome = 500000
//     }

//     let food = 500
//     let premiums = monthsIncome * .2

//     console.log("Our monthly income: ",monthsIncome)
//     console.log("Our premiums: ", premiums)

//     let totalProfit = monthsIncome - (food + premiums)
//     return totalProfit

// }

// console.log(budget("Medium"))