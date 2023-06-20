import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function singleProductView(props) {
    
    const {id} = useParams();

    const [newtitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const navigate = useNavigate()

    const clickedOnProduct = props.allProducts.filter((singleProduct)=>{
        if(singleProduct.id == Number(id)) {
            return singleProduct
        }
    })[0]


    async function sendPutRequest(event){
        event.preventDefault();
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newtitle,
                    description: newDesc
                })
            })

            const translatedData = await response.json();

            const updatedAllProducts = props.allProducts.filter((singleProduct)=>{
                if(singleProduct.id != Number(id)){
                    return singleProduct
                }
            })

            const finalAllProducts =  [...updatedAllProducts, translatedData]

            props.setAllProducts(finalAllProducts)

            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>

            <h2>Here are more details</h2>

            <p>Title: {clickedOnProduct.title}</p>
            <p>Price: {clickedOnProduct.price}</p>
            <p>Description: {clickedOnProduct.description}</p>

            <br />

            <form onSubmit={sendPutRequest}>
                <label htmlFor="newtitle">Enter New Title Here</label>
                <input 
                    name="newtitle" 
                    type="text" 
                    placeholder="New Title"
                    value={newtitle}
                    onChange={(event)=> setNewTitle(event.target.value)}
                ></input>

                <br />

                <label htmlFor="newdescription">Enter New Description Here</label>
                <input 
                    name="newdescription" 
                    type="text" 
                    placeholder="New Description"
                    value={newDesc}
                    onChange={(event)=> setNewDesc(event.target.value)}
                ></input>

                <button type="submit">Update Product</button>
            </form>
    
            <Link to='/'>Go Back</Link>

        </div>
    )
}

export default singleProductView;