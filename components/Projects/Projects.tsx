import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="h-screen">
      {/* Project Card */}
      <h1 className="text-xl">Projects I have done</h1>

      <ProjectCard />
      <ProjectCard />
    </section>
  )
}
