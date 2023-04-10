import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1 className="text-yellow-700 text-center">
      Hello world!
    </h1>
    </div>
  )
}

export default App
