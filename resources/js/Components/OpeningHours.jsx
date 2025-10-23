import React from 'react'
import { motion } from 'framer-motion'

const OpeningHours = () => {
  return (
      <section className="py-6 border-[#3a3a3e] flex flex-col border-t border-b text-gray-200 text-center font-semibold text-lg overflow-hidden">
        <motion.span
          className="inline-block"
          animate={{ x: ['0px', '10px', '0px'] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' }}
        >
          Opening Hours
          
        </motion.span>

        <motion.div
          className="inline-block text-md"
          animate={{ x: ['0px', '20px', '0px'] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' }}
        >
          Sun-Wed 17:00 - 02:00  |  Thu-Sat 17:00 - 03:00
          
        </motion.div>
      </section>
  )
}

export default OpeningHours