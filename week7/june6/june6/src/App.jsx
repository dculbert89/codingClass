import { useEffect, useState } from 'react';
import './App.css';
import { ParagraphComp, SingleProduct } from './components';

//      ***************
//      * REACT FORMS *
//      ***************


// C: Create - VERB METHOD for this: POST
// R: Reading - VERB METHOD for this: GET
// U: Updating 
// D: Destroying - VERB Method for this: DELETE

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const translatedData = await response.json();
        setAllProducts(translatedData.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductData();
  }, []);

  const sentPostRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, description: newDesc }),
      });

      const translatedData = await response.json();
      setAllProducts([...allProducts, translatedData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Hello World</h2>

      {allProducts.length ? (
        allProducts.map((product) => (
          <SingleProduct 
          key={product.id} 
          product={product}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          />
        ))
      ) : (
        <p>Loading . . .</p>
      )}

      <form>
        <label htmlFor='product-title'>Enter New Product Below:</label>
        <br />
        <input
          type='text'
          placeholder='New Product Title Goes Here'
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />

        <label htmlFor='product-desc'>Enter New Description:</label>
        <br />
        <input
          type='text'
          placeholder='New Product Description'
          value={newDesc}
          onChange={(event) => {
            setNewDesc(event.target.value);
          }}
        />

        <button type='submit' onClick={sentPostRequest}>
          Create New Product
        </button>
      </form>
    </>
  );
}

export default App;
