import React from 'react';

const About = () => {
  return (
    <div>
    <section
      id="about"
      className="h-screen bg-gray-100 text-gray-800 flex justify-center items-center text-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
        I'm a passionate full-stack developer with a background in computer science and the U.S. Air Force. I specialize in building clean, scalable web applications using tools like React, Node.js, and Tailwind CSS. My experience as an F-16 mechanic and military team leader sharpened my attention to detail, discipline, and problem-solving — qualities I bring into every line of code.
        </p>
        <p className="text-lg leading-relaxed mt-6">
          I thrive in fast-paced environments, love solving real-world problems through code, and enjoy collaborating with teams to bring ideas to life. My goal is to join a company where I can grow as a developer, contribute meaningfully, and build technology that makes a difference.
        </p>
      </div>
    </section>
    </div>
  );
};

export default React.memo(About);
