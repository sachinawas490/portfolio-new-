import React from 'react';

function Contacts() {
  const contacts = [
    { name: 'GitHub', url: 'https://github.com/sachinawas490' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sachin-awasthi-5678b621b/' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', url: 'mailto:awasthisachin490@gmail.com' }
  ];

  return (
    <div className='flex flex-col items-center justify-center h-auto py-8 mt-10 mx-4 md:mx-20 px-4'>
      <div className='text-center text-3xl font-semibold text-slate-800 dark:text-white mb-8'>
        Contact Me
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {contacts.map(contact => (
          <div key={contact.name} className='flex items-center space-x-2'>
            <a 
              href={contact.url} 
              className='text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 underline' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              {contact.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
