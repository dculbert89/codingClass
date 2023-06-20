import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { ProductsList, SingleProductView } from './components';
import './App.css'

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
    async function fetchOurProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const translatedData = await response.json()
        setAllProducts(translatedData.products)

      } catch (error) {
        console.log(console.log)
      }
    }

    fetchOurProducts();
  },[])

  return (
    <>
     <h2>hello world</h2>

    <Routes>
      <Route path='/' element={<ProductsList allProducts={allProducts}/>} />
      <Route path='/:id' element={<SingleProductView allProducts={allProducts} setAllProducts={setAllProducts}/>}/>
    </Routes>

   </>
  )
}

export default App
