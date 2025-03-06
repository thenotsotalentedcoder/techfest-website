// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import EventCalendar from '../components/home/EventCalendar';
import ClubsSection from '../components/home/ClubsSection';
import ChairmanSection from '../components/home/ChairmanSection';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-tech-dark text-white"
    >
      <HeroSection />
      <UpcomingEvents />
      <EventCalendar />
      <ClubsSection />
      <ChairmanSection />
    </motion.div>
  );
};

export default HomePage;