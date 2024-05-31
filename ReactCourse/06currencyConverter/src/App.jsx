import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-800 text-white  p-5 rounded-lg mb-4">Currency converter</div>
    </>
  )
}

export default App
