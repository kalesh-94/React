import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  
const [themeMode, setthemeMode] = useState("light")
const darkMode = ()=>{
setthemeMode("dark")
}
const lightMode = ()=>{
setthemeMode("light")
}

///actual logic of themechange

useEffect(() => {
 const theme = document.querySelector("html")
 theme.classList.remove("light", "dark")
 theme.classList.add(themeMode)

}, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <h1 className='text-3xl font-bold text-red-500 text-center m-4 bg-blue-100'>Theme Changer</h1>
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                      {/* ThemeBtn */}
                     <ThemeBtn></ThemeBtn>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* Card */}
                      <Card></Card>
                       
                    </div>
                </div>
          </div>
    </ThemeProvider>
    
  )
}

export default App
