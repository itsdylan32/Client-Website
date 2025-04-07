import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gray-100 text-gray-800 flex justify-center items-center text-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate and self-driven full-stack developer with a strong foundation in both front-end and back-end technologies.
          With a background in computer science and hands-on experience building responsive, user-focused web apps, I specialize in creating clean, scalable solutions using tools like React, Node.js, and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed mt-6">
          I thrive in fast-paced environments, love solving real-world problems through code, and enjoy collaborating with teams to bring ideas to life. My goal is to join a company where I can grow as a developer, contribute meaningfully, and build technology that makes a difference.
        </p>
      </div>
    </section>
  );
};

export default About;
