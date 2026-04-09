import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Title from './Title'
import { motion } from 'motion/react';
import faqData from '../data/faqData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}

      id="faqs"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-primary dark:text-white"
    >

        <div className="flex flex-col items-center mx-auto gap-7 w-full max-w-6xl">

            <Title 
                title={
                    <>
                    Frequently asked <br className="hidden sm:block" /> questions
                    </>
                } 
                desc='Answers to common questions about our services and process.'
            />
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index

                    return (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}

                        key={index}
                        className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden"
                    >
                        <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                        >
                        <span className="text-base sm:text-lg font-medium">
                            {item.question}
                        </span>

                        <span className="shrink-0">
                            {isOpen ? (
                            <Minus className="w-5 h-5" />
                            ) : (
                            <Plus className="w-5 h-5" />
                            )}
                        </span>
                        </button>

                        <div
                        id={`faq-answer-${index}`}
                        role='region'
                        aria-labelledby={`faq-question-${index}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                        >
                        <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-sm sm:text-base opacity-80 leading-relaxed">
                            {item.answer}
                            </p>
                        </div>
                        </div>
                    </motion.div>
                    )
                })}
            </div>
        </div>
    </motion.section>
  )
}

export default FAQ