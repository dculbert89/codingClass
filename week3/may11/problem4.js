
// #4: 
// Prompt: 

// It's been a few years since the world ended, and over all that time you've found better ways to improve your JARVIS bot. Now he's able to make longer journeys, sometimes ones that even last a few days. You're about to finish a new program that can send your JARVIS bot out on multi-day trips and report back not only all the supplies it has found, but also categorize them for you. 

// Write a function called multiDayTripProgram that takes in 2 parameters: The first parameter should be called baggy, which you can expect will always be an array argument value and which will always be first given to you as an empty array. (You'll store all the good supplies you've found in this "bag".) 

// The second parameter should be called logOfDailyTrips, which you can expect will always be an array argument value, and where each element in that array is ALSO an array. Each "nested" array will represent a given day. The elements in those nested arrays will be strings representing the supplies found on a day's journey. 

// Note: You can also expect that sometimes "zombie" or "raider" strings will appear as targets on JARVIS's journey. 

// Your function should do 3 things:
// First, your function should add each "good" food or supply (i.e. anything that isn't a zombie or a raider) to the baggy argument value. (for safekeeping!!)
// Second, your function should alert you by logging to the console whenever it has found supplies or a dangerous target (the same string format from the previous problem apply.)
// Lastly, your function should return the baggy argument value, all filled up with the fruits of JARVIS's labor.

// For example, consider the following argument value:
// multiDayTripProgram(
//     [], [["fresh fruit", "raider"], ["zombie", "morphine"], ["bandages", "painkillers"]]
//     // Note that the first argument value above is an empty array. That's your baggy argument value! 
//     // The second argument value above is your array of arrays, where each nested array represents a day's journey. 
// )

// After running the above function, the following should happen: 
//     "JARVIS has found some fresh fruit!"
//     "JARVIS has found a raider! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found a zombie! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found some morphine!"
//     "JARVIS has found some bandages!"
//     "JARVIS has found some painkillers!"
//     ["fresh fruit", "morphine", "bandages", "painkillers"]


function multiDayTripProgram(baggy, logOfDailyTrips) {
    // Step 1: Print the list of items found on a given day.
        // already done since it's a parameter of the function

    // Step 2: I want to look at each day's findings one by one.
        for (let dayIndexTracker = 0; dayIndexTracker < logOfDailyTrips.length; dayIndexTracker++) {
            // i: Sometimes it's helpful to make a helper variable that will be the current days findings
            let currentDaysFindings = logOfDailyTrips[dayIndexTracker];

       
        // Step 3: Then I want to look at each individual item one by one.
            for (let itemIndexTracker = 0; itemIndexTracker < currentDaysFindings.length; itemIndexTracker++) {
                // i) create helper variable to keep track of the current items Jarvis found that day
                let currentItemFoundThisDay = currentDaysFindings[itemIndexTracker];

        // Step 4: Ask question
            // a) is it dangerous (zombie or raider)
            // i) Danger - "Danger found"
            if (currentItemFoundThisDay === "zombie" || currentDaysFindings === "raider") {
                console.log("We ran into a " + currentItemFoundThisDay + "!. Engaging avoidance plan")
            } else {
                // ii) If no danger - "I found this thing"
                console.log("We found a " + currentItemFoundThisDay + ".")
                // I) Jarvis has to add to the baggy
                baggy.push(currentItemFoundThisDay)
            }      
        }
    }
        // Step:5 JARVIS can go and give the bag to owner
        return baggy;
}


console.log(multiDayTripProgram([], [["fresh fruit", "raider"], ["zombie", "morphine"], ["bandages", "painkillers"]]))