let machineScrap = "whizbang";
let processorChipCode = 196381049;
let numOfBugsInAI = null;
let isAIRunningRampant = false; 

// - Prompt:
//   - create a function that will take one parameter 
//   - the function should console.log the data type of the parameter
//   - invoke your function four times, once with each of the above variables.

function whatType (varA) {
    console.log (typeof varA)
}

whatType (machineScrap);
whatType (processorChipCode);
whatType (numOfBugsInAI);
whatType (isAIRunningRampant);