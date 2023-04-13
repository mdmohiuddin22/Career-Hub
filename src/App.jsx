import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Header/>
 <div className='min-h-[calc(100vh-137px)]'>
 <Outlet/>
 </div>
  <Footer/>
    </div>
  )
}

export default App
