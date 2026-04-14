import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = [
    {
      company: 'AIMANTRA',
      position: 'React Native Developer',
      duration: 'May 2025 – Present',
      location: 'Gurugram, Haryana',
      type: 'Full-time',
      color: 'from-blue-500 to-violet-500',
      bullets: [
        'Designed and built the complete customer-facing mobile app from prototype to production — clean, responsive UI across Android and iOS.',
        'Implemented product listing, cart, and checkout modules with real-time data sync and secure authentication flows.',
        'Guided the Super Admin team on backend data flow and RESTful API structure for seamless frontend-backend integration.',
        'Applied modular architecture and clean code practices, reducing onboarding time for new developers.',
      ],
      tags: ['React Native', 'Redux', 'Firebase', 'REST API'],
    },
    {
      company: 'Hyphun Technology Pvt. Ltd.',
      position: 'Software Engineer — Mobile',
      duration: 'Sep 2023 – Apr 2025',
      location: 'Bhilai, Chhattisgarh',
      type: 'Full-time',
      color: 'from-violet-500 to-pink-500',
      bullets: [
        'Reduced bugs by 45% by introducing Jest and React Native Testing Library (RNTL) across all projects.',
        'Improved app performance by 25% through Redux state management optimisation — fewer re-renders, faster API cycles.',
        'Cut cross-platform development time by 40% by building reusable shared component libraries for Android and iOS.',
        'Delivered 5 major production projects ahead of schedule; earned Star Performer Award for independent ownership.',
        'Developed and maintained inventory management and e-commerce apps aligned with Material Design principles.',
      ],
      tags: ['React Native', 'Redux Toolkit', 'Jest', 'RNTL', 'Firebase'],
    },
    {
      company: 'Conic Works Pvt. Ltd.',
      position: 'Android Developer',
      duration: 'Aug 2022 – Sep 2023',
      location: 'Bhilai, Chhattisgarh',
      type: 'Full-time',
      color: 'from-green-500 to-blue-500',
      bullets: [
        'Raised Play Store app rating from 3.2 to 4.5 by redesigning UI components and resolving critical UX issues.',
        'Integrated Razorpay payment gateway, Google/Facebook social logins, and in-app messaging — 3 major new feature modules.',
        'Diagnosed and resolved complex production bugs, significantly boosting app stability and crash-free session rate.',
        'Increased delivery speed by 30% through active agile sprint participation and improved estimation.',
      ],
      tags: ['Android', 'Java', 'React Native', 'Razorpay', 'Agile'],
    },
  ];

  const education = [
    {
      institution: 'Chhatrapati Shivaji Institute of Technology (CSVT), Durg',
      degree: 'B.Tech — Computer Science',
      duration: '2019 – 2023',
      detail: 'CGPA: 8.6 / 10.0',
      link: 'https://csitdurg.in/',
      color: 'from-blue-500 to-violet-500',
    },
    {
      institution: 'Oracle Public School, Dhamtari',
      degree: 'Higher Secondary (12th) — Science',
      duration: '2018 – 2019',
      detail: '73.2%',
      color: 'from-violet-500 to-pink-500',
    },
    {
      institution: 'Oracle Public School, Dhamtari',
      degree: 'Secondary School (10th)',
      duration: '2016 – 2017',
      detail: '85.5%',
      color: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-800 border border-gray-700 rounded-xl p-1 gap-1">
            {['work', 'education'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-200 ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                {tab === 'work' ? '💼 Work' : '🎓 Education'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'work' && (
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent hidden md:block" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="md:pl-20 relative">
                  <div className={`absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} hidden md:flex items-center justify-center shadow-lg`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                        <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                        <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                        <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">{exp.type}</span>
                        <span className="text-gray-500 text-xs">{exp.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-blue-400 mt-1 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="bg-gray-700/60 text-gray-300 px-2.5 py-1 rounded-md text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-800 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    {edu.link
                      ? <a href={edu.link} target="_blank" rel="noopener noreferrer"
                          className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent hover:underline`}>
                          {edu.institution}
                        </a>
                      : <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>{edu.institution}</p>
                    }
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <span className="text-gray-500 text-sm">{edu.duration}</span>
                    <span className="text-green-400 font-semibold text-sm">{edu.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Experience;
