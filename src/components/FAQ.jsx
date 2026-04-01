import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Title from './Title'

const faqData = [
  {
    question: 'What services does Stackon offer?',
    answer:
      'Stackon offers branding, full-stack development, data analytics, and cloud services for businesses that want structured digital growth.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We work with startups, SMEs, and organizations that need scalable systems, stronger branding, and better digital performance.',
  },
  {
    question: 'Do you build custom websites and web apps?',
    answer:
      'Yes. We build custom websites, ecommerce platforms, dashboards, internal systems, and full web applications based on business goals.',
  },
  {
    question: 'Do you offer cloud and DevOps support?',
    answer:
      'Yes. We handle deployment, hosting, CI/CD, monitoring, scaling, and infrastructure optimization.',
  },
  {
    question: 'Can you redesign an existing brand or product?',
    answer:
      'Yes. We improve existing brands, websites, and systems to increase trust, usability, and business performance.',
  },
  {
    question: 'How do projects usually start?',
    answer:
      'Projects usually begin with a discovery session where we understand your goals, challenges, scope, and timeline before proposing the best path forward.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
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
                    <div
                        key={index}
                        className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden"
                    >
                        <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
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
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default FAQ