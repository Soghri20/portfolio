import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { images } from '@/constants';
import AppWrapper from '@/wrapper/AppWrapper';
import MotionWrapper from '@/wrapper/MotionWrapper';

const abouts = [
  {
    title: 'Frontend Development',
    description: 'I create dynamic and responsive web applications with React and modern frontend technologies.',
    imgUrl: images.about01,
  },
  {
    title: 'UI/UX Design',
    description: 'I design intuitive user interfaces with a focus on user experience, ensuring seamless interactions.',
    imgUrl: images.about02,
  },
  {
    title: 'Responsive Web Design',
    description: 'I ensure that my websites look great and function smoothly across all devices with responsive design.',
    imgUrl: images.about03,
  },
  {
    title: 'JavaScript & React',
    description: 'I build modern, interactive web applications using JavaScript and React.js to create dynamic UIs.',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <section className="px-20 py-12  md:py-20 bg-gray-900 text-center">
      {/* Heading */}
      <h2 className="text-3xl text-white md:text-5xl font-bold mb-12">
        I know that <span className="text-blue-500">Good Design,</span> <br />
        means <span className="text-green-600">Good Business</span>
      </h2>

      {/* About Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-[330px] sm:h-[300px]">
              <CardContent className="flex flex-col items-center p-5 gap-4 h-full">
                <img
                  src={about.imgUrl}
                  alt={about.title}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{about.title}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {about.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrapper(
  MotionWrapper(About)
  ,'about');
