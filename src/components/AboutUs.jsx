import React from "react";
import assets from "../assets/assets";
import { BadgeInfo } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id='aboutus' className="w-full py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <div className="flex items-center">
            <BadgeInfo className="text-primary dark:text-white w-4 pr-0.5"/>
            <p className="text-sm tracking-widest text-primary dark:text-white">
              What is Stackon and Who do we work with
            </p>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-primary dark:text-white tracking-wider leading-tight">
            Implimenting data-driven growth by turning ideas into scalable
            digital systems.
          </h2>

          <p className="mt-5 mb-3 tracking-wider text-primary dark:text-white text-base leading-relaxed">
            Stackon is a technology company that provides full stack development,
            data analytics, cloud services, and branding. We work with startups, SMEs, and organizations that need
            structured growth through technology and design.
          </p>

          <a href="#get-quote" className="flex items-center gap-1 border-b w-fit mt-5 text-lg sm:text-xl font-bold text-primary dark:text-white cursor-pointer hover:text-secondary">Talk to us<ArrowRight className="w-5"/>
          </a>
            

        </div>

        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-lg p-5 bg-[#e7e8f4]">

            <img
              src={assets.aboutus_img}
              alt="about visual"
              className="rounded-3xl w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;