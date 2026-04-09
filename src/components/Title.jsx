import React from 'react'
import { motion } from 'motion/react';

const Title = ({ title, desc, as: Tag = "h2" }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>

          <Tag className='text-3xl sm:text-5xl font-medium tracking-wider text-primary dark:text-white'>{title}</Tag>
        
        </motion.div>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}

        className='mt-4 text-center text-primary dark:text-white tracking-wider'>{desc}</motion.p>
    </div>
  )
}

export default Title