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

  // Zamykanie modalu przy kliknięciu w tło
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#0a0f18] rounded-lg w-[95%] max-w-7xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="w-full pr-8">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">{project.title}</h2>
              <p className="text-gray text-lg font-poppins font-normal">{project.description}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray hover:text-blue-500 transition-colors cursor-pointer flex-shrink-0"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          <div className="relative my-8">
            <div className="relative bg-black/20 rounded-lg flex items-center justify-center min-h-[200px] md:min-h-[400px]">
              <img 
                src={images[currentImageIndex]}
                alt={`${project.title} image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[60vh] object-contain rounded-lg"
              />
            </div>
            
            {project.imagesCount > 0 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-blue-500/50 text-white transition-colors cursor-pointer flex items-center justify-center"
                >
                  <i className="fas fa-chevron-left text-xl"></i>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-blue-500/50 text-white transition-colors cursor-pointer flex items-center justify-center"
                >
                  <i className="fas fa-chevron-right text-xl"></i>
                </button>
              </>
            )}
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
      className="bg-black/40 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300
        border border-[var(--color-neon)] shadow-[0_0_15px_rgba(59,130,246,0.3)]
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:border-opacity-70"
      onClick={() => onClick(project)}
    >
      <div className="aspect-video relative">
        <img 
          src={project.thumbnail || `/portfolio/projects/${project.projectId}/thumbnail.png`}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="px-6 py-2 bg-[var(--color-neon)] text-white rounded hover:bg-[var(--color-neon-hover)] transition-colors cursor-pointer">
            Zobacz więcej
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 font-poppins group-hover:text-[var(--color-neon)] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray line-clamp-2 font-poppins font-normal">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function ProjectSection({ title, projects, onProjectClick }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 font-poppins">{title}</h2>
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
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins">Projekty</h1>
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