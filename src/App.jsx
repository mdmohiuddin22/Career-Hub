import { useState } from 'react'
import './App.css'
import './main'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Header/>
 <div className='min-h-[calc(100vh-137px)]'>
 <Outlet/>
 </div>
    </div>
  )
}

export default App
