import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react";

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
       const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

  return (
    <>
       <button className='cursor-pointer'>
            {theme === 'dark' ? 
            (<Sun className='size-8.5 p-1.5 text-white rounded-full' onClick={()=> setTheme('light')}/>) : 
            (<Moon className='size-8.5 p-1.5 text-primary dark:text-white  rounded-full' onClick={()=> setTheme('dark')}/>)}
        </button> 
    </>
  )
}

export default ThemeToggleBtn