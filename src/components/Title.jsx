import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <>
        <h1 className='text-3xl sm:text-5xl font-medium tracking-wider'>{title}</h1>
        <p className='max-w-lg text-center text-primary dark:text-white tracking-wider'>{desc}</p>
    </>
  )
}

export default Title