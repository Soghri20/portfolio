import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { images } from '@/constants';
import AppWrapper from '@/wrapper/AppWrapper';

const testimonials = [
  {
    logo: images.react,
    comment: 'I specialize in building seamless, high-performance UIs with React. If you need a React expert who can take your ideas from concept to implementation with great attention to detail, I’m the developer for you.',
    name: 'Othmane',
    email: 'othmane@example.com',
  },
  {
    logo: images.redux,
    comment: 'Redux is one of my core strengths. I excel in creating efficient and scalable state management solutions that will make your React app faster and more reliable. Let’s work together to take your app to the next level.',
    name: 'Othmane',
    email: 'othmane@example.com',
  },
  {
    logo: images.js, // Changed logo to JS
    comment: 'JavaScript is the backbone of modern web development, and I have extensive experience with it. Whether you need interactive features or dynamic functionality, I’m here to bring your ideas to life with clean, efficient code.',
    name: 'Othmane',
    email: 'othmane@example.com',
  },
  {
    logo: images.supabasePic, // Changed logo to Supabase
    comment: 'Supabase allows me to create powerful backend solutions with ease. From setting up databases to integrating serverless functions, I can help you leverage Supabase for fast, reliable backend services. Let’s build something great together!',
    name: 'Othmane',
    email: 'othmane@example.com',
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <motion.section
      className="w-full px-4 md:px-16 py-16 h-[100vh] bg-gray-800 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-5xl font-bold text-center text-white mb-12">More About Me</h2>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto mb-10">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center py-6">
                <motion.div
                  className="rounded-xl shadow-lg p-8 w-full bg-white max-w-2xl text-left space-y-4"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-4 flex-col md:flex-col md:justify-center">
                    <div className="min-w-23 min-h-23 bg-white shadow rounded-full p-5 flex items-center justify-center">
                      <img src={item.logo} alt={`logo-${index}`} className="w-15 h-15" />
                    </div>
                    <p className="text-gray-700 text-m md:text-lg italic mt-4 md:mt-0">
                      "{item.comment}"
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-10 hidden md:flex" />
          <CarouselNext className="right-10 hidden md:flex" />
        </Carousel>
      </div>

      {/* Comment Submission Box */}
      
    </motion.section>
  );
};

export default AppWrapper(Testimonials,'testimonials');
