import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import

// function StudentComp (props) {
//   console.log(props)
//   return (
//     <div>
//       <h2>I am a student</h2>
//       <p>The tool is {props.learningTool}</p>
//     </div>
//   )
// }

function App() {
  
  const [fidetspinner, setFidgetSpinner] = useState("fidget spinner")
  const [eslHomework, setEslHomework] = useState("ESL Homework")
  const [ipad, setIpad] = useState("Ipad 9")

  return (
    <>
      <p>Hello</p>
      <StudentComp learningTool={eslHomework}/>
      <StudentComp learningTool={fidetspinner}/>
      <StudentComp learningTool={ipad}/>
    </>
  )
}

export default App
