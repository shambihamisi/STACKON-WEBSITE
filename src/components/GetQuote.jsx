import React from 'react'
import { useState } from 'react'
import Title from './Title'
import { ArrowRight, Mail, User } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { motion } from 'motion/react';

const GetQuote = () => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        if(loading) return
        setLoading(true)

        const formData = new FormData(e.target);

        formData.append("access_key", "cd934b5c-bdaa-4639-9890-e06d14bece0b");

        try {
             const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Thank you for your submission')
            e.target.reset();
        } else {
            toast.error(data.message || 'Submission failed')
        }
        } catch (error) {
            toast.error('Network error. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

  return (
    <motion.section
    initial='hidden'
    whileInView='visible'
    transition={{ delayChildren: 0.2 }}
    viewport={{ once: true }}

    id='get-quote' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30'>

        <Title title='Start your project' desc='Tell us your goals. We will define and execute the fastest path to growth.'/>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}

        className='max-w-fit mx-auto bg-secondary rounded-3xl overflow-hidden px-6 sm:px-10 md:px-12 lg:px-14 py-8 text-primary'>

            <form
            onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5'>
                
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex items-center pl-3 rounded-lg border border-primary'>
                        <User className="text-primary w-4"/>
                        <input type="text" name="name" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex items-center pl-3 rounded-lg border border-primary'>
                        <Mail className="text-primary w-4"/>
                        <input type="email" name="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-primary' required/>
                </div>

                <button type='submit' disabled={loading} className='w-max flex items-center gap-2 bg-primary text-white text-sm px-6 py-3 rounded-full cursor-pointer hover:translate-x-1 transition-all'>
                    Submit <ArrowRight className='w-4'/>
                </button>

            </form>

        </motion.div>
    </motion.section>
  )
}

export default GetQuote