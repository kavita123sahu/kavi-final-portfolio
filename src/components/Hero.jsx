import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const roles = ['React Native Developer', 'Mobile App Engineer', 'Android Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = displayed.length;
    if (typing) {
      if (i < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>
            <motion.h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Kavita Sahu
              </span>
            </motion.h1>
            <div className="h-10 mb-6">
              <span className="text-2xl font-semibold text-gray-300">
                {displayed}<span className="border-r-2 border-blue-400 ml-0.5 animate-pulse">&nbsp;</span>
              </span>
            </div>
            <motion.p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Building high-performance cross-platform mobile apps with React Native.
              Proven record of shipping production apps to Play Store with measurable impact.
            </motion.p>
            <motion.div className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <Link to="contact" spy smooth offset={-70} duration={500}>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                  Contact Me
                </button>
              </Link>
              <Link to="projects" spy smooth offset={-70} duration={500}>
                <button className="px-6 py-3 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                  View Projects
                </button>
              </Link>

  {/* 
                <a    href="/Kavita_Resume_Final.pdf" download
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Resume
                </a> */}


            </motion.div>
            <motion.div className="flex items-center gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <span className="text-gray-500 text-sm">Find me on</span>
              {[
                { href: 'https://www.linkedin.com/in/kavita-sahu-5821441bb/', label: 'LinkedIn', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' },
                { href: 'https://github.com/kavita123sahu', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:scale-110" title={s.label}>
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="lg:w-1/2 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-blue-700 p-1">
                <img src="/Kavita-Photo.jpeg" alt="Kavita Sahu"
                  className="w-full h-full object-cover rounded-2xl border-2 border-gray-900" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 shadow-xl">
                <div className="text-2xl font-bold text-blue-400">2.5+</div>
                <div className="text-xs text-gray-400">Years Exp.</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { v: '10+', l: 'Apps Shipped' },
                { v: '45%', l: 'Bug Reduction' },
                { v: '25%', l: 'Perf Boost' },
                { v: '3.2→4.5', l: 'Play Store Rating' },
              ].map((s) => (
                <div key={s.l} className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-blue-400">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
