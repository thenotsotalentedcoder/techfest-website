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
    <div className="py-16 relative tech-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-cyber text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500"
        >
          Event Schedule
        </motion.h2>

        {/* Main Timeline */}
        <div className="relative max-w-4xl mx-auto">
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
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.venue}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    
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
      </div>
    </div>
  );
};

export default EventCalendar;