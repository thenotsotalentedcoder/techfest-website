// src/pages/EventDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cloudId: '',
    rollNumber: '',
    batch: '',
    section: '',
    department: ''
  });

  useEffect(() => {
    // Find the event by ID
    const foundEvent = eventData.find(e => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the registration data to your backend
    alert(`Registration submitted for ${event.title}!`);
    setIsRegistering(false);
    // Reset form
    setFormData({
      name: '',
      cloudId: '',
      rollNumber: '',
      batch: '',
      section: '',
      department: ''
    });
  };

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-tech-dark text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <Link to="/events" className="text-tech-blue hover:underline">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-tech-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: event.color, top: '10%', left: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#9B51E0', bottom: '10%', right: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Link to="/events" className="inline-flex items-center text-tech-blue hover:underline mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Events
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative p-8 rounded-xl bg-tech-darker border border-gray-800 mb-10 overflow-hidden"
        >
          {/* Event accent line */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${event.color}, transparent)` }}></div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">{event.icon}</span>
                <h1 className="text-3xl font-bold font-cyber" style={{ color: event.color }}>{event.title}</h1>
              </div>
              
              <div 
                className="px-3 py-1 rounded-full text-sm inline-block mb-6"
                style={{ 
                  backgroundColor: `${event.color}20`,
                  color: event.color
                }}
              >
                {event.category}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About the Event</h2>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
                
                {event.organizer && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Organized by</h2>
                    <p className="text-gray-300">{event.organizer}</p>
                  </div>
                )}
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">What to Expect</h2>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {event.expectations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-tech-dark rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="text-white">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Time</p>
                      <p className="text-white">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Venue</p>
                      <p className="text-white">{event.venue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Status</p>
                      <p className="text-green-400">{event.status}</p>
                    </div>
                  </div>
                </div>
                
                {event.registration && (
                  <button
                    onClick={() => setIsRegistering(true)}
                    className="w-full py-3 rounded-lg text-white font-medium transition-colors"
                    style={{ 
                      background: `linear-gradient(to right, ${event.color}, ${event.color}cc)`,
                    }}
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Registration Modal */}
        {isRegistering && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-tech-darker rounded-xl p-6 w-full max-w-xl border border-gray-800 relative"
            >
              <button
                onClick={() => setIsRegistering(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <h2 className="text-2xl font-semibold mb-6" style={{ color: event.color }}>Register for {event.title}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Cloud ID (University Email)</label>
                  <input
                    type="email"
                    name="cloudId"
                    value={formData.cloudId}
                    onChange={handleInputChange}
                    required
                    placeholder="example@cloud.neduet.edu.pk"
                    className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Roll Number</label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Batch</label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                    >
                      <option value="">Select</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Section</label>
                    <select
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                    >
                      <option value="">Select</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                    >
                      <option value="">Select</option>
                      <option value="CS">Computer Science</option>
                      <option value="AI">Artificial Intelligence</option>
                      <option value="DS">Data Science</option>
                      <option value="CY">Cyber Security</option>
                      <option value="GA">Game Development</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setIsRegistering(false)}
                    className="px-4 py-2 rounded bg-gray-800 text-white mr-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded text-white font-medium"
                    style={{ background: `linear-gradient(to right, ${event.color}, ${event.color}cc)` }}
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
        
        {/* Related Events */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Related Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData
              .filter(e => e.id !== event.id && e.category === event.category)
              .slice(0, 3)
              .map(relatedEvent => (
                <motion.div 
                  key={relatedEvent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-tech-darker rounded-xl p-5 border border-gray-800 hover:border-tech-blue/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{relatedEvent.icon}</span>
                    <h3 className="text-lg font-medium">{relatedEvent.title}</h3>
                  </div>
                  
                  <div className="mb-4 text-gray-400 text-sm">
                    <div className="flex items-center mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {relatedEvent.date}
                    </div>
                  </div>
                  
                  <Link
                    to={`/events/${relatedEvent.id}`}
                    className="text-tech-blue hover:text-purple-500 text-sm transition-colors"
                  >
                    View Details →
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;