import { Facebook, Instagram, Twitter, TwitterIcon, X } from 'lucide-react';
import React from 'react';

const SocialMedial = () => {
  return (
    <div className="absolute bottom-6 left-6 z-1 flex flex-col gap-4">
      <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
        <TwitterIcon size={20} />
      </div>
      <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
        <Facebook size={20} />
      </div>
      <div className="w-10 h-10 bg-white text-pink-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
        <Instagram size={20} />
      </div>
    </div>
  );
};

export default SocialMedial;
