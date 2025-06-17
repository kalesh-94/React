import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'; 
import Layout from './Layout';
import { Footer, Header, Home, About, Contact } from './components';
import User from './components/User/User';


// const router = createBrowserRouter([
//       {
//         path: "/",
//         element: <Layout/>,
//         children: [

//           {
//             path: "/",
//             element: <Home/>
//           },

//           {
//             path: "/about",
//             element: <About></About>
//           },
//           {
//             path : "/contact",
//             element : <Contact></Contact>
//           }

//         ]
//       }
      
// ])



///Another easy method to create routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<User/>}/>
  </Route>
  )
  
)



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
