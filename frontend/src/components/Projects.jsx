import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Rocket Game',
    image: '/images/rocket-game.png',
    description: 'Fly a rocket through obstacles in space using physics-based controls.',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/itsdylan32/',
    live: 'https://your-live-demo.com',
  },
  {
    title: 'Marble Balance',
    image: '/images/marble-game.png',
    description: 'Navigate a marble across platforms by tilting the world.',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/itsdylan32/',
  },
];

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false); // 🔽 Default to hidden

  const toggleProjects = () => setShowProjects((prev) => !prev);

  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <div className="centered-form max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <button
          onClick={toggleProjects}
          className="mb-8 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {showProjects ? 'Hide Projects' : 'Show Projects'}
        </button>

        <AnimatePresence>
          {showProjects && (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
