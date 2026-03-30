import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import AboutUs from './components/AboutUs'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Numbers />
      <AboutUs />
    </div>
  )
}

export default App