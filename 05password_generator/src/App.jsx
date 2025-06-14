import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css' // or './App.css' where Tailwind is written


function App() {
const [numberAllowed, SetnumberAllowed] = useState(false)
const [charAllowed, Setchar] = useState(false)
const [length, setlength] = useState(8)
const [pass, Setpass] = useState('')

  const PassGenerator  = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
    }
    Setpass(pass);



  } , [length, numberAllowed, charAllowed, Setpass])


  ////passworf useref
  const passRef  =  useRef(null)


  const Copypassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass)
    // alert("Copied !")
  }, [pass])


  useEffect(()=>{
    PassGenerator();
  },
    
    [length, numberAllowed, charAllowed, Setpass])

  return (
    <>
  
   <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-10 my-8 bg-gray-600 text-white'>
  <h1 className="text-xl font-bold mb-4 text-white text-center font-serif">Password Generator</h1>
    <div className='flex rounded-lg shadow-md mb-4 overflow-hidden'>
      <input  
      className="flex p-2 w-full text-center rounded-lg text-black font-semibold text-lg" 
      type="text" 
      placeholder='Password'
      value={pass}
      readOnly
      ref={passRef}
      />
    

      <button 
      onClick={Copypassword}
      className='flex text-center p-2 text-white bg-blue-500 rounded-e-2xl font-bold shrink-0 hover:bg-blue-900'>
      Copy </button>

    </div>
    
    <div className='flex gap-x-2 text-sm'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label >Length: {length}</label>
      </div>

    <div className='flex gap-x-2 text-sm'>
        <input type="checkbox" 
        defaultValue={numberAllowed}
        onChange={()=>{SetnumberAllowed((prev) => !prev);

        }}
        />
        <label >Numbers</label>
    </div>

    <div className='flex gap-x-2 text-sm'>
        <input type="checkbox" 
        defaultValue={charAllowed}
        onChange={()=>{Setchar((prev) => !prev);
          
        }}
        />
        <label >Characters</label>
    </div>


    </div>
     

</div>


    </>
  )
}

export default App
