import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.VITE_APPWRITER_URL)

  return (
    <>
      <h1 className='bg-black text-white min-h-screen flex items-center justify-center text-6xl'>Test</h1>
    </>
  )
}

export default App
