import React, {useState} from "react";
import cats from '../data/catsData'

function AllCats(){
    // console.log(cats)

    return <div>
        <h2>I am Cats!!</h2>
        {
            cats.map((cat, idx)=>{
                console.log(idx)
                return <div className="cats-container" key={`all cats key: ${idx}`}>
                    <h3>Name: {cat.name}</h3>
                    <p>Breed: {cat.breed}</p>
                    <p>Age: {cat.age}</p>
                    </div>
            })
        }
    </div>
}

export default AllCats;