import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='bg-slate-900 text-slate-300 h-full relative'>
      <Header />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contacts'>
        <Contacts />
      </section>
    </div>
  );
}

export default App;
