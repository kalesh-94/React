import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Pagecontent from './components/Pagecontent'





function App() {
  

  return (
    <>
   <div className='w-full'>
     <Navbar/>
   </div>

   <Pagecontent/>
    
    

    </>
  )
}

export default App
