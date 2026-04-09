import React from 'react'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { Code, ChartNoAxesCombined, CloudCog, Paintbrush } from "lucide-react";
import { motion } from 'motion/react';

const Services = () => {

    const servicesData = [
        {
            title: 'Full-stack Development',
            description: 'Web and application development. We build and optimise fast, scalable platforms using modern technologies. This includes websites, web apps, APIs, and internal systems.',
            icon: Code
        },
        {
            title: 'Data Analysis',
            description: 'Data dashboards and analytics. Turning raw business data into clear insights through dashboards, reporting tools, and automated analytics systems that support better decision making. ',
            icon: ChartNoAxesCombined
        },
        {
            title: 'Cloud & DevOps Services',
            description: 'Cloud infrastructure and DevOps automation. We deploy, scale, and maintain your infrastructure using cloud platforms. This includes CI/CD, hosting, monitoring, and cost optimization.',
            icon: CloudCog
        },
        {
            title: 'Branding',
            description: 'Branding and visual identity systems. Stackon designs brand systems that improve trust and positioning. This includes logo design, color systems, typography, UI kits, and brand guidelines.',
            icon: Paintbrush
        },
    ]

  return (
    <motion.section
    initial='hidden'
    whileInView='visible'
    transition={{ delayChildren: 1.5 }}
    viewport={{ once: true }}

    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-6 text-primary dark:text-white'>

        <Title title='What does Stackon do?' desc='Stackon ensures return on investment through building and maintenance of technology systems that promote targeted marketing and improve customer retention.'/>

        <div className='flex flex-col md:grid grid-cols-2 gap-5 cursor-pointer'>
            {servicesData.map((service, index)=> (
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>

    </motion.section>
  )
}

export default Services