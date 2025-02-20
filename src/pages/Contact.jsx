import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navbar />
      
      <div className="px-4 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins">Kontakt</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>

        <div className="card-container">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-2xl text-gray"></i>
              <div>
                <h3 className="text-white font-medium font-poppins">Email</h3>
                <p className="text-gray font-poppins font-normal">wojciech.bezak19@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <i className="fas fa-phone text-2xl text-gray"></i>
              <div>
                <h3 className="text-white font-medium font-poppins">Telefon</h3>
                <p className="text-gray font-poppins font-normal">+48 737 861 773</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <i className="fab fa-github text-2xl text-gray"></i>
              <div>
                <h3 className="text-white font-medium font-poppins">GitHub</h3>
                <a 
                  href="https://github.com/bezi19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors font-poppins font-normal"
                >
                  github.com/bezi19
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 