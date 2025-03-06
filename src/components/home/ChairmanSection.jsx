// src/components/home/ChairmanSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ChairmanSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 bg-tech-dark relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-tech-blue/5 to-purple-500/5 blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/5 to-tech-blue/5 blur-3xl -bottom-48 -right-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-tech-darker/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-tech-blue/30 transition-all duration-500 shadow-lg hover:shadow-tech-blue/10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500"
          >
            Chairman's Message
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 p-1 shadow-lg shadow-purple-500/20">
                <div className="w-full h-full rounded-full bg-tech-darker flex items-center justify-center">
                  <span className="text-2xl text-tech-blue font-medium">CS</span>
                </div>
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-semibold mb-2"
              >
                Dr. Muhammad Mubashir Khan
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 mb-4"
              >
                Chairman, Department of Computer Science & Information Technology
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 relative"
              >
                <span className="absolute -left-4 top-0 text-3xl text-tech-blue opacity-30">"</span>
                Our vision is to nurture the next generation of technology leaders through hands-on experience, 
                innovation, and collaboration. CSIT Clubs at NED University provide a platform for students to 
                explore their passion and develop skills that will shape the future of technology.
                <span className="absolute -bottom-4 right-0 text-3xl text-tech-blue opacity-30">"</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairmanSection;