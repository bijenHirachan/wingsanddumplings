import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 min-h-screen flex items-center relative overflow-hidden bg-white"
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
        
        {/* 🖋️ Right Section (Opening Hours on top, text below) */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-none"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* 🕒 Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="backdrop-blur-md bg-transparent border border-[#28282b]/20 rounded-2xl px-6 py-4 shadow-sm max-w-sm mb-8 text-[#28282b]"
          >
            <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
            <div className="text-sm sm:text-base space-y-1">
              <p>Sun – Wed &nbsp; 17:00 – 02:00</p>
              <p>Thu – Sat &nbsp; 17:00 – 03:00</p>
            </div>
          </motion.div>

          {/* 🏠 Address & Tagline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-[#28282b] drop-shadow-lg">
            Zeelstraat 6, 3000 Leuven
          </h1>
          <p className="mt-4 text-[#28282b]/90 max-w-xl text-base sm:text-lg">
            Smiles served hot — handcrafted flavors with a modern twist.
          </p>

          {/* 🍽️ Buttons (always side by side) */}
          <div className="mt-6 flex flex-row flex-wrap items-center gap-4 justify-center md:justify-end w-full max-w-sm">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-3 bg-[#28282b] text-white font-bold px-5 py-3 rounded-full shadow-md hover:bg-[#3a3a3e] transition-colors text-center"
            >
              View Menu
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-2 border border-[#28282b] px-4 py-3 rounded-full text-[#28282b] hover:border-[#3a3a3e] transition-colors text-center"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* 🖼️ Logo/Image (Top on mobile, left on desktop) */}
        <motion.img
          src="/img/logo.png"
          alt="Chef's Special"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="flex-1 w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[25%] max-w-[350px] h-auto mx-auto md:mx-0 order-1"
        />
      </div>
    </section>
  );
};

export default Hero;
