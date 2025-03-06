// src/components/home/EventCalendar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData } from '../../data/eventData';

const EventCalendar = () => {
  const mainEvents = [
    {
      id: "opening",
      title: "Opening Ceremony",
      date: "April 14, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Main Auditorium",
      description: "Grand Inauguration of TECH FEST",
      icon: "🏁",
      color: "#00BFFF"
    },
    {
      id: "events",
      title: "Event Series",
      date: "April 14-24, 2025",
      time: "Various Times",
      venue: "Multiple Venues",
      description: "Multiple competitions, workshops, and hackathons organized by CSIT Clubs",
      icon: "🎯",
      color: "#9B51E0"
    },
    {
      id: "closing",
      title: "Closing Ceremony",
      date: "April 25, 2025",
      time: "4:00 PM - 6:00 PM",
      venue: "Main Auditorium",
      description: "Award Distribution and Closing of TECH FEST",
      icon: "🎉",
      color: "#00BFFF"
    }
  ];

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-cyber text-center mb-10 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500"
        >
          Event Schedule
        </motion.h2>

        {/* Main Timeline - Desktop */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {/* Timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-tech-blue via-purple-500 to-tech-blue h-full"
          ></motion.div>

          {/* Timeline events */}
          <div className="space-y-24 relative">
            {mainEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative z-10"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: "#0A0A15", 
                    borderColor: event.color 
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="text-sm">{event.icon}</div>
                </motion.div>
                
                {/* Event card */}
                <div className={`${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'} w-5/12`}>
                  <motion.div 
                    className="p-6 rounded-xl relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(145deg, rgba(15,15,20,0.95), rgba(10,10,15,0.98))`,
                      backdropFilter: 'blur(5px)',
                      border: `1px solid rgba(40,40,50,0.5)`,
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 25px -5px ${event.color}30`,
                      borderColor: `${event.color}50`,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h3 className="text-xl font-cyber mb-2" style={{ color: event.color }}>{event.title}</h3>
                    
                    <div className="mb-4 text-gray-300 text-sm space-y-1">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span className="truncate">{event.venue}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">{event.description}</p>
                    
                    {event.id === "events" && (
                      <Link 
                        to="/schedule" 
                        className="inline-block px-4 py-2 rounded-full text-sm transition-colors"
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
                        View Full Schedule
                      </Link>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical Card Layout */}
        <div className="md:hidden">
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-blue via-purple-500 to-tech-blue"
            ></motion.div>

            {mainEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 pl-12"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-2 top-3 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: "#0A0A15", 
                    borderColor: event.color 
                  }}
                >
                  <div className="text-xs">{event.icon}</div>
                </motion.div>
                
                {/* Event card */}
                <motion.div 
                  className="p-5 rounded-xl relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(145deg, rgba(15,15,20,0.95), rgba(10,10,15,0.98))`,
                    backdropFilter: 'blur(5px)',
                    border: `1px solid rgba(40,40,50,0.5)`,
                  }}
                  whileHover={{ 
                    boxShadow: `0 5px 15px -5px ${event.color}30`,
                    borderColor: `${event.color}50`,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-lg font-cyber mb-2" style={{ color: event.color }}>{event.title}</h3>
                  
                  <div className="mb-3 text-gray-300 text-xs space-y-1">
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{event.description}</p>
                  
                  {event.id === "events" && (
                    <Link 
                      to="/schedule" 
                      className="inline-block px-3 py-1 rounded-full text-xs transition-colors"
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
                      View Full Schedule
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;