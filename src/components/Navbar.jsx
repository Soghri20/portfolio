import { images } from '@/constants';
import { MenuIcon, SidebarCloseIcon } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'; // <-- Make sure this is correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Work', 'Skills','Testimonials']; // Removed Contact from here

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full px-6 py-4 bg-gray-900 shadow-xl sticky top-0 z-50"
    >
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={images.logo} alt="Logo" className="h-20 w-auto p-0" />
        </div>

        {/* Centered Menu Items */}
        <ul className="hidden md:flex gap-8 items-center text-gray-200 font-semibold absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="uppercase transition-colors duration-300 group-hover:text-blue-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-Aligned Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact">
            <Button variant="default" className="capitalize text-md font-semibold">
              Contact us
            </Button>
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <SidebarCloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              key="sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col gap-4 px-6 py-4"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <SidebarCloseIcon className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Sidebar Items including Contact */}
              <ul className="flex flex-col gap-6 items-center text-gray-700 font-medium">
                {[...menuItems, 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="uppercase block hover:text-blue-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Background Circles */}
              <div className="absolute top-[-50px] left-[-50px] w-32 h-32 opacity-20 rounded-full bg-blue-200 z-[-1]" />
              <div className="absolute top-[30px] right-[-40px] w-28 h-28 opacity-20 rounded-full bg-blue-200 z-[-1]" />
              <div className="absolute bottom-[-30px] left-[20%] w-24 h-24 opacity-20 rounded-full bg-blue-200 z-[-1]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
