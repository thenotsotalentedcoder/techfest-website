// src/components/home/UpcomingEvents.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData } from '../../data/eventData';

const UpcomingEvents = () => {
  // Get the next 3 upcoming events
  const upcomingEvents = eventData
    .filter(event => event.status === "Upcoming")
    .sort((a, b) => new Date(a.date.split('-')[0]) - new Date(b.date.split('-')[0]))
    .slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #000000, #050A15)" }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient glows */}
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#00BFFF', top: '20%', left: '-10%', opacity: '0.1', filter: 'blur(120px)' }}></div>
        <div className="tech-glow" style={{ width: '350px', height: '350px', backgroundColor: '#9B51E0', bottom: '10%', right: '-10%', opacity: '0.1', filter: 'blur(120px)' }}></div>
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-tech-blue/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Digital circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,30 L20,30 L20,70 L80,70 L80,30 L100,30" stroke="#00BFFF" strokeWidth="0.1" fill="none" />
          <path d="M0,50 L40,50 L40,20 L60,20 L60,50 L100,50" stroke="#9B51E0" strokeWidth="0.1" fill="none" />
          <path d="M25,0 L25,20 L75,20 L75,80 L25,80 L25,100" stroke="#00BFFF" strokeWidth="0.1" fill="none" />
          <path d="M50,0 L50,40 L30,40 L30,60 L50,60 L50,100" stroke="#9B51E0" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-10"
        >
          <h2 className="text-3xl font-cyber bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500">Upcoming Events</h2>
          <Link 
            to="/events" 
            className="text-tech-blue hover:text-purple-500 transition-colors flex items-center font-medium"
          >
            View All
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {upcomingEvents.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="rounded-xl overflow-hidden relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-[#0A0A15] rounded-xl border border-gray-800 group-hover:border-opacity-0 transition-all duration-300"></div>
              
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                background: `linear-gradient(145deg, ${event.color}, transparent)` 
              }}></div>
              
              {/* Category Tag - Top Left */}
              <div className="absolute top-0 left-0 rounded-tl-xl rounded-br-xl px-3 py-1 text-xs z-10"
                style={{ 
                  backgroundColor: `${event.color}20`,
                  color: event.color
                }}>
                {event.category}
              </div>
              
              <div className="relative p-6 h-full flex flex-col pt-8">
                {/* Event Icon */}
                <div className="text-4xl mb-3">{event.icon}</div>
                
                {/* Event Details */}
                <h3 className="text-xl font-cyber mb-2">{event.title}</h3>
                
                <div className="mb-4 text-gray-400 text-sm">
                  <div className="flex items-center mb-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {event.time}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 flex justify-between items-center">
                  {event.registration ? (
                    <Link 
                      to={`/events/${event.id}`}
                      className="px-4 py-2 rounded-full text-sm transition-colors"
                      style={{ 
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: event.color,
                        color: event.color
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = event.color;
                        e.currentTarget.style.color = '#0A0A0A';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = event.color;
                      }}
                    >
                      Register
                    </Link>
                  ) : (
                    <span className="text-gray-500 text-sm">Registration not required</span>
                  )}
                  
                  <Link 
                    to={`/events/${event.id}`}
                    className="text-tech-blue hover:text-purple-500 text-sm transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingEvents;