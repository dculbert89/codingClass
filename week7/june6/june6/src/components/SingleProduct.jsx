function SingleProduct (props) {
    // console.log(props.product.id)  

    async function sendDeleteRequest (event) {
        try {
            const response = await fetch(`https://dummyjson.com/products/${event.target.value}`, {
                method: "DELETE"
            })

            const translatedData = await response.json();

            const filteredProducts = props.allProducts.filter((indivProduct) => {
                if (indivProduct.id != event.target.value) {
                    return indivProduct
                }
            })
            
            props.setAllProducts(filteredProducts)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <h2>Name: {props.product.title}</h2>
            <p>Product Id: {props.product.id}</p>
            <button onClick={sendDeleteRequest} value={props.product.id}>Delete Product #{props.product.id}</button>
        </div>
    )
}

export default SingleProduct