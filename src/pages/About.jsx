import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navbar />
      
      <div className="px-4 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins">O mnie</h1>
          <div className="h-1 w-24 bg-blue-500 rounded"></div>
        </div>

        <div>
          <p className="text-gray font-poppins font-normal leading-relaxed">
            Jestem studentem informatyki na PJATK w Gdańsku, specjalizującym się w inżynierii gier komputerowych. 
            Moje zainteresowania obejmują tworzenie gier, programowanie oraz projektowanie interfejsów użytkownika.
            W wolnym czasie tworzę grafiki komputerowe oraz zajmuję się produkcją muzyki.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 