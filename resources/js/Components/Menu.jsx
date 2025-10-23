import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = ({ foodItems, categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('All');
  const [selectedFoodItems, setSelectedFoodItems] = useState(foodItems);

  useEffect(() => {
    if (selected === 'All') {
      setSelectedFoodItems(foodItems);
    } else {
      setSelectedFoodItems(
        foodItems.filter((foodItem) => foodItem.category_id === selected.id)
      );
    }
  }, [selected]);

  return (
    <section
      id="menu"
      className="relative py-20 px-6 text-gray-100"
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 md:gap-8">
      

          {/* Dropdown */}
          <div className="relative w-64">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 text-left border border-white/30 shadow-md bg-white text-[#28282B] rounded-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {selected !== 'All' ? selected?.name : 'All'}
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
                  <li
                    onClick={() => { setSelected('All'); setIsDropdownOpen(false); }}
                    className="px-4 py-2 cursor-pointer text-[#28282B] hover:bg-gray-100 rounded"
                  >
                    All
                  </li>
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => { setSelected(category); setIsDropdownOpen(false); }}
                      className="px-4 py-2 cursor-pointer text-[#28282B] hover:bg-gray-100 rounded"
                    >
                      {category.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

              <motion.h3
            className="text-3xl md:text-4xl font-semibold text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Menu
          </motion.h3>
        </div>

        {/* Menu Grid: two columns */}
        {categories
          .filter(cat => selected === 'All' || selected.id === cat.id)
          .map((category) => {
            const itemsInCategory = selectedFoodItems.filter(item => item.category_id === category.id);
            if (!itemsInCategory.length) return null;

            return (
              <div key={category.id} className="mb-12">
                {/* Category Header */}
                <h4 className="text-xl md:text-2xl font-bold  pb-2 mb-6">
                  {category.name}
                </h4>

                {/* Two-column items */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                  {itemsInCategory.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex border-t pt-4 border-white/50 items-start gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Thumbnail image */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={`/storage/${item.image_url}`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name, description, price */}
                      <div className="flex-1 flex justify-between items-start">
                        <div className="flex flex-col">
                          <span className="font-semibold text-md md:text-lg">{item.name}</span>
                          <span className="text-gray-300 text-sm md:text-base leading-relaxed">{item.description}</span>
                        </div>
                        <div className="text-md md:text-lg font-semibold text-gray-200 ml-4 md:ml-6">
                          € {item.price.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Menu;




