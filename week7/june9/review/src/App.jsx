import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import MyStudentComp from '../../practice/src/components/StudentComp';

// Options to get Started
  // create components
  // fetch API
  // Import React tools

  // S - Setup
  // F - Fetch
  // R - Render

function App() {
  // Set up State
  const [allProducts, setAllProducts] = useState([]);
  
  // const [welcome, setWelcome] = useState("welcome")
  // const [allCount, setAllCount] = useState(0)

  // Set up fetch
    // When do use useEffect and when needed? 
      // It lets us do SOMETHING at a SPECIFIC TIME
        // 1. Mounting - first time component loads
          // dpenedency array []
        // 2. Updating - any time component updates [variable]
        // 3. Both - Either mounting or updating

    useEffect(()=>{
       async function fetchProductData(){
        try {
          // GET request for API
          const response = await fetch('https://dummyjson.com/products')
          // Translate
          const translatedData = await response.json();
          // Store data in Setter
          setAllProducts(translatedData.products)
          
        } catch (error) {
          console.log(error)
        }
       }
       fetchProductData();
    }, [])
        

  return (
    <>
      <h2>Hello</h2>

      {/* Render Data*/}

      {
        allProducts.length ? allProducts.map((singleProduct) => {
          return (
            <div key={singleProduct.id}>
              <div>
              <p>Name: {singleProduct.title}</p>
              </div>
            </div>
          )
        }) : <p>Loading . . .</p>
      }

    
      {/* <p>{welcome}</p>

      <button onClick={()=> setWelcome(welcome + "!")}>Click Me</button>

      <p>{allCount}</p>
      <button onClick={()=>{setAllCount(allCount + 1)}}>Add Numbers</button>
     */}

    </>
  )
}

export default App
