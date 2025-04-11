import React from 'react';

const menuItems = ['home', 'about', 'work', 'skills','testimonials','contact'];

const NavigationDots = ({ active }) => {
    console.log(active)
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 ">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
            active === item ? 'bg-[#e1eBAC] border-[#e1eBAC]' : 'border-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
