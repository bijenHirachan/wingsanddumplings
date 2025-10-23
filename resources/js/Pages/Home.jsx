import wndLogo from '../../../public/img/logo.png'; 
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function WingsAndDumplings({ foodItems, categories }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    message: '',
  }); 

  

  const { flash } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
          console.log(errors.email);

    post(route('feedback.store'), {
      preserveScroll: true,
      onSuccess: () => reset(), // Clear form after success
    });
  };

  const hours = [
    { days: "Sun - Wed", time: "17:00 - 02:00" },
    { days: "Thu - Sat", time: "17:00 - 03:00" },
  ];

  const [selected, setSelected] = useState("All");
  const [selectedfoodItems, setSelectedfoodItems] = useState(foodItems);

  // Separate states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div className="relative min-h-screen bg-black/20 text-[#28282B] flex flex-col items-center justify-center px-6 py-12 space-y-12">

      {/* Right-Side Hamburger Drawer */}
      <motion.div>
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
        >
          <span className={`block w-8 h-1 bg-[#28282B] rounded transition-transform ${isDrawerOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-8 h-1 bg-[#28282B] rounded transition-opacity ${isDrawerOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-8 h-1 bg-[#28282B] rounded transition-transform ${isDrawerOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
                className="fixed inset-0 bg-black/10 z-40"
              />

              {/* Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-64 bg-[#F9F9F9] z-50 shadow-md flex flex-col items-start px-6 py-12 space-y-6"
              >
                <a href="#about" onClick={() => setIsDrawerOpen(false)} className="text-[#28282B] font-semibold text-lg hover:text-gray-600 transition-colors">About Us</a>
                <a href="#foodItems" onClick={() => setIsDrawerOpen(false)} className="text-[#28282B] font-semibold text-lg hover:text-gray-600 transition-colors">Menu</a>
                <a href="#feedback" onClick={() => setIsDrawerOpen(false)} className="text-[#28282B] font-semibold text-lg hover:text-gray-600 transition-colors">Feedback</a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Logo Section */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center pt-32">
        <img src={wndLogo} alt="Wings and Dumplings Logo" className="mx-auto h-64 drop-shadow-md" />
      </motion.div>

            {/* About Section */}
      <motion.div id="about" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center pt-32">
        <h1 className="tracking-wide mt-8 text-3xl font-bold text-[#28282B] tracking-wide">Discover the Best Mo:Mo & Wings in Town!</h1>
        <p className="tracking-wide mt-4 text-lg text-[#444444] max-w-5xl mx-auto">
          At Wings And Dumplings, we bring you the perfect fusion of bold flavors and comforting bites. Our signature Mo:Mo — Nepal’s beloved dumpling — is inspired by traditional Tibetan recipes and crafted with love right here in our kitchen. Juicy, flavorful, and freshly steamed or fried, these little parcels of joy have captured hearts across Nepal and beyond — and now, they’re ready to delight yours too.
        </p>
        <p className="tracking-wide mt-4 text-lg text-[#444444] max-w-5xl mx-auto">
Craving something crispy and spicy? Our wings take inspiration from the best of both worlds — the classic American buffalo style and the irresistible sweet-and-spicy Korean twist. Whether you like them fiery, tangy, or sticky-sweet, we’ve got the perfect flavor to match your mood. So come on in, explore our menu, and treat yourself to a taste journey that blends Nepalese tradition and global flair — all made fresh, fast, and full of flavor.
        </p>
           <p className="tracking-wide mt-4 text-lg text-[#444444] max-w-5xl mx-auto">
Welcome to your new favorite spot for Mo:Mo & Wings!
        </p>
      </motion.div>

    <section className="max-w-4xl w-full mx-auto mt-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#28282B] mb-6">Opening Hours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {hours.map((hour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="bg-white border border-[#28282B]/20 rounded-2xl shadow-md p-6"
          >
            <p className="text-xl font-semibold text-[#28282B]">{hour.days}</p>
            <p className="text-[#28282B]/80 mt-1">{hour.time}</p>
          </motion.div>
        ))}
      </div>
    </section>
    
      {/* foodItems Section */}
      <section id="foodItems" className="px-6 w-full py-20">
        <div className="flex gap-8 items-center justify-between max-w-5xl mx-auto mb-12">
          <motion.h3 className="text-3xl font-semibold text-[#28282B] text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>Menu</motion.h3>

          <div className="relative inline-block w-64">
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

        {/* Drink Cards */}
        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
          {selectedfoodItems.map((foodItem) => (
              <motion.div key={foodItem.id} className='relative shadow-lg h-[150px] sm:h-[356px] bg-pink-100/20 rounded-3xl'>
                        { 
                          foodItem?.image_url 
                          ? 
                          <img src={`/storage/${foodItem.image_url}`} alt='image' className="object-cover w-full h-full rounded-3xl" />
                          :
                          <img src="/img/noimage.png" className="object-cover w-full h-full rounded-3xl" alt='image'/>
                        }
                        <div className="absolute bottom-0 flex flex-col items-center justify-center w-full p-2 tracking-wide text-white sm:p-4 bg-slate-900/50 rounded-b-3xl">
                            <h3 className="text-sm font-semibold sm:text-xl text-center">{ foodItem.name }</h3>
                            <p className="text-xs text-center sm:text-sm">{ foodItem.description }</p>
                            <h3 className="mt-2 text-sm sm:text-2xl">€ { foodItem.price }</h3>
                        </div>
                </motion.div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="max-w-2xl w-full mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-[#28282B] text-center mb-6">Feedback</h2>
       
       {flash.success && (
        <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-2 rounded-lg mb-4 text-center">
          {flash.success}
        </div>
      )}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-6 flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-[#28282B]/90 font-medium mb-1">Email</span>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="Your email"
              className="border border-[#28282B]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#28282B] text-[#28282B]"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </label>

          <label className="flex flex-col">
            <span className="text-[#28282B]/90 font-medium mb-1">Message</span>
            <textarea
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              placeholder="Your message"
              rows={4}
              className="border border-[#28282B]/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#28282B] text-[#28282B]"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </label>

          <button
            type="submit"
            disabled={processing}
            className="bg-white border border-[#28282B] text-[#28282B] font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition"
          >
            {processing ? 'Sending...' : 'Send Feedback'}

          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-[#28282B]/70 text-sm mt-16 border-t border-[#28282B]/20 pt-4 text-center" id="contact">
        <p>123 Flavor Street, Foodie Town</p>
        <p>Email: contact@wingsanddumplings.com | Phone: (555) 123-4567</p>
        <p className="mt-2">© {new Date().getFullYear()} Wings and Dumplings. All rights reserved.</p>
      </footer>
    </div>
  );
}
