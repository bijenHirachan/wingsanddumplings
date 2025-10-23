import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
        <section id="hero" className="pt-28 min-h-screen flex items-center relative overflow-hidden bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <motion.img
            src="/img/logo.png"
            alt="Chef's Special"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex-1 max-w-sm mx-auto md:mx-0"
            />

            <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            >
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#28282b] drop-shadow-lg">
                Zeelstraat 6, 3000 Leuven
            </h1>
            <p className="mt-4 text-[#28282b]/90 max-w-xl text-lg">
                Smiles served hot — handcrafted flavors with a modern twist.
            </p>
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
                <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-[#28282b] text-white font-bold px-5 py-3 rounded-full shadow-md hover:bg-[#3a3a3e] transition-colors"
                >
                View Menu
                </motion.a>
                <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 border border-[#28282b] px-4 py-2 rounded-full text-[#28282b] hover:border-[#3a3a3e] transition-colors"
                >
                Learn More
                </motion.a>
            </div>
            </motion.div>
        </div>
        </section>
  )
}

export default Hero