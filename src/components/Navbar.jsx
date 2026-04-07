import React, { useState } from 'react'
import assets from '../assets/assets'
import { X } from 'lucide-react'
import { Menu } from 'lucide-react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease: 'easeOut'}}>
        <nav className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-0.1 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

            <a href="/" className='cursor-pointer'>
                <img 
                src={theme === 'dark' ? assets.logo_dark : assets.logo} 
                alt="website logo" 
                className='w-10 sm:w-25 p-2'/>
            </a>

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-3 transition-all`}>

                <X className='w-5 absolute right-4 top-4 sm:hidden text-white cursor-pointer' onClick={()=> setSidebarOpen(false)}/>

                <a onClick={()=> setSidebarOpen(false)} href="#" className='sm:hover:border-b sm:hover:text-secondary sm:hover:border-secondary'>Home</a>
                <a onClick={()=> setSidebarOpen(false)} href="#aboutus" className='sm:hover:border-b sm:hover:text-secondary sm:hover:border-secondary'>About Us</a>
                <a onClick={()=> setSidebarOpen(false)} href="#services" className='sm:hover:border-b sm:hover:text-secondary sm:hover:border-secondary'>Services</a>
                <a onClick={()=> setSidebarOpen(false)} href="#portfolio" className='sm:hover:border-b sm:hover:text-secondary sm:hover:border-secondary'>Portfolio</a>
                <a onClick={()=> setSidebarOpen(false)} href="#faqs" className='sm:hover:border-b sm:hover:text-secondary sm:hover:border-secondary'>FAQs</a>
            </div>

            <div className='flex items-center gap-2 sm:gap-4'>

                <Menu onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden text-primary dark:text-white cursor-pointer'/>

                <button id='get-quote' className='text-sm max-sm:hidden flex items-center gap-2 bg-secondary text-primary px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    <a href="mailto:shambi.hamisi@gmail.com" target='blank' rel='noopener noreferrer' aria-label='Email'>Get Quote</a>
                </button>

                <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
            </div>

        </nav>
    </motion.div>
  )
}

export default Navbar
