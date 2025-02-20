import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    project.thumbnail,
    ...Array(project.imagesCount || 0).fill(null).map((_, index) => 
      `/portfolio/projects/${project.projectId}/images/image${index + 1}.png`
    )
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-[#0a0f18] rounded-lg w-[95%] max-w-7xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-gray text-lg max-w-3xl">{project.description}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray hover:text-white transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          <div className="relative my-8 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={images[currentImageIndex]}
                alt={`${project.title} image ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <i className="fas fa-chevron-left text-xl"></i>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <i className="fas fa-chevron-right text-xl"></i>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.isHavingLink && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                <i className="fas fa-external-link-alt"></i>
                <span>Zobacz projekt</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="bg-black/40 rounded-lg overflow-hidden group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="aspect-video relative">
        <img 
          src={project.thumbnail || `/portfolio/projects/${project.projectId}/thumbnail.png`}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Zobacz więcej
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}

function ProjectSection({ title, projects, onProjectClick }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.projectId} 
            project={project} 
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navbar />
      
      <div className="px-4 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Projekty</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>

        <ProjectSection 
          title="Projekty IT" 
          projects={projects.it}
          onProjectClick={setSelectedProject}
        />
        
        <ProjectSection 
          title="Mniejsze Projekty IT" 
          projects={projects.smallIt}
          onProjectClick={setSelectedProject}
        />
        
        <ProjectSection 
          title="Projekty Graficzne" 
          projects={projects.graphic}
          onProjectClick={setSelectedProject}
        />
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;