import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '@/constants'; // Use your actual paths
import AppWrapper from '@/wrapper/AppWrapper';

const Skills = () => {
  const tools = [
    { name: 'HTML', image: images.html },
    { name: 'CSS', image: images.css },
    { name: 'JavaScript', image: images.js },
    { name: 'React', image: images.react },
    { name: 'Redux', image: images.redux },
    { name: 'API', image: images.api },
    { name: 'Supabase', image: images.supabasePic },
    { name: 'Clerk', image: images.clerk },
    { name: 'Figma', image: images.figma },
    { name: 'ShadCN', image: images.shadcn },
    { name: 'Git', image: images.git },
    { name: 'TypeScript', image: images.typescript },
  ];

  const timeline = [
    {
      year: '2021',
      skills: ['Problem Solving', 'Basics of Computing', 'HTML/CSS'],
      description:
        'Began my tech journey with basic computing skills and a curiosity for the web. Explored the foundational structure of websites, learned how to make pages responsive, and created small personal projects to apply my knowledge.',
    },
    {
      year: '2022',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Started my journey into web development, learning the basics of building responsive websites. I then dove into JavaScript, focusing on adding interactivity to pages through DOM manipulation and event handling. As my projects grew in complexity, I realized that managing state and re-rendering components manually was becoming difficult. To streamline my workflow and build more maintainable, scalable applications, I chose to learn React, which offered an efficient way to handle state, UI components, and data flow in a more organized, declarative manner.',
    },
    {
      year: '2023',
      skills: ['React', 'Redux', 'Tailwind CSS'],
      description:
        'Built several dynamic UIs and became confident in component-based architecture and styling with React. As my applications grew, I found it challenging to manage global state and share data between components efficiently, so I learned Redux to handle state management in a more structured and scalable way. To improve the UI design and streamline my styling process, I also learned Tailwind CSS, which allowed me to rapidly build responsive and customizable layouts with utility-first classes. I further deepened my React knowledge by exploring hooks, context API, and optimizing performance for more advanced, production-ready applications.',
    },
    {
      year: '2024',
      skills: ['TypeScript', 'Next.js', 'Supabase'],
      description:
        'Diving into full-stack development with modern tools like TypeScript and Next.js, I started building more complex and scalable applications. I used Next.js for server-side rendering, static site generation, and creating a seamless user experience with fast load times. I integrated Supabase to handle backend services such as authentication, database management, and real-time data syncing, which allowed me to build scalable apps quickly. Along the way, I learned to manage both front-end and back-end workflows, optimizing the full-stack development process. In 2025, I am continuing to expand my knowledge, focusing on advanced topics like serverless architecture, API design, and improving my skills in building highly scalable systems.',
    },
  ];

  const [expanded, setExpanded] = useState(new Array(timeline.length).fill(false));

  const toggleDescription = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="w-full px-4 md:px-40 py-10" id="skills">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-10"
      >
        Skills & Experience
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Side - Tools Logos */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-wrap justify-center items-start gap-6 mt-4 md:mt-0"
          style={{ height: '350px', overflowY: 'auto' }}
        >
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center w-20">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                <img src={tool.image} alt={tool.name} className="w-8 h-8" />
              </div>
              <span className="mt-2 text-xs text-center text-gray-700 font-medium">{tool.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Right Side - Timeline */}
        <div className="flex-1 space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex flex-wrap justify-between items-center mb-1">
                <h3 className="text-base font-semibold text-blue-500">{item.year}</h3>
                <div className="flex flex-wrap gap-2 text-gray-700 text-xs font-medium">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-200 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                {expanded[index] ? item.description : `${item.description.slice(0, 150)}...`}
              </p>
              <button
                onClick={() => toggleDescription(index)}
                className="mt-2 text-blue-500 text-xs font-medium"
              >
                {expanded[index] ? 'Show Less' : 'Show More'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrapper(Skills, 'skills');
