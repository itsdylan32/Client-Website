import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, image, description, tech, github, live }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((tag, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
