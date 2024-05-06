import { useCallback, useState, useEffect, useRef} from 'react'

import './App.css'

function App() {
  let [password, setPassword] = useState('');
  let [length, setLength] = useState(8);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);

//useRef hook
const passwordRef=useRef(null);

  const generatePassword=useCallback(()=> {
    let pass = '';
    let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numAllowed) str+='0123456789';
    if (charAllowed) str+='$@!%*?&+-#[]{}_^~';
    for (let i = 1; i <= length; i++) {
      pass += str .charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed,setPassword]);
 
  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,32);
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(()=>{
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <>
    <div className='w-full max-w-2xl mx-auto shadow-xl p-4 rounded-lg my-6 text-lime-200 bg-rose-500'>
      <h1 className='text-2xl font-semibold text-center mb-4'>Password Generator</h1>
      <div className='flex justify-center items-center rounded-lg overflow-hidden mb-5 text-black'>
        <input type="text" value={password } placeholder='Password' readOnly className='w-full px-4 py-2 outline-none' ref={passwordRef} />
        <button onClick={copyToClipboard} className='outline-none bg-blue-700 px-3 py-2 text-white' >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-1">
          <input  type="range" name="length" value={length} min="8" max="32" id="length" 
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="length" className='text-white'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 mx-4 text-white">
          <input type="checkbox" defaultChecked={numAllowed} id="numAllowed" onChange={()=>setNumAllowed((prev)=>!prev)} />
          <label htmlFor="numAllowed">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 mx-4 text-white">
          <input type="checkbox" defaultChecked={charAllowed} id="charAllowed" onChange={()=>setCharAllowed((prev)=>!prev)} />
          <label htmlFor="numAllowed">Characters</label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
