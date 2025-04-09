import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => setShowAbout((prev) => !prev);

  return (
    <section
      id="about"
      className="bg-gray-100 py-20 px-6 text-gray-800 flex justify-center items-center text-center"
    >
      <div className="centered-form max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <button
          onClick={toggleAbout}
          className="mb-8 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {showAbout ? 'Hide About Me' : 'Show About Me'}
        </button>

        <AnimatePresence>
          {showAbout && (
            <motion.div
              key="about-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with a background in computer science and the U.S. Air Force. I specialize in building clean, scalable web applications using tools like React, Node.js, and Tailwind CSS. My experience as an F-16 mechanic and military team leader sharpened my attention to detail, discipline, and problem-solving — qualities I bring into every line of code.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive in fast-paced environments, love solving real-world problems through code, and enjoy collaborating with teams to bring ideas to life. My goal is to join a company where I can grow as a developer, contribute meaningfully, and build technology that makes a difference.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default React.memo(About);
