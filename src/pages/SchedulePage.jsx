// src/pages/SchedulePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventData } from '../data/eventData';

const SchedulePage = () => {
  // Group events by date
  const eventsByDate = eventData.reduce((acc, event) => {
    const dateKey = event.date;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});

  // Sort dates
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    const dateA = new Date(a.split("-")[0]);
    const dateB = new Date(b.split("-")[0]);
    return dateA - dateB;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-tech-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#00BFFF', top: '10%', left: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#9B51E0', bottom: '10%', right: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-cyber mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500">
            Event Schedule
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tech Fest '25 runs from April 14-25, 2025 with a variety of exciting events, workshops, and competitions.
          </p>
        </motion.div>

        {/* Timeline view */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform md:-translate-x-1/2"></div>

            {sortedDates.map((date, index) => (
              <div key={date} className="mb-8">
                {/* Date indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-6"
                >
                  <div className="flex items-center">
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-tech-darker rounded-full border-2 border-tech-blue transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                    </div>
                    <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right font-cyber text-xl font-semibold text-white">
                      {date}
                    </div>
                  </div>
                </motion.div>

                {/* Events for this date */}
                <div className="space-y-4">
                  {eventsByDate[date].map((event, eventIndex) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + eventIndex * 0.05 + 0.2 }}
                      className="relative ml-16 md:ml-0"
                    >
                      <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:block w-1/2"></div>
                        <div className={`bg-tech-darker w-full md:w-1/2 rounded-xl p-6 border border-gray-800 hover:border-opacity-50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                          style={{ borderColor: event.color }}
                        >
                          <div className="flex items-start">
                            <div className="text-3xl mr-4 mt-1">{event.icon}</div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold" style={{ color: event.color }}>
                                  {event.title}
                                </h3>
                                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: `${event.color}20`, color: event.color }}>
                                  {event.category}
                                </span>
                              </div>
                              
                              <div className="mb-3 text-gray-400 text-sm space-y-1">
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
                              
                              <p className="text-gray-300 mb-4 text-sm">{event.description}</p>
                              
                              <div className="flex justify-between items-center">
                                {event.registration ? (
                                  <Link 
                                    to={`/events/${event.id}`}
                                    className="px-4 py-1 rounded-full text-sm"
                                    style={{ 
                                      border: `1px solid ${event.color}`, 
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
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download schedule button */}
        <div className="text-center">
          <a 
            href="/schedule-techfest25.pdf" 
            download
            className="px-6 py-3 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 text-white font-medium inline-block"
          >
            Download Full Schedule PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;