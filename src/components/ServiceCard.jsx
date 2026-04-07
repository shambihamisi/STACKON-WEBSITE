import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react';

const ServiceCard = ({ service, index }) => {

    const Icon = service.icon

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 1 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}

    className="group relative flex flex-col justify-between h-full rounded-3xl border border-gray-200 dark:border-white/10 bg-secondary p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary border border-gray-200 dark:border-white/10">
            <Icon className="h-8 w-8 text-secondary"/>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-primary leading-snug">
          {service.title}
        </h3>

        <p className="mt-4 text-sm sm:text-base text-primary leading-relaxed">
          {service.description}
        </p>
      </div>

    </motion.div>
  )
}

export default ServiceCard