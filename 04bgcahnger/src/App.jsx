import { useState } from "react";

function App() {
  const [bg, setBg] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200 ease-in-out"
        style={{ backgroundColor: bg }}
      ></div>
      <div className="fixed flex-wrap justify-center bottom-10 inset-x-0 px-2">
        dgadd
        <div className="flex flex-wrap justify-center gap-3 shadow-lg p-4 bg-white px-2 py-2 rounded-lg">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl">
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl">
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl">
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl">
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
