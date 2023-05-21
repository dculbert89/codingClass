// // Connect coffee_data.js to index.js
const importedData = require("./coffee_data")


// 2. Print an array of all the drinks on the menu.
console.log("This is the drink menu: ", importedData)

// // 3. Print an array of drinks that cost 5 and under.
function fiveAndUnder(importedData){
    let arrayFiveUnderDrinks = [];
    for(let i = 0; i < importedData.length; i++) {
        let dataObj = importedData[i];
        // console.log(dataObj)
        if(dataObj.price <= 5) {
            arrayFiveUnderDrinks.unshift(dataObj)
            // console.log("Price: ", dataObj.price)
        }
    }
    return arrayFiveUnderDrinks
}

console.log("Drinks 5 and under: ", fiveAndUnder(importedData))

// // // 4. Print an array of drinks that are priced at an even number.
function pricedEven(importedData){
    let arrayOfPricedEven = [];
    for(let i = 0; i < importedData.length; i++) {
        let dataObj = importedData[i];
        // console.log(dataObj)
        if(dataObj.price % 2 === 0) {
            arrayOfPricedEven.unshift(dataObj)
            // console.log("Price: ", dataObj.price)
        }
    }
    return arrayOfPricedEven
}

console.log("Evenly Priced: ", pricedEven(importedData))


// // 5. Print the total if you were to order one of every drink.
function totalOfEveryDrink (importedData){
    let total = 0;

    for (const dataobj of importedData) {
        total += dataobj.price;
        // console.log(dataobj)
    }

    return total
}

console.log("Total if you were to order one of every drink: ", totalOfEveryDrink(importedData))




// // // 6. Print an array with all the drinks that are seasonal.
function seasonalDrinks(importedData){
    let seasonalArray = [];
    for(let i = 0; i < importedData.length; i++){
        let dataObj = importedData[i];
        if(dataObj.seasonal) {
            seasonalArray.unshift(dataObj)
        }
    }
    return seasonalArray
}

console.log("Seasonal Drinks: ", seasonalDrinks(importedData))


// // // 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

function seasonalDrinksWithBeans(importedData){
    let seasonalBeanArray = "";
    for(let i = 0; i < importedData.length; i++){
        let dataObj = importedData[i];
        if(dataObj.seasonal) {
            seasonalBeanArray += dataObj.name + " with imported beans. \n"
        }
    }
    return seasonalBeanArray;
}
console.log(seasonalDrinksWithBeans(importedData))