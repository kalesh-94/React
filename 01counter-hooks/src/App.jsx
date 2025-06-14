import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)


  const Addval = () =>{
    console.log("value added",counter);
    if(counter>=20) alert("stopp here cannot go ahed");
    setCounter(counter+1)
    
    

  }

  const Subval = () =>{
    console.log("value decrease",counter);
    if(counter<=0) alert("stopp here cannot go back");
    setCounter(counter-1)
    
  }

// let counter = 15;
  return (
    <>
    <h1>Counter Project</h1>
    <h2>{counter}</h2>
    <button onClick={Addval}>Add Value {counter}</button>
    <button onClick={Subval}>Subtract Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
