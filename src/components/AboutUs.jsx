import React from "react";
import assets from "../assets/assets";
import { BadgeInfo } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from "motion/react"

const AboutUs = () => {
  return (
    <section id='aboutus' className="w-full py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}

          className="flex items-center">
            <BadgeInfo className="text-primary dark:text-white w-4 pr-0.5"/>
            <p className="text-sm tracking-widest text-primary dark:text-white">
              What is Stackon and Who do we work with
            </p>
          </motion.div>

          <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}

          className="mt-3 text-3xl sm:text-4xl font-semibold text-primary dark:text-white tracking-wider leading-tight">
            Implimenting data-driven growth by turning ideas into scalable
            digital systems.
          </motion.h2>

          <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}

          className="mt-5 mb-3 tracking-wider text-primary dark:text-white text-base leading-relaxed">
            Stackon is a technology company that provides full stack development,
            data analytics, cloud services, and branding. We work with startups, SMEs, and organizations that need
            structured growth through technology and design.
          </motion.p>

          <motion.a 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}

          href="mailto:shambi.hamisi@gmail.com"
          target='blank'
          rel='noopener noreferrer'
          aria-label='Email'
          className="flex items-center gap-1 border-b w-fit mt-5 text-lg sm:text-xl font-bold text-primary dark:text-white cursor-pointer hover:text-secondary hover:translate-x-1">Talk to us<ArrowRight className="w-5"/>
          </motion.a>
            

        </div>

        <div className="relative">

          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}

          className="rounded-3xl overflow-hidden shadow-lg p-5 bg-[#e7e8f4]">

            <img
              src={assets.aboutus_img}
              alt="about visual"
              className="rounded-3xl w-full object-cover"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;