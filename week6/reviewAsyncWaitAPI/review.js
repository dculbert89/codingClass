// There are 4 types of operations you can do with APIs
// C - Create Operations
// R - Reading Operations
    // We call reading operations "GET requests"
// U - Updating Operations
// D - Deleting Operations

// Guide on how to fetch data from api and render it on DOM


    // Step1: Store Owner (client) needs to make request of our middleman (API) to get data that we need for our store (our website)
    
    async function fetchPokemonCards () {
        try {
            // get the data and set it to a variable
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
            console.log(response)
           
            // translate the "fetch data" with JSON
            let translatedData = await response.json();
            console.log(translatedData)

            // Optional - Sometimes promise object that gets returned to you is formatted in a unique way
            let actualPokemonData = translatedData.results
            console.log(actualPokemonData)

            //Lastly, give data to store owner (the client)
            return actualPokemonData


        } catch (error) {
            console.log(error);
        }
    }


    // Now put fetched data on "store floor" (render data on DOM)
    async function renderData() {
        let container = document.getElementById("pokemonCase")
        // create variable from function to render it to website
        let myPokemonCards = await fetchPokemonCards();
        console.log(myPokemonCards)

        // now i have the data, I want to display (on DOM) one by one (LOOP!!!)
        for (i = 0; i < myPokemonCards.length; i++){
            // Optional: Make Helper Variable for the index
            let myCurrentPokemonObject = myPokemonCards[i];

            // make new ELEMENT (div) for data !!!!! FOR THIS TO WORK YOU NEED A PARENT ELEMENT in HTML!!!!!
            let newPokemonElement = document.createElement("p");

            // take new variable and define what part of the object it is
            newPokemonElement.innerText = myCurrentPokemonObject.name

            // put new variable and put it in the "container"
            container.appendChild(newPokemonElement);   
        }
    }

    renderData();
