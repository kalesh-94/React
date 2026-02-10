import React from "react";
import { useState } from "react";
import { NotebookPen } from "lucide-react";

const App = () => {
  
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const Copytask = [...task];
    Copytask.push({ id: Date.now(), title, details });
    settask(Copytask);
    console.log(Copytask);
    settitle("");
    setdetails("");
  };

  const deletHandler = (id) => {
    settask((prevTask) => prevTask.filter((task) => task.id !== id));
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
              required
            />

            <input
              className="text-xl px-5 py-3 border-2 border-white rounded-md bg-black focus:outline-none"
              type="text"
              placeholder="Enter details"
              onChange={(e) => {
                setdetails(e.target.value);
              }}
              value={details}
              required
            />
          </div>

          <button className="mt-7 px-6 py-2 bg-white text-black text-xl rounded-md hover:bg-gray-300 hover:scale-95 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Notes Cards */}

      <div className="flex flex-wrap w-screen justify-start ml-5 items-start h-full mt-10 overflow-auto leading-tight">
        {task.map(function (elem, idx) {
          return (
            <div
              key={elem.id}
              className="m-4 h-60 w-45 bg-cover rounded-md bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] p-4"
            >
              <NotebookPen color="#000000" />
              <h1 className="text-black m-1 text-3xl font-bold">
                {elem.title}
              </h1>
              <p className="text-black m-1 text-lg">{elem.details}</p>

              <button
                onClick={() => {
                  deletHandler(elem.id);
                }}
                className="ml-12 mt-22 bg-red-500 text-sm p-1 rounded w-auto hover:scale-90 cursor-pointer flex"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
