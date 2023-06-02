import { useState } from "react";
import "../App.css";
import { puppyList } from "../data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [selectedPuppy, setSelectedPuppy] = useState(undefined);

  return (
    <div>
      {
        

        puppies.map((puppy, idx)=>{
          return (
            <div key={idx}>
              <p>{puppy.name}</p>
              <button onClick={() => setSelectedPuppy(puppy)}>See Details</button>
            </div>
          )
        })
      }

      {selectedPuppy && (
        <div>
          <p>{`Name: ${selectedPuppy.name}`}</p>
          <p>{`Age: ${selectedPuppy.age}`}</p>
          <p>{`Email: ${selectedPuppy.email}`}</p>
        </div>
      )}
    </div>
  );
}

export default App;
