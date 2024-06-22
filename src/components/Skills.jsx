import React from 'react';

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Daisy UI",
    "Node JS", "Express JS", "Mongoose", "MongoDB", "MySQL", "OOP",
    "Python", "React Native", "C++"
  ];

  return (
    <div className='border-2 border-slate-800 h-auto  py-8 mt-10 mx-4 md:mx-20 px-[10%] shadow-md shadow-slate-600 '>
      <div className='text-center text-3xl font-semibold text-slate-800 dark:text-white mb-8'>
        My Skills
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        {skills.map(skill => (
          <div key={skill} className='bg-slate-700 text-white px-5 py-2 rounded-md shadow-md  transition-colors duration-300'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
