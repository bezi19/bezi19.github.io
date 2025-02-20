import React from 'react';
import Navbar from '../components/Navbar';
import { technologies } from '../data/technologies';

function Technologies() {
  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navbar />
      
      <div className="px-4 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Technologie</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="card-container group">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-16 h-16 flex-shrink-0 bg-black/40 rounded-lg p-2 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                  <span className="text-sm text-gray">{tech.category}</span>
                </div>
              </div>
              <p className="text-gray leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies; 