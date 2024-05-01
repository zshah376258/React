import { useState } from "react";

function App() {
  const [bg, setBg] = useState("red");

  return (
    <>
      <div className="w-full h-screen duration-200 ease-in-out" 
      style={{ backgroundColor: bg }} ></div>
      <div className="fixed flex-col justify-center left-10 inset-x-0 px-2">dgadd
        <div className="flex flex-col justify-center gap-3 shadow-lg p-4 bg-white rounded-lg">sgf</div>
      </div>
    </>
  )
}

export default App
