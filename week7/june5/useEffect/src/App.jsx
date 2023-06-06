import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//      ***************
//      * REACT FORMS *
//      ***************


// C: Create - VERB METHOD for this: POST
// R: Reading - VERB METHOD for this: GET
// U: Updating
// D: Destroying

// the Fetch API Method default POST request:

// skele:     await fetch("apiURL", {
  //            method: "POST",
  //            headers: {
  //                "Content-Type": "application/json"
  //                 },
  //            body: JSON.stringify({
  //                pokeName: "Pikachu:",
  //                type: "electricity"
  //                  })
  //               })

// the Fetch API Method default GET request:
  // skele: await fetch("apiURL")

  // Callback functions

function App() {

  // Practical Example of the UseEffect Hook

  // Step 1: Where to store Data?
  const [pokeData, setPokeData] = useState([]);
  // Need state data to hold data of our form input
  const [newPokeName, setNewPokeName] = useState("")

  // Step 2: Fetch the data on SITE LOAD and store it in container. Created Above ^
  useEffect(() => {
    // fetch data on load of site
    async function fetchPokeDate () {
      try {
        // data fetched
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        // translate data to json()
        const translatedData = await response.json();
        // Make sure you use the SETTER function to store CORRECT DATA inside the state
        setPokeData(translatedData.results)
        console.log(translatedData.results)
      } catch (error) {
        console.log(error)
        
      }
    }
    // INVOKE!!!!
    fetchPokeDate()
  }, [])

  // When you click submit, It will ave components state to the API a request to add Data. We can setup POST REQUEST
    // Write callback function for onsubmit event listener for html form
    async function sentPostReq(event) {
      // Be aware that forms in REACT will, by defualt, hard refresh page
      // To prevent that use "event.preventDefault()"
      event.preventDefault();
      try {
        // send request
        const response = await fetch('https://dummyjson.com/posts/add', {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify ({
            title: newPokeName,
            userId: 1
          })
        })

        const translatedData = await response.json()

        console.log(translatedData)

        // if our request was succesful and we made new data. Then update existing array
        let newPokeObj = {
          name: translatedData.title
        };

        // take setPokeData and use spread operator to add the newPokeObj into the array
        setPokeData([...pokeData, newPokeObj])

      } catch (error) {
        console.log(error)
      }
    }


  return (
    <>
        <h2>My Pokemon Team</h2>

        {/* // Step 3: Render the data on the site. This uses the ternary to evaluate if the pokeData is truthy */}
        {
        pokeData.length ? pokeData.map((singlePoke, idx) => {
          return (
            <div key={idx}>
              <p>Name: {singlePoke.name}</p>
            </div>
          )
        }) : <p>Loading ...</p>
      }  

          {/*I want to build REACT HTML form for a new pokemond blog post */}
    <form 
    onSubmit={sentPostReq}>

      <label htmlFor='name'>New Pokemon Blog name</label>
      
      <input
        name="name"
        type="text"
        placeholder="Your pokemon Blog post name goes here"
        value={newPokeName}
        onChange={(event) => {
          setNewPokeName(event.target.value)
          // console.log(event.target)
          // console.log(event.target.value)
        }}
      >
      </input>
      <button type="submit">Create New pokemon</button>
    </form>
    </>
  )
}

export default App
