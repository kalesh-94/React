import React ,{ useState } from 'react'


function App() {

   const [Color, setColor] = useState('black')
console.log("Current Color:", Color);
  return (
    
    <div className="w-full h-screen duration-200" style={{ backgroundColor: Color }}>

      <div className='fixed bottom-12 inset-x-0 flex justify-center'>

        <div className='bg-white rounded-full shadow-lg px-6 py-3 flex gap-4'>
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition"
         
          >
            Red
          </button>
          <button
            onClick={()=> setColor("green")}
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition"
            
          >
            Green
          </button>
          <button
            onClick={()=> setColor("orange")}
            className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition"
           
          >
            orange
          </button>

          <button
            onClick={()=> setColor("blue")}
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition">
            blue
          </button>
          <button
            onClick={()=> setColor("gray")}
            className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition">
            gray  
          </button>
          <button
            onClick={()=> setColor("pink")}
            className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-80 transition">
            pink
          </button>
        </div>


      </div>
    </div>
  
  )
}

export default App