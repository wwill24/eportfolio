import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'
import WorkCard2 from '../components/WorkCard2'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="My Most Recent Works"/>
      <WorkCard/>
      <WorkCard2/>
      <Footer />
    </div>
  )
}

export default Projects