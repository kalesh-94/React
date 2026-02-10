import React from "react";
import { useState } from "react";
import {NotebookPen} from "lucide-react";


const App = () => {
  const data = [
    { 1: "kalesh" },
    { 2: "A" },
    { 3: "B" },
    { 4: "C" },
    { 5: "D" },
    { 5: "D" },
    { 5: "D" },
    { 5: "D" },
  ];



  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    
    const Copytask = [...task]
    Copytask.push({title, details})
    settask(Copytask)
    console.log(Copytask);
    
  

   
    
  };

  return (
    <div className="bg-black min-h-screen text-white ">
      <h1 className="text-center text-5xl font-bold font-serif mb-10">
        Notes App
      </h1>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full max-w-md "
        >
          <div className="flex flex-col gap-5 ">
            <input
              className="text-xl px-5 py-3 border-2 border-white rounded-md bg-black focus:outline-none"
              type="text"
              placeholder="Enter Note"
              onChange={(e) => {
                settitle(e.target.value);
              }}
              value={title}
            />

            <input
              className="text-xl px-5 py-3 border-2 border-white rounded-md bg-black focus:outline-none"
              type="text"
              placeholder="Enter details"
              onChange={(e) => {
                setdetails(e.target.value);
              }}
              value={details}
            />
          </div>
          
          <button className="mt-7 px-6 py-2 bg-white text-black text-xl rounded-md hover:bg-gray-300 hover:scale-95 transition">
          Submit
        </button>
        </form>
        
      
      </div>

      {/* Notes Cards */}

      <div className="flex flex-wrap w-screen justify-start ml-5 items-start h-full mt-10 overflow-auto">
        {task.map(function (elem) {
          return (
            <div className="m-4 h-60 w-45 rounded-md bg-white p-4"> 
              <NotebookPen color="#000000" /> 
              <h1 className="text-black m-1 text-3xl font-bold">{elem.title}</h1>
              <p className="text-black m-1 text-lg">{elem.details}</p>
              

            </div>
          );
        })}
      </div>


    </div>
  );
};

export default App;
