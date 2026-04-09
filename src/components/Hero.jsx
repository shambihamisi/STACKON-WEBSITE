import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-10 lg:px-20 xl:px-30 text-center w-full overflow-hidden text-primary dark:text-white'>

        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}

        className='inline-flex items-center gap-2 border border-primary p-1.5 pr-4 rounded-full'>
            <p className='text-xs font-medium'>Trusted by 10+ leading brands</p>
        </motion.div>

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}

        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Technology and Branding solutions<span className='bg-linear-to-r from-[#8A961D] to-[#D9E368] bg-clip-text text-transparent'> under one roof.</span></motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}

        className='text-sm sm:text-lg font-medium text-primary dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Growing businesses through full stack development, data analytics, cloud infrastructure, and branding.<br />StackOn designs, builds, and scales your systems.</motion.p>

        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        viewport={{ once: true }}

        className='relative rounded-2xl overflow-hidden shadow-lg'>
            <img src={assets.hero_img} alt="hero-image" className='w-full max-w-6xl' width='1264' height='742' loading='eager' fetchPriority='high'/>
        </motion.div>

    </section>
  )
}

export default Hero
