
import React from 'react'
import Card from './Card'
import cardsData from './data.js'


const App = () => {



  return (
    <>
    {cardsData.map((elem, idx)=>{
      return <div key={idx}> 
      <Card title={elem.title} description={elem.description} image={elem.image} tag={elem.tag}  /> 
      </div>
    })}
      
 
     
    </>
    
  )
}

export default App
