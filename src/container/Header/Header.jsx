import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/constants';
import AppWrapper from '@/wrapper/AppWrapper';

const Header = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center px-4 md:px-16">
      {/* Decorative Background Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-32 h-32 opacity-20 rounded-full bg-blue-200 z-0" />
      <div className="absolute top-[30px] right-[-40px] w-28 h-28 opacity-20 rounded-full bg-blue-200 z-0" />
      <div className="absolute bottom-[-0px] left-[20%] w-24 h-24 opacity-20 rounded-full bg-blue-200 z-0" />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 z-10 w-full">
        {/* Left: Info Cards */}
        <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-700 rounded-2xl shadow-lg px-4 py-3 text-center w-full md:w-64"
          >
            <p className="text-white text-lg md:text-2xl font-semibold">
              👋 Hey, I'm <span className="text-blue-500">Othmane Soghri</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg px-4 py-3 w-full md:w-40 text-sm text-left"
          >
            <p className="text-gray-600 text-md">Web Developer & Freelancer</p>
          </motion.div>
        </div>

        {/* Center: Person Image with circle background */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center w-full md:w-auto"
        >
          {/* Circle Behind */}
          <div className="absolute w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[350px] lg:h-[450px] rounded-full bg-blue-500 opacity-20 z-[-1]" />
          {/* Person Image */}
          <img
            src={images.laptop}
            alt="Person"
            className="w-[250px] md:w-[350px] lg:w-[450px] object-contain"
          />
        </motion.div>

        {/* Right: Logos */}
        <div className="flex flex-wrap md:flex-col gap-4 items-center w-full md:w-auto justify-center md:justify-start">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 md:mr-20 mb-3 bg-white rounded-full shadow-lg border-2 flex items-center justify-center"
          >
            <img src={images.redux} alt="Redux" className="w-8 h-8" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-22 h-22 mb-3 bg-white rounded-full shadow-md border-2 flex items-center justify-center"
          >
            <img src={images.react} alt="React" className="w-12 h-12" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:w-18 md:h-18 w-16 h-16 md:mr-20  mb-3 bg-white rounded-full border-2 shadow-md flex items-center justify-center"
          >
            <img src={images.supabasePic} alt="Vue" className="w-8 h-8" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Header , 'home');
