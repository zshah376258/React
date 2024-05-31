import { useState } from "react";

function App() {
  const [bg, setBg] = useState("rgb(236 252 203)");

  return (
    <>
      <div
        className="w-full h-screen duration-200 ease-in-out"
        style={{ backgroundColor: bg }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-2xl">
          <button onClick={() => setBg("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => setBg("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button  onClick={() => setBg("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button  onClick={() => setBg("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "olive"}}>
            Olive
          </button>
          <button  onClick={() => setBg("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "pink"}}>
            Pink
          </button>
          <button  onClick={() => setBg("cyan")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "cyan"}}>
            Cyan
          </button>
          <button  onClick={() => setBg("coral")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl" 
          style={{backgroundColor: "coral"}}>
            Coral
          </button>
          <button  onClick={() => setBg("beige")}
          className="outline-none px-4 py-1 rounded-full shadow-xl" 
          style={{backgroundColor: "beige"}}>
            Beige
          </button>
          <button  onClick={() => setBg("black")}
          className="outline-none px-4 py-1 rounded-full shadow-xl text-white" 
          style={{backgroundColor: "black"}}>
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
