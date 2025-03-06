// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   rollNumber: '',
   department: '',
   yearOfStudy: '',
   contactNumber: '',
   eventsInterested: []
 });
 
 const [formSubmitted, setFormSubmitted] = useState(false);
 
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };
 
 const handleCheckboxChange = (e) => {
   const { value, checked } = e.target;
   
   if (checked) {
     setFormData(prev => ({
       ...prev,
       eventsInterested: [...prev.eventsInterested, value]
     }));
   } else {
     setFormData(prev => ({
       ...prev,
       eventsInterested: prev.eventsInterested.filter(event => event !== value)
     }));
   }
 };
 
 const handleSubmit = (e) => {
   e.preventDefault();
   // Here you would typically send the registration data to your backend
   console.log(formData);
   setFormSubmitted(true);
 };
 
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
           Register for Tech Fest '25
         </h1>
         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           Fill out the form below to register for Tech Fest '25. After registration, you can sign up for individual events.
         </p>
       </motion.div>

       {formSubmitted ? (
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="max-w-2xl mx-auto bg-tech-darker p-8 rounded-xl border border-tech-blue/30 text-center"
         >
           <div className="text-6xl mb-6">🎉</div>
           <h2 className="text-2xl font-bold mb-4 text-tech-blue">Registration Successful!</h2>
           <p className="text-gray-300 mb-6">
             Thank you for registering for Tech Fest '25. We've sent a confirmation email with more details.
           </p>
           <div className="flex justify-center space-x-4">
             <Link
               to="/events"
               className="px-6 py-3 rounded-full bg-tech-blue text-white hover:bg-tech-blue/90 transition-colors"
             >
               Explore Events
             </Link>
             <Link
               to="/"
               className="px-6 py-3 rounded-full bg-tech-darker border border-tech-blue text-tech-blue hover:bg-tech-blue/10 transition-colors"
             >
               Back to Home
             </Link>
           </div>
         </motion.div>
       ) : (
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="max-w-3xl mx-auto bg-tech-darker rounded-xl p-8 border border-gray-800"
         >
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-gray-300 mb-2">Full Name</label>
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
                 <label className="block text-gray-300 mb-2">Email</label>
                 <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   required
                   className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                 />
               </div>
               
               <div>
                 <label className="block text-gray-300 mb-2">Roll Number</label>
                 <input
                   type="text"
                   name="rollNumber"
                   value={formData.rollNumber}
                   onChange={handleInputChange}
                   required
                   className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                 />
               </div>
               
               <div>
                 <label className="block text-gray-300 mb-2">Department</label>
                 <select
                   name="department"
                   value={formData.department}
                   onChange={handleInputChange}
                   required
                   className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                 >
                   <option value="">Select Department</option>
                   <option value="CSIT">Computer Science &amp; IT</option>
                   <option value="EE">Electrical Engineering</option>
                   <option value="ME">Mechanical Engineering</option>
                   <option value="CE">Civil Engineering</option>
                   <option value="Other">Other</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-gray-300 mb-2">Year of Study</label>
                 <select
                   name="yearOfStudy"
                   value={formData.yearOfStudy}
                   onChange={handleInputChange}
                   required
                   className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                 >
                   <option value="">Select Year</option>
                   <option value="1">1st Year</option>
                   <option value="2">2nd Year</option>
                   <option value="3">3rd Year</option>
                   <option value="4">4th Year</option>
                   <option value="Alumni">Alumni</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-gray-300 mb-2">Contact Number</label>
                 <input
                   type="tel"
                   name="contactNumber"
                   value={formData.contactNumber}
                   onChange={handleInputChange}
                   required
                   className="w-full py-2 px-4 rounded bg-tech-dark border border-gray-700 text-white focus:outline-none focus:border-tech-blue"
                 />
               </div>
             </div>
             
             <div>
               <label className="block text-gray-300 mb-3">Events you're interested in</label>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                 <div className="flex items-center">
                   <input
                     type="checkbox"
                     id="hackathon"
                     name="eventsInterested"
                     value="Hackathon"
                     onChange={handleCheckboxChange}
                     className="mr-2 h-4 w-4 text-tech-blue rounded focus:ring-tech-blue bg-tech-dark border-gray-700"
                   />
                   <label htmlFor="hackathon" className="text-gray-300">Hackathons</label>
                 </div>
                 <div className="flex items-center">
                   <input
                     type="checkbox"
                     id="workshops"
                     name="eventsInterested"
                     value="Workshops"
                     onChange={handleCheckboxChange}
                     className="mr-2 h-4 w-4 text-tech-blue rounded focus:ring-tech-blue bg-tech-dark border-gray-700"
                   />
                   <label htmlFor="workshops" className="text-gray-300">Workshops</label>
                 </div>
                 <div className="flex items-center">
                   <input
                     type="checkbox"
                     id="competitions"
                     name="eventsInterested"
                     value="Competitions"
                     onChange={handleCheckboxChange}
                     className="mr-2 h-4 w-4 text-tech-blue rounded focus:ring-tech-blue bg-tech-dark border-gray-700"
                   />
                   <label htmlFor="competitions" className="text-gray-300">Competitions</label>
                 </div>
                 <div className="flex items-center">
                   <input
                     type="checkbox"
                     id="talks"
                     name="eventsInterested"
                     value="Talks"
                     onChange={handleCheckboxChange}
                     className="mr-2 h-4 w-4 text-tech-blue rounded focus:ring-tech-blue bg-tech-dark border-gray-700"
                   />
                   <label htmlFor="talks" className="text-gray-300">Tech Talks</label>
                 </div>
               </div>
             </div>
             
             <div className="border-t border-gray-800 pt-6">
               <div className="flex items-start mb-6">
                 <div className="flex items-center h-5">
                   <input
                     id="terms"
                     type="checkbox"
                     required
                     className="h-4 w-4 text-tech-blue rounded focus:ring-tech-blue bg-tech-dark border-gray-700"
                   />
                 </div>
                 <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                   I agree to the <a href="#" className="text-tech-blue hover:underline">Terms and Conditions</a> and <a href="#" className="text-tech-blue hover:underline">Privacy Policy</a>
                 </label>
               </div>
               
               <div className="flex justify-end">
                 <button
                   type="submit"
                   className="px-6 py-3 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-tech-blue/20 transition-all"
                 >
                   Register for Tech Fest
                 </button>
               </div>
             </div>
           </form>
         </motion.div>
       )}
     </div>
   </div>
 );
};

export default RegisterPage;