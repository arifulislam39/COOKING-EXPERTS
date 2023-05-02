import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/Shared/Navbar/Navbar'
import Footer from './pages/Shared/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
