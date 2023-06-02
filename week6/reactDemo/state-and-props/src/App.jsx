// Tool to use STATE MANAGEMENT
import { useState } from 'react'
// It is anothe way to render CSS styling onto a React component
import './App.css'


// Every sinle React app has one parent component that serves almost like a <body> tag.
  // This instance, our App component is serving as a sort of <body> tag for our React Website.
function App() {
  // How do you manage State in ReactJS?
    // To manage state in a React component, you use the useState function (aka useState Hook)
      // skele:
        // const [getter, setter] = useState(defaultValue
      // Explain getter and setter, the useState funciton returns 2 things inside of an array
        // 1: the actual state data (getter)
          // getter is a variable that wen used refers to the current value of the state data
        // 2: the setting function (the setter)
          // the setter function will change the value of the getter varaible
          // Note: setter functions ALWAYS follow the grammitacal format of the word "set" followed by the noun of the getter
          // setGetterNoun(valueYouWantToChangeTheGetterTo)
  
        // Simple example of useState below:
        //  const [count, setCount] = useState(0)

  const [tvShows, setTvShows] = useState ([
    {
    name: "Breaking Bad",
    genre: "crime"
    },
    {
      name: "Succession",
      genre: "drama:"
    },
    {
      name: "Avatar",
      genre: "cartoon"
    }
  ])

  const [selectedTvShow, setSelectedTvShow] = useState(undefined) 

  return (
    <div>

      {
        // 1st parameter of callback function should use sinlgular noun off Plural array in the USESTATE
        // 2nd parameter is the current index value the current element you're targetting

        // this is a ternary below. if truthy render this. if not do something else
        selectedTvShow ? 
        
        <div>
          {/* <p>{`The current selected show is: ${selectedTvShow}`}</p>` */}
          <button onClick={() => setSelectedTvShow(undefined)}>Go back to all shows</button>
        </div> :
         
        
        tvShows.map((tvShow, idx) => {
          return (
            <div key={idx}>
              <p>Name of this show is: {tvShow.name}</p>
              <p>Genre of this show is: {tvShow.genre}</p>
              <button onClick={() => setSelectedTvShow(tvShow.name)}>See Details</button>
            </div>
            )
        })
      }

      <div>{`The current selected show is: ${selectedTvShow}`}</div>

      {/* Example Below */}
      {/* <h2>Hello World</h2>
      <h2>Goodbye World</h2>
      <article>BreakingNews</article> */}
      {/* <BlueprintForSomeHTML /> */}
      {/* <ButtonComponent /> */}
    </div>
  )
}

// function BlueprintForSomeHTML () {
//   return (
//     <div>
//     <h2>Hello World</h2>
//     <h2>Goodbye World</h2>
//     <article>BreakingNews</article>
//   </div>
//   )
// }

// function ButtonComponent () {
//   return (
//     <div>
//       <button>I am a Button</button>
//     </div>
//   )
  
// }


export default App
