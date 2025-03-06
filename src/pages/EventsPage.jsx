// src/pages/EventsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { eventData, eventCategories } from '../data/eventData';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on category and search query
  const filteredEvents = eventData.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
            Tech Fest '25 Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore and register for our exciting range of events, workshops, competitions and hackathons.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex overflow-x-auto space-x-2 pb-2 w-full md:w-auto">
              {eventCategories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category.value
                      ? 'bg-tech-blue text-white'
                      : 'bg-tech-darker text-gray-300 hover:bg-tech-blue/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-full bg-tech-darker border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
              />
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Event Grid */}
        <div className="mb-10">
          <AnimatePresence>
            {filteredEvents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg">No events match your search criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-tech-blue hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredEvents.map((event) => (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl overflow-hidden relative group"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-tech-darker rounded-xl border border-gray-800 group-hover:border-opacity-0 transition-all duration-300"></div>
                    
                    {/* Gradient Border on Hover */}
                    <div className="absolute inset-0 rounded-xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                      background: `linear-gradient(145deg, ${event.color}, transparent)` 
                    }}></div>
                    
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Category Tag */}
                      <div 
                        className="px-3 py-1 rounded-full text-xs inline-block self-start mb-3"
                        style={{ 
                          backgroundColor: `${event.color}20`,
                          color: event.color
                        }}
                      >
                        {event.category}
                      </div>
                      
                      {/* Event Icon */}
                      <div className="text-4xl mb-3">{event.icon}</div>
                      
                      {/* Event Details */}
                      <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                      
                      <div className="mb-4 text-gray-400 text-sm">
                        <div className="flex items-center mb-1">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center mb-1">
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
                      
                      <p className="text-gray-300 text-sm mb-6 line-clamp-2">{event.description}</p>
                      
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
            )}
          </AnimatePresence>
        </div>

        {/* Calendar link */}
        <div className="text-center">
          <Link 
            to="/schedule" 
            className="px-6 py-3 rounded-full bg-tech-darker border border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-colors font-medium inline-block"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;