import React from "react"
import ProjectCard from "../components/ProjectCard"


const Projects = () => {
  return (
    <section id="projects" className="flex flex-wrap lg:flex-nowrap pt-16">
      <ProjectCard city="Hangzhou, China" service="project management" image="gallery-img-1.jpg"/>
      <ProjectCard city="Los Angeles, United States" service="architectural services" image="gallery-img-2.jpg"/>
      <ProjectCard city="Montreal,Canada" service="pre construction" image="gallery-img-3.jpg"/>
      <ProjectCard city="Reggio Emilia, Italy" service="facade engineering" image="gallery-img-4.jpg"/>

    </section>
  )
}

export default Projects
