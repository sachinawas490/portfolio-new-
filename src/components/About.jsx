import React from "react";

function About() {
  return (
    <div className="flex flex-col border-2 border-slate-800 h-auto  py-8 mt-10 mx-4 md:mx-20 px-[10%] shadow-md shadow-slate-600">
      <div className="text-3xl font-bold mb-6">About Me</div>
      <div className="mb-4">
        Hello! I'm a passionate Full Stack Developer with expertise in the MERN
        stack (MongoDB, Express.js, React.js, Node.js) and a strong knowledge of
        Data Structures and Algorithms (DSA) in C++. With a solid foundation in
        both frontend and backend development, I enjoy building scalable and
        efficient web applications that provide great user experiences.
      </div>
      <div className="mb-4">
        Currently, I am exploring React Native for web development to expand my
        skill set and create versatile applications that run seamlessly on
        multiple platforms. My goal is to continuously learn and stay updated
        with the latest technologies to deliver high-quality solutions.
      </div>
      <div>
        I thrive on tackling challenging problems and collaborating with teams
        to create innovative solutions. When I'm not coding, you can find me
        exploring new technologies, reading tech blogs, or hiking in the great
        outdoors.
      </div>
    </div>
  );
}

export default About;
