import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { images } from '@/constants';
import { Github } from 'lucide-react'; // Using Github icon from lucide-react
import AppWrapper from '@/wrapper/AppWrapper';

const filters = ['ALL', 'UI/UX', 'WEB APP', 'REACT JS', 'SUPABASE'];

const dummyProjects = [
  {
    title: 'Realtor-clone',
    description: 'A replica of a Realtor site where you can easily list, remove, or manage...',
    imageUrl: images.about04,
    tags: ['UI/UX'],
    githubUrl: 'https://github.com/Soghri20/relator-clone-react', // One GitHub URL
  },
  {
    title: 'SocialMedia clone',
    description: 'A small platform where you can like or unlike posts and add new ones.',
    imageUrl: images.about03,
    tags: ['REACT JS','SUPABASE'],
    githubUrl: 'https://github.com/Soghri20/social-medial-app', // One GitHub URL
  },
  {
    title: 'Instagram Clone',
    description: 'A replica of Instagram, featuring all the core functionalities...',
    imageUrl: images.about01,
    tags: ['SUPABASE'],
    githubUrl: 'https://github.com/Soghri20/insta-clone', // One GitHub URL
  },
  {
    title: 'Freelancer',
    description: 'A replica of Upwork, designed to connect freelancers with clients...',
    imageUrl: images.about02,
    tags: ['WEB APP'],
    githubUrl: 'https://github.com/Soghri20/freelancing', // One GitHub URL
  },
  {
    title: 'E-commerce UI',
    description: 'An e-commerce website UI with user-friendly design.',
    imageUrl: images.about01,
    tags: ['UI/UX'],
    githubUrl: 'https://github.com/Soghri20/Ecommerce-clone', // One GitHub URL
  },
  {
    title: 'React Video Player',
    description: 'A video player built with React and custom features.',
    imageUrl: images.about03,
    tags: ['REACT JS'],
    githubUrl: 'https://github.com/yourusername/react-video-player', // One GitHub URL
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterByName = (item) => {
    setActiveFilter(item);
  };

  const filteredProjects =
    activeFilter === 'ALL'
      ? dummyProjects
      : dummyProjects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className="px-6 py-12 md:py-20 md:px-10 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        My Creative <span className="text-blue-500">Portfolio</span> Section
      </h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((item) => (
          <motion.div key={item} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === item ? 'default' : 'outline'}
              onClick={() => filterByName(item)}
              className="capitalize text-sm md:text-base"
            >
              {item.toLowerCase()}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio Cards with Animation on Filter Change */}
      <motion.div
        key={activeFilter}  // This triggers the animation when filtering changes
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-4 rounded-xl overflow-hidden relative group"
          >
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl"
              />
              {/* Title */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] bg-white text-gray-700 text-center p-2 text-xs font-semibold rounded-t-xl">
                {project.title}
              </div>

              {/* GitHub Icon on Hover */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-[0.5] transition-opacity rounded-2xl duration-300"
              >  
                <div className="border-3 w-[80px] h-[80px] flex items-center justify-center flex-col rounded-full p-5">
                  <Github className="text-6xl" />
                  <p className="text-xs">github</p>
                </div>
              </a>
            </div>

            <div className="p-4">
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <a href={project.githubUrl} className='text-sm text-center text-blue-500 underline cursor-pointer'>
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrapper(Work, 'work');
