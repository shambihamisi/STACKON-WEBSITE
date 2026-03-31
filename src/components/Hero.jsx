import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-10 lg:px-20 xl:px-30 text-center w-full overflow-hidden text-primary dark:text-white'>

        <div className='inline-flex items-center gap-2 border border-primary p-1.5 pr-4 rounded-full'>
            <p className='text-xs font-medium'>Trusted by 10+ leading brands</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Technology and Branding solutions<span className='bg-linear-to-r from-[#8A961D] to-[#D9E368] bg-clip-text text-transparent'> under one roof.</span></h1>

        <p className='text-sm sm:text-lg font-medium text-primary dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Growing businesses through full stack development, data analytics, cloud infrastructure, and branding.<br />StackOn designs, builds, and scales your systems.</p>

        <div className='relative rounded-2xl overflow-hidden shadow-lg'>
            <img src={assets.hero_img} alt="hero-image" className='w-full max-w-6xl'/>
        </div>

    </section>
  )
}

export default Hero
