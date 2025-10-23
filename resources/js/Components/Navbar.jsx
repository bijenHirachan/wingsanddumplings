import { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Feedback', href: '#feedback' },
  ];
  
  return (
      <nav className="flex justify-between items-center px-6 py-3 bg-[#1f1f22]/90 backdrop-blur-sm fixed top-0 w-full z-40 shadow-md">
        <div className="flex-1"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-gray-400 font-semibold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 right-6 w-64 bg-[#1f1f22]/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col items-start space-y-4 py-6 md:hidden">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 font-semibold text-gray-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
  )
}

export default Navbar

