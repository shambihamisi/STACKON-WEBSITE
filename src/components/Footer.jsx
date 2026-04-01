import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-32 grid grid-cols-1 gap-12 py-10 text-sm sm:grid-cols-3 items-start">
          <div className="flex flex-col items-center text-left">
            <img src={assets.logo_dark} alt="logo" className="w-30 mb-2" />
            <p className="max-w-md text-white">
                Branding. Technology. Scale.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-1 text-xl font-medium text-white">
              COMPANY
            </p>
            <ul className="flex flex-col items-center text-white">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          <div className="flex flex-col items-center ">
            <p className="mb-1 text-xl font-medium text-white">
              GET IN TOUCH
            </p>

            <p className="text-white mb-2">+254 729 599 659</p>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/hamisi_shambi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                className="rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <img src={assets.twitter_logo} alt="twitter-icon" className="h-5 w-5 object-contain"/>
              </a>

              <a
                href="https://www.linkedin.com/in/shambi-hamisi-772686104/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <img src={assets.linkedin_logo} alt="linkedin-icon" className="h-5 w-5 object-contain"/>
              </a>

              <a
                href="mailto:shambi.hamisi@gmail.com"
                aria-label="Email"
                className="rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <img src={assets.instagram_logo} alt="linkedin-icon" className="h-5 w-5 object-contain"/>
              </a>
            </div>
          </div>
        </div>
      </div>

       <div className="border-t border-secondary/20 py-6 text-center text-xs text-secondary">
          © {new Date().getFullYear()} STACKON. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;