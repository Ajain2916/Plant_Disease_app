import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Scroll, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:aj29162460@gmail.com?subject=${encodeURIComponent(formData.subject || 'LeafGuard AI Contact')}&body=${encodeURIComponent(emailBody)}`;
    
    try {
      window.location.href = mailtoLink;
      toast({
        title: "Message prepared!",
        description: "Your email client should open with the message ready to send."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open email client. Please copy the details manually.",
        variant: "destructive"
      });
      console.error("Failed to open mailto link:", error);
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const teamMembers = [
    {
      name: "Sampark Bhol",
      title: "Keeper of Code",
      github: "https://github.com/samparkbhol"
    },
    {
      name: "Akshat Jain",
      title: "Master Artificer",
      github: "https://github.com/akshatjain",
      email: "aj29162460@gmail.com"
    },
    {
      name: "Shreyas K",
      title: "Guardian of Logic",
      github: "https://github.com/shreyask"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-amber-900 via-yellow-900 to-amber-800 relative overflow-hidden">
      {/* Medieval texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 8-12 8-12s12 8 12 8-8 12-8 12-12-8-12-8z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <Scroll className="h-12 w-12 text-amber-200" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-amber-100 text-shadow-lg tracking-wider">
              Contact the Guild
            </h1>
            <Feather className="h-12 w-12 text-amber-200" />
          </div>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto font-serif italic">
            Seek ye counsel from the LeafGuard scribes? Requirest thou assistance with thy digital gardens? 
            Send forth thy missive and we shall respond with haste!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200 border-4 border-amber-800 rounded-lg shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Decorative scroll edges */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-amber-900 to-transparent opacity-50"></div>
          
          <div className="relative p-8 m-4">
            <h2 className="font-serif text-3xl font-bold text-amber-900 text-center mb-8 text-shadow-sm">
              📜 Scribe thy Message 📜
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-amber-900 mb-2 font-serif tracking-wide">
                    🏷️ Thy Noble Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-700 rounded-md text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 font-serif shadow-inner"
                    placeholder="Sir/Lady..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-amber-900 mb-2 font-serif tracking-wide">
                    📮 Electronic Scroll Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-700 rounded-md text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 font-serif shadow-inner"
                    placeholder="thy.ravens@castle.realm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-amber-900 mb-2 font-serif tracking-wide">
                  📋 Matter of Correspondence
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-700 rounded-md text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 font-serif shadow-inner"
                  placeholder="Regarding what business dost thou write?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-amber-900 mb-2 font-serif tracking-wide">
                  📝 Thy Sacred Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-700 rounded-md text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 resize-none font-serif shadow-inner"
                  placeholder="Speak thy mind, noble visitor. What assistance dost thou require from our guild of digital guardians?"
                />
              </div>
              <div
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-amber-100 font-bold py-4 text-lg border-2 border-amber-900 shadow-lg transform hover:scale-105 transition-all duration-200 font-serif tracking-wide cursor-pointer text-center rounded-md"
              >
                <Send className="mr-2 h-5 w-5" />
                🕊️ Dispatch thy Message
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200 border-4 border-amber-800 rounded-lg shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Decorative scroll edges */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-amber-900 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-amber-900 to-transparent opacity-50"></div>
          
          <div className="relative p-8 m-4">
            <h2 className="font-serif text-3xl font-bold text-center text-amber-900 mb-8 text-shadow-sm">
              ⚔️ The Guild Masters ⚔️
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg border-2 border-amber-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-3 text-4xl">
                    {index === 0 ? '🛡️' : index === 1 ? '⚒️' : '🗡️'}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-amber-700 italic mb-3 font-serif">{member.title}</p>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-700 hover:bg-amber-800 text-amber-100 px-4 py-2 rounded-md transition-colors text-sm font-serif font-semibold shadow-md hover:shadow-lg"
                  >
                    📚 View Codex
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 p-4 bg-amber-100 rounded-lg border border-amber-600">
              <p className="text-amber-800 font-serif italic">
                "United in code, bound by wisdom, guardians of the digital realm."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
