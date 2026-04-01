import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import GetQuote from './components/GetQuote'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Numbers />
      <AboutUs />
      <Services />
      <Portfolio />
      <FAQ />
      <GetQuote />
      <Footer />
    </div>
  )
}

export default App