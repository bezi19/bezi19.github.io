import React from 'react';
import Navbar from '../components/Navbar';

function Projects() {
  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navbar />
      
      <div className="px-4 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Projekty</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* projekt */}
          <div className="bg-black/40 rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Project thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Zobacz więcej
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Nazwa Projektu</h3>
              <p className="text-gray">Krótki opis projektu i wykorzystanych technologii.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;