import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f22] flex flex-col md:flex-row justify-between items-center text-gray-200 px-6 py-6 gap-4 md:gap-0">
      <p className="text-center md:text-left">
        © {new Date().getFullYear()} Wings & Dumplings. All rights reserved.
      </p>
      
        <div className="flex justify-center items-center gap-6">
              <h3>Follow us on:</h3>
              <a
                href="https://www.facebook.com/profile.php?id=61575756073640"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/wingsanddumplings/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.tiktok.com/@wings.and.dumplin"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
        </div>
    
    </footer>
  );
};

export default Footer;
