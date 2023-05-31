import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import Counter from './Counter'
import AllCats from './AllCats'
import '../data/cats.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World</h1>
      <Counter />
      <AllCats />
    </div>
   
  )
}

export default App;
