import react, { useState, useEffect } from 'react'
import './App.css';
import Home from'./Sections/home'
import About from'./Sections/about'
import Projects from'./Sections/projects'
import Skills from'./Sections/skills'
import Contact from'./Sections/contact'


function App() {
const [visible,setVisible]= useState(false);
useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
    <div className={` overflow-x-hidden transition-opacity duration-1000 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
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