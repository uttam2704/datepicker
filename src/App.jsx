import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-pink-300' >
      
      <Datepicker/>
    </div>
  )
}

export default App
