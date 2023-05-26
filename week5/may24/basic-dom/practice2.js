// First, let's style up Mom's header. Give it a new color, border, and font family, of your choice beyond the original default settings.

let momHeader = document.getElementsByTagName("h2")

for (let i = 0; i < momHeader.length; i++){
    let currentMomHeader = momHeader[i];

    currentMomHeader.style.color = "blue"
    currentMomHeader.style.border = "2px solid black"
    currentMomHeader.style.fontFamily = "sans-serif"
}

// Next, we want to style each set of lists and their respective items. Let's handle the grocery list first. Using the JavaScript tools you've learned so far, style each .moms-grocery-list-item element so that its font color is green rather than black. 

let groceryList = document.getElementsByClassName("moms-grocery-list-item")

for (let i = 0; i < groceryList.length; i++){
    groceryList[i].style.color = "green"
}

// Next, let's do the house supplies list. Target each .house-supplies-list-item element so that its font color is blue rather than black.

let houseSupplies = document.getElementsByClassName("house-supplies-list-item")

for (let i = 0; i < houseSupplies.length; i++){
    houseSupplies[i].style.color = "blue"
}

// Lastly, let's do the pet supplies. Target each .pet-supplies-list-item so that its font color is orange rather than black. 

let petSupplies = document.getElementsByClassName("pet-supplies-list-item")

for (let i = 0; i < petSupplies.length; i++){
    petSupplies[i].style.color = "orange"
}