import NavigationDots from '@/components/NavigationDots';
import SocialMedial from '@/components/SocialMedial';
import React from 'react';
import { motion } from 'framer-motion';

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`relative w-full min-h-screen  ${classNames}`}>
        {/* Social Media Icons */}
        <SocialMedial />

        {/* Main Content */}
        <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
          <Component />
        </motion.div>

        {/* Footer */}
        <div className="absolute bottom-6 right-2 text-gray-600 text-xs space-y-1 font-light text-left z-1">
  <p>@2025 Othmane</p>
  <p>All rights reserved</p>
</div>

        {/* Navigation Dots */}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
