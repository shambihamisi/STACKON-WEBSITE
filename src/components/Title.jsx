import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className='text-3xl sm:text-5xl font-medium tracking-wider'>{title}</h1>
        <p className='mt-4 text-center text-primary dark:text-white tracking-wider'>{desc}</p>
    </div>
  )
}

export default Title