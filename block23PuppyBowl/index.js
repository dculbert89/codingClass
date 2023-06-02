// BASE API URL
const Base_API_URL = "https://fsa-puppy-bowl.herokuapp.com"


// Calls for Player Data
const fetchPlayerData = async () => {
    try {
        const response = await fetch(`${Base_API_URL}/api/2304-ftb-et-web-ft/players`);
        const data = await response.json();
        // console.log(data)
        return data;

    } catch (error) {
        console.log("Error");
    }
}

// Displays Player Data 
const renderPlayerData = async () => {
    try {
        let playerContainer = document.getElementById("player-container")

        let apiList = await fetchPlayerData();
        // console.log(apiList.data.players)

        apiList.data.players.forEach(players => {
            let playerName
        }
        
    } catch (error) {
        console.log("error")        
    }
}


const init = async () => {
    fetchPlayerData()
    renderPlayerData()
}

init()