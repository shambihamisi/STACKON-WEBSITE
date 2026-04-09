import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react";

const ThemeToggleBtn = ({theme, setTheme}) => {

  return (
    <>
       <button id='dark-mode' type='button'
       aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
       className='cursor-pointer' 
       onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === 'dark' ? 
            (<Sun className='size-8.5 p-1.5 text-white rounded-full'/>) : 
            (<Moon className='size-8.5 p-1.5 text-primary dark:text-white  rounded-full'/>)}
        </button> 
    </>
  )
}

export default ThemeToggleBtn