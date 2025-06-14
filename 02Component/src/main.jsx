import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import Chai from './Chai.jsx';

function MyApp(){
  return(
    <div>
      <h1>This is custom MyApp</h1>
    </div>
  )
}  

const ReactElem = React.createElement(
  'a',
  {href: "https://google.com",target: "_blank"},
  "Click me to visit Google"
)

const root = createRoot(document.getElementById("root")).render(
  <>
   <MyApp />
   <Chai/>
  {ReactElem}
  </>
 

);
