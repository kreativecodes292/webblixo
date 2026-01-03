import React from 'react'
import Home from "../sections/Home.jsx"
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Experience from '../sections/Experience.jsx'
import Contact from '../sections/Contact.jsx'
// import Projects from '../sections/Projects.jsx'
import Testimonials from '../sections/Testimonials.jsx'

const Main = () => {
  return (
    <div>
       <Home/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Experience/>
      <Testimonials/>
      <Contact/>     
    </div>
  )
}

export default Main
