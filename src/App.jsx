import React from "react";
import { useState } from "react";
import { X } from "lucide-react";


const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    console.log(task);

    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote =(idx)=>{
    
    const copyTask  = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10  flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add notes Notes</h1>
        {/* /* pehla input for heading */}
        <input
          type="text"
          placeholder="Todays Notes"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* DETAILED WALA INPUT */}
        <textarea
          type="text"
          className="px-5 w-full h-32 py-2 flex items-start flex-row border-2 outline-none rounded resize-none"
          placeholder="Enter thougths"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-amber-50 w-full active:scale-90 outline-none font-medium text-black px-5 py-2 rounded-md hover:bg-pink-200 transition-color duration-150">
          Add note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%;] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx} 
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl pt-9 pb-5 px-4 text-black  bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] "
              >
                <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                <p className="mt-3 leading-tight text-sm font-medium text-gray-900">{elem.details}</p>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className="w-full bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
