import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react';

const Portfolio = () => {

    const workData =[
        {
            title:'Branding redesign',
            description:'Complete brand identity redesign that improved visual consistency, increased customer trust, and drove a 25% rise in conversion rates.',
            image: assets.branding_mockup,
            link: 'https://cosmetics-ecommerce-three.vercel.app/'
        },
        {
            title:'Data dashboard',
            description:'Real-time analytics dashboard that reduced reporting time by over 80% and enabled faster, data-driven decision making across the business.',
            image: assets.dashboard_mockup,
            link: 'https://cosmetics-ecommerce-three.vercel.app/'
        },
        {
            title:'E-Commerce website',
            description:'Scalable e-commerce website with optimized checkout and performance improvements that increased online sales by 50% and reduced cart abandonment.',
            image: assets.website_mockup,
            link: 'https://cosmetics-ecommerce-three.vercel.app/'
        }
    ]

  return (
    <motion.section
    initial='hidden'
    whileInView='visible'
    transition={{ delayChildren: 0.2 }}
    viewport={{ once: true }}

    id='portfolio' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-primary dark:text-white'>
        <Title title='Our latest work' desc='Review some of our latest projects and understand how different businesses are improving their revenue by using our digital solutions.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work,index)=>(
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}

                    key={index} className='flex flex-col h-full transition duration-300 hover:-translate-y-1 cursor-pointer'>
                        <a key={index} href={work.link} target='_blank' rel='noopener noreferrer'>
                            <img src={work.image} alt="mockup-image" className='w-full aspect-4/3 overflow-hidden rounded-3xl bg-[#e7e8f4]' loading='lazy' width='400' height='300'/>
                            <h4 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h4>
                            <p className='text-sm opacity-80 grow'>{work.description}</p>
                        </a>
                    </motion.div>
                ))
            }
        </div>

    </motion.section>
  )
}

export default Portfolio