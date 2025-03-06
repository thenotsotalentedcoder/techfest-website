// src/pages/TechFestPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { techFestData } from '../data/techFestData';

// Sample event data (you would replace this with real data)
const upcomingEvents = [
  {
    id: 1,
    title: "Hackathon 2025",
    organizer: "Koderz Club",
    date: "April 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "CSIT Auditorium",
    description: "A 24-hour coding competition where teams will develop innovative solutions to real-world problems.",
    registration: "https://forms.example.com/hackathon2025",
    category: "Competition",
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "AI Workshop Series",
    organizer: "AI Alliance",
    date: "April 17, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Lab 3, CSIT Building",
    description: "Learn about the latest advancements in AI and machine learning through hands-on exercises.",
    registration: "https://forms.example.com/aiworkshop",
    category: "Workshop",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Industry Talk: Future of Web3",
    organizer: "Ledger League",
    date: "April 18, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Seminar Hall",
    description: "Join industry experts as they discuss the future of blockchain technology and Web3 development.",
    registration: "https://forms.example.com/web3talk",
    category: "Seminar",
    status: "Coming Soon"
  }
];

// Sample organizing team data
const organizingTeam = [
  {
    id: 1,
    name: "John Smith",
    role: "Chief Organizer",
    club: "CSIT Executive",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/john-smith"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Events Coordinator",
    club: "Koderz Club",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/sarah-johnson"
  },
  {
    id: 3,
    name: "Michael Zhang",
    role: "Technical Lead",
    club: "AI Alliance",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/michael-zhang"
  },
  {
    id: 4,
    name: "Jessica Patel",
    role: "Marketing Head",
    club: "CyberSENTS",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/jessica-patel"
  }
];

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="event-card bg-tech-darker rounded-xl border border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        borderColor: 'rgba(0, 191, 255, 0.3)',
        boxShadow: '0 10px 25px -5px rgba(0, 191, 255, 0.3)'
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm">By {event.organizer}</p>
          </div>
          <span className="px-3 py-1 bg-tech-blue/20 text-tech-blue rounded-full text-sm">
            {event.category}
          </span>
        </div>
        
        <div className="flex items-center mt-4 text-sm text-gray-300">
          <span className="mr-4">{event.date}</span>
          <span>{event.time}</span>
        </div>
        
        <div className={`event-details mt-4 pt-4 border-t border-gray-800 ${expanded ? 'expanded' : ''}`}>
          <p className="text-gray-300 mb-4">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm">Venue</p>
              <p className="text-white">{event.venue}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <p className="text-green-400">{event.status}</p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <a 
              href={event.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-tech-blue text-white rounded-lg inline-block hover:bg-opacity-80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Registration Form
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <button 
            className="text-tech-blue flex items-center text-sm"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? 'Show Less' : 'Show Details'}
            <svg 
              className={`w-4 h-4 ml-1 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div 
      className="bg-tech-darker rounded-xl p-5 border border-gray-800 hover:border-tech-blue/30 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-tech-blue/20 rounded-full flex items-center justify-center mr-3">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-10 h-10 rounded-full" />
          ) : (
            <span className="text-tech-blue font-medium text-xl">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="text-white font-medium">{member.name}</h4>
          <p className="text-gray-400 text-sm">{member.role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-3">From: {member.club}</p>
      {member.linkedin && (
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-tech-blue text-sm flex items-center hover:underline"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
      )}
    </motion.div>
  );
};

const TechFestPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-16 bg-tech-dark text-white"
    >
      {/* Hero Section */}
      <div className="tech-bg py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Add glow elements */}
          <div className="tech-glow" style={{ width: '300px', height: '300px', backgroundColor: '#00BFFF', top: '20%', left: '10%', opacity: '0.15', filter: 'blur(80px)' }}></div>
          <div className="tech-glow" style={{ width: '250px', height: '250px', backgroundColor: '#9B51E0', bottom: '10%', right: '20%', opacity: '0.1', filter: 'blur(60px)' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500"
          >
            Tech Fest '25
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            The annual technology festival of the CSIT Department at NED University,
            showcasing innovation, talent, and the future of technology.
          </motion.p>
        </div>
      </div>
      
      {/* Upcoming Tech Fest Overview */}
      <motion.div 
        variants={itemVariants}
        className="container mx-auto px-4 mb-16"
      >
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-tech-blue/30 relative overflow-hidden">
          {/* Particle effects */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-tech-blue/70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/5">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500"
              >
                Tech Fest '{techFestData.upcoming.year.toString().slice(-2)}
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-6"
              >
                {techFestData.upcoming.description}
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-2 bg-tech-blue/20 text-tech-blue rounded-full text-sm">
                  {techFestData.upcoming.date}
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-500 rounded-full text-sm">
                  {techFestData.upcoming.status}
                </span>
              </motion.div>
            </div>
            
            <div className="md:w-3/5">
              <motion.div 
                className="w-full h-64 bg-tech-darker rounded-xl flex items-center justify-center relative overflow-hidden border border-tech-blue/20"
                variants={itemVariants}
              >
                <div className="absolute inset-0 tech-bg opacity-30"></div>
                
                <div className="relative text-center z-10">
                  <motion.div 
                    className="text-5xl font-bold text-tech-blue mb-4"
                    animate={{ 
                      textShadow: [
                        "0 0 5px rgba(0, 191, 255, 0.5)", 
                        "0 0 15px rgba(0, 191, 255, 0.8)", 
                        "0 0 5px rgba(0, 191, 255, 0.5)"
                      ] 
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Coming Soon
                  </motion.div>
                  <p className="text-gray-400">Get ready for an incredible experience!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Upcoming Events Section */}
      <motion.section 
        variants={itemVariants}
        className="container mx-auto px-4 mb-16"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
          <span className="text-tech-blue">More events coming soon</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </motion.section>
      
      {/* Schedule Section */}
      <motion.section 
        variants={itemVariants}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Event Schedule</h2>
        
        <div className="bg-tech-darker rounded-xl p-6 border border-gray-800">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-tech-blue/30 ml-4"></div>
            
            {/* Schedule items */}
            <div className="space-y-8 pl-12 relative">
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-12 w-8 h-8 bg-tech-darker rounded-full border-2 border-tech-blue flex items-center justify-center">
                  <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Opening Ceremony</h3>
                <p className="text-gray-300 mb-1">April 15, 2025 | 10:00 AM - 12:00 PM</p>
                <p className="text-gray-300 mb-3">Main Auditorium</p>
                <p className="text-gray-400">Kick-off event with keynote speakers and presentations.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-tech-darker rounded-full border-2 border-purple-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Hackathon</h3>
                <p className="text-gray-300 mb-1">April 15-16, 2025 | 2:00 PM - 2:00 PM</p>
                <p className="text-gray-300 mb-3">CSIT Labs</p>
                <p className="text-gray-400">24-hour coding competition.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-tech-darker rounded-full border-2 border-pink-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Workshops & Talks</h3>
                <p className="text-gray-300 mb-1">April 17-20, 2025 | Various Times</p>
                <p className="text-gray-300 mb-3">Multiple Venues</p>
                <p className="text-gray-400">Series of technical workshops and industry talks.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-tech-darker rounded-full border-2 border-tech-blue flex items-center justify-center">
                  <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">Closing Ceremony</h3>
                <p className="text-gray-300 mb-1">April 22, 2025 | 4:00 PM - 6:00 PM</p>
                <p className="text-gray-300 mb-3">Main Auditorium</p>
                <p className="text-gray-400">Award ceremony and closing remarks.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Full schedule with detailed timings will be published soon.</p>
            <button className="px-6 py-2 bg-tech-blue/20 text-tech-blue rounded-full transition-colors hover:bg-tech-blue/30">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </motion.section>
      
      {/* Organizing Team Section */}
      <motion.section 
        variants={itemVariants}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Organizing Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organizingTeam.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </motion.section>
      
      {/* Past Editions Section */}
      <motion.section 
        variants={itemVariants}
        className="container mx-auto px-4 mt-20 pt-12 border-t border-gray-800"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Past Editions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techFestData.past.map((fest) => (
            <motion.div 
              key={fest.year}
              whileHover={{ y: -5 }}
              className="bg-tech-darker rounded-xl overflow-hidden border border-gray-800 hover:border-tech-blue/30 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Tech Fest '{fest.year.toString().slice(-2)}
                </h3>
                <p className="text-gray-300 mb-4">
                  {fest.description}
                </p>
                <div className="mb-6">
                <span className="font-semibold text-tech-blue">Theme:</span> {fest.theme}
                </div>
                <div className="flex justify-end">
                  <Link 
                    to={`/techfest/${fest.year}`}
                    className="px-4 py-2 bg-tech-darker border border-tech-blue text-tech-blue rounded-lg inline-block hover:bg-tech-blue/10 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TechFestPage;