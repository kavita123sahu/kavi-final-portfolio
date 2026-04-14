import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const info = [
    { label: 'Name', value: 'Kavita Sahu' },
    { label: 'Location', value: 'Gurugram, Haryana' },
    { label: 'Role', value: 'React Native Developer' },
    { label: 'Experience', value: '2.5+ Years' },
    { label: 'Education', value: 'B.Tech — Computer Science' },
    { label: 'CGPA', value: '8.6 / 10.0' },
    { label: 'Languages', value: 'English, Hindi' },
    { label: 'Email', value: 'kavisahu1503@gmail.com' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-gray-800 border border-gray-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Info</h3>
              <div className="space-y-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold w-28 shrink-0 text-sm">{item.label}</span>
                    <span className="text-gray-400 text-sm leading-relaxed">— {item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700 flex gap-3">
                <a href="https://www.linkedin.com/in/kavita-sahu-5821441bb/" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/kavita123sahu" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-colors">
                  GitHub
                </a>
                {/* <a href="https://kavis-port-folio.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-colors">
                  Portfolio
                </a> */}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-gray-800 border border-gray-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">My Story</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  I'm a React Native Developer with <span className="text-blue-400 font-semibold">2.5+ years of hands-on experience</span> building
                  scalable, high-performance mobile applications for Android and iOS. I've taken apps from prototype to Play Store — end to end.
                </p>
                <p>
                  My journey started as an Android Developer at Conic Works where I raised an app's Play Store rating from
                  <span className="text-blue-400 font-semibold"> 3.2 to 4.5</span> by redesigning key UI flows and integrating
                  Razorpay, social logins, and messaging. That hands-on ownership mindset stuck with me.
                </p>
                <p>
                  At Hyphun Technology, I introduced Jest and RNTL testing frameworks that reduced bugs by
                  <span className="text-blue-400 font-semibold"> 45%</span>, optimised Redux state management to boost performance by
                  <span className="text-blue-400 font-semibold"> 25%</span>, and delivered 5 major projects ahead of deadlines — earning the
                  <span className="text-blue-400 font-semibold"> Star Performer Award</span>.
                </p>
                <p>
                  Currently at AIMANTRA (Gurugram), building the full customer-facing mobile app — product listing, cart, checkout, real-time auth —
                  from scratch, while also guiding backend team on API architecture.
                </p>
              </div>

              {/* Key achievements */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: '🏆', text: 'Star Performer Award' },
                  { icon: '📱', text: 'Live on Play Store' },
                  { icon: '🚀', text: '5 Projects on Time' },
                  { icon: '🎓', text: 'B.Tech CGPA 8.6' },
                ].map((a) => (
                  <div key={a.text} className="flex items-center gap-2 bg-gray-700/50 rounded-lg p-3">
                    <span className="text-lg">{a.icon}</span>
                    <span className="text-xs text-gray-300 font-medium">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
