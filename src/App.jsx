import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Info'
import About from './About'
import Interest from './Interest'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
    </>
  )
}

export default App
