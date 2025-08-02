import react, { useState, useEffect } from 'react'
import './App.css';
import Home from'./Sections/home'
import About from'./Sections/about'
import Projects from'./Sections/projects'
import Skills from'./Sections/skills'
import Contact from'./Sections/contact'
import Certificates from './Sections/certificate';
function App() {
  return (
    <>
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Certificates/>
      <Skills/>
      <Contact/>
      </div>
    </>
  )
}

export default App