import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      name: 'Mobile Development',
      icon: '📱',
      skills: ['React Native', 'Android SDK', 'iOS Development', 'NativeWind', 'Android Studio', 'Play Store Deploy', 'App Store Deploy'],
    },
    {
      name: 'Languages & Frameworks',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'React.js', 'Next.js'],
    },
    {
      name: 'State & Backend',
      icon: '⚙️',
      skills: ['Redux Toolkit', 'Context API', 'React Hooks', 'REST APIs', 'Firebase', 'MySQL', 'PHP'],
    },
    {
      name: 'Tools & Practices',
      icon: '🛠️',
      skills: ['Git & GitHub', 'Docker', 'Linux', 'Jest', 'RNTL', 'Agile/Scrum', 'Razorpay SDK'],
    },
  ];

  const proficiencies = [
    { name: 'React Native', level: 92 },
    { name: 'JavaScript', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'Firebase', level: 82 },
    { name: 'React.js', level: 80 },
    { name: 'TypeScript', level: 72 },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Skill chips */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="bg-gray-700/60 hover:bg-blue-600/20 border border-gray-600/50 hover:border-blue-500/40 text-gray-300 hover:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Proficiency bars */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-gray-800 border border-gray-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-base font-semibold text-white mb-8">Core Proficiency</h3>
              <div className="space-y-6">
                {proficiencies.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * i, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra badges */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-500 text-xs mb-3">Also familiar with</p>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'Dart', 'C', 'C++', 'Vercel', 'CodePush', 'Axios'].map((s) => (
                    <span key={s} className="bg-gray-700/40 text-gray-400 px-2.5 py-1 rounded-md text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
