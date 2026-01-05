import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")

  return (
    <div>

      <form onSubmit={(e)=>{
        e.preventDefault();
        setName("")
      }}>
      <input type="text"
      placeholder='Enter name' 
      value={name}  ///////----------->>> 2 way binding
      onChange={(e)=>{
        setName(e.target.value)
        console.log(e.target.value);
        
      }}

      />
      

      <button>Submit</button>

      </form>

      <h2 style={{color:"white"}}>My Name is {name}</h2>
      
    </div>
  )
}

export default App
