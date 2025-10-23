import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const Menu = ({ foodItems, categories }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const [selected, setSelected] = useState("All");
  const [selectedfoodItems, setSelectedfoodItems] = useState(foodItems);

  useEffect(() => {
    if (selected === "All") {
      setSelectedfoodItems(foodItems);
    } else {
      setSelectedfoodItems(
        foodItems.filter((foodItem) => foodItem.category_id === selected.id)
      );
    }
  }, [selected]);

  return (
    <section id="menu" className="py-20 bg-[#28282b] text-center px-6">

      <div className="flex gap-8 items-center justify-between max-w-5xl mx-auto mb-12">
              <motion.h3 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>Our Menu</motion.h3>

              <div className="relative text-left inline-block w-64">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-2 text-left border border-[#28282B]/30 shadow-md bg-white text-[#28282B] rounded-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#28282B]"
                >
                  {selected !== "All" ? selected?.name : "All"}
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 w-full mt-2 overflow-hidden rounded-2xl bg-white shadow-md"
                    >
                      <li onClick={() => { setSelected("All"); setIsDropdownOpen(false); }} className="px-4 py-2 cursor-pointer text-[#28282B] hover:bg-gray-100 rounded">All</li>
                      {categories.map((category) => (
                        <li key={category.id} onClick={() => { setSelected(category); setIsDropdownOpen(false); }} className="px-4 py-2 cursor-pointer text-[#28282B] hover:bg-gray-100 rounded">{category.name}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {selectedfoodItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-[#1f1f22] rounded-2xl shadow-md border border-[#3a3a3e]"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`/storage/${item.image_url}`}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-t-2xl mb-4"
                  />
                  <h3 className="font-semibold px-4 text-xl mb-1 text-gray-100">{item.name}</h3>
                  <p className="text-gray-300 px-4 mb-2">{item.description}</p>
                  <p className="font-bold pb-4 text-gray-200">€ {item.price.toFixed(2).replace('.',',')}</p>
                </motion.div>
              ))}
            </div>
    </section>
  )
}

export default Menu