
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <h1 className="bg-blue-300 text-black  p-5 rounded-lg mb-4">Props</h1>

    <div className="grid grid-cols-3 gap-4">
      <Card name="Palmer" btnText="Click me" />
      <Card name="John" btnText="Click here" />
      <Card name="Vannak" btnText="visit profile" />
     </div>

    </>
  )
}

export default App
