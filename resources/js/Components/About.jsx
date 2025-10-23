import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
      <section id="about" className="py-20 bg-[#1f1f22] text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-100 mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
Discover the Best Mo:Mo & Wings in Town!
        </motion.h2>
        <motion.p
          className="max-w-4xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
            At Wings And Dumplings, we bring you the perfect fusion of bold flavors and comforting bites. Our signature Mo:Mo — Nepal’s beloved dumpling — is inspired by traditional Tibetan recipes and crafted with love right here in our kitchen. Juicy, flavorful, and freshly steamed or fried, these little parcels of joy have captured hearts across Nepal and beyond — and now, they’re ready to delight yours too.
        </motion.p>
                <motion.p
          className="max-w-4xl mx-auto text-lg mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
            Craving something crispy and spicy? Our wings take inspiration from the best of both worlds — the classic American buffalo style and the irresistible sweet-and-spicy Korean twist. Whether you like them fiery, tangy, or sticky-sweet, we’ve got the perfect flavor to match your mood. So come on in, explore our menu, and treat yourself to a taste journey that blends Nepalese tradition and global flair — all made fresh, fast, and full of flavor.
        </motion.p>
                <motion.p
          className="max-w-4xl mt-4 mx-auto text-lg text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
            Welcome to your new favorite spot for Mo:Mo & Wings!
        </motion.p>
      </section>
  )
}

export default About