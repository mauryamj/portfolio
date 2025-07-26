import react, { useState, useEffect } from 'react'
import './App.css';
import Home from'./Sections/home'
import About from'./Sections/about'
import Projects from'./Sections/projects'
import Skills from'./Sections/skills'
import Contact from'./Sections/contact'
import { FaGithub, FaLinkedin, FaRProject, FaSuitcase } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

function App() {

  return (
    <>
    <div className='overflow-x-hidden'>
      <Home />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
    </>
  )
}

export default App