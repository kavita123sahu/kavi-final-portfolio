import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ClikShop — Online Book Store',
      category: 'mobile',
      image: '/clikshop1.jpeg',
      description: 'Full-featured e-commerce app for book sales with browsing, cart, Razorpay checkout, and delivery tracking. Live on Google Play Store.',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Razorpay', 'MySQL'],
      playStore: 'https://play.google.com/store/apps/details?id=com.bansal.clickshop',
      github: null,
      screenshots: ['/clikshop1.jpeg', '/clikshop2.jpeg', '/clikshop3.jpeg'],
      longDescription: 'ClikShop is a complete e-commerce mobile app for online book sales, live on Google Play Store. Built with React Native, it features product browsing, cart management, secure Razorpay payment integration, real-time delivery tracking, and Firebase-based authentication. Supports both Android and iOS.',
    },
    {
      id: 2,
      title: 'IMEIApp — Inventory Management',
      category: 'mobile',
      image: '/imei1.jpeg',
      description: 'Real-time IMEI-based product scanning system with vendor management, structured inventory tracking and analytics.',
      technologies: ['React Native', 'PHP', 'MySQL', 'REST API'],
      playStore: null,
      github: 'https://github.com/kavita123sahu/IMEiBook',
      apk: 'https://drive.google.com/file/d/1MJm5ZPpg5kal43mrZawtV_5H_-4i4RTL/view?usp=sharing',
      screenshots: ['/imei1.jpeg', '/imei2.jpeg', '/imei3.jpeg'],
      longDescription: 'A robust inventory management system with real-time barcode/IMEI scanning, vendor coordination, and analytics. Designed for warehouses and retail businesses to ensure accurate stock tracking, faster processing, and improved operational efficiency.',
    },
    {
      id: 3,
      title: 'Crico-Scorer — Cricket Scoring',
      category: 'mobile',
      image: '/imei1.jpeg',
      description: 'Real-time cricket scoring application with live player stats, team management, and match history records.',
      technologies: ['React Native', 'PHP', 'MySQL', 'CSS'],
      playStore: null,
      github: 'https://github.com/kavita123sahu/Scoring2.0',
      screenshots: ['/imei1.jpeg'],
      longDescription: 'A real-time cricket scoring app with live match updates, player statistics, team management, and complete match history. Built with React Native frontend and PHP REST APIs with MySQL backend for structured scorecards.',
    },
    {
      id: 4,
      title: 'Life Care — Health App',
      category: 'mobile',
      image: '/lifecare1.jpeg',
      description: 'Health and wellness mobile app with doctor consultations, appointment booking, medicine orders, and health record management.',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'REST API'],
      playStore: null,
      github: null,
      screenshots: ['/lifecare1.jpeg'],
      longDescription: 'Life Care is a comprehensive health and wellness app offering online doctor consultations, appointment bookings, medicine orders, and health record management. Features real-time health tracking and location-based services.',
    },
    {
      id: 5,
      title: 'Milk Supply — Dairy Management',
      category: 'mobile',
      image: '/milk1.jpeg',
      description: 'Smart dairy app for managing daily milk delivery, customer subscriptions, billing, and real-time order tracking.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Google Maps API'],
      playStore: null,
      github: null,
      screenshots: ['/milk1.jpeg', '/milk2.jpeg', '/milk3.jpeg'],
      longDescription: 'Milk Supply streamlines dairy delivery operations — managing customer subscriptions, tracking daily deliveries, generating bills, and maintaining records. Features real-time order updates, payment tracking, and customer communication tools.',
    },
  ];

  const filtered = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-800 border border-gray-700 rounded-xl p-1 gap-1">
            {['all', 'mobile'].map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-200 ${activeCategory === cat ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                {cat === 'all' ? 'All Projects' : '📱 Mobile Apps'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-gray-800 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-gray-700 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  Mobile App
                </div>
                {project.playStore && (
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    ▶ Play Store
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors">
                    View Details
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-2 bg-green-700 hover:bg-green-600 text-white rounded-lg transition-colors text-xs font-bold flex items-center">▶</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}>
              <motion.div className="bg-gray-800 border border-gray-700 rounded-2xl max-w-2xl w-full relative"
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 text-sm transition-colors z-10">
                  ✕
                </button>
                <div className="h-48 bg-gray-700 rounded-t-2xl overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedProject.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-lg text-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.playStore && (
                      <a href={selectedProject.playStore} target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors text-sm">
                        View on Play Store
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors text-sm">
                        GitHub Repo
                      </a>
                    )}
                    {selectedProject.apk && (
                      <a href={selectedProject.apk} target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm">
                        Download APK
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Projects;
