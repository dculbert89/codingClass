import { Link } from "react-router-dom"

function ProductsList(props) {
    
    return(
        <div>
            <h2>Below are a list of our available products!</h2>

            <div>
                {
                    props.allProducts.length ? props.allProducts.map((singleProduct)=>{
                        return(
                            <div key={singleProduct.id}>
                                <p>Title: {singleProduct.title}</p>
                                <p>Price: {singleProduct.price}</p>

                                <Link to={`/${singleProduct.id}`} >See Details about {singleProduct.title}</Link>
                            </div>
                        )
                    }) : <p>Loading ...</p>
                }
            </div>

        </div>
    )
}

export default ProductsList