import React, {useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    return <div>
        <h2>The Currrent Count is: {number}</h2>

        <button onClick={()=>{
        let newNum = number + 1;
        setNumber(newNum)

    }}>Increment</button>
    </div>


}


export default Counter