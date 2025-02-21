import React, { useState, useEffect } from 'react';

function SideNavbar() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', title: 'O mnie' },
    { id: 'projectSection', title: 'Ukończone projekty' },
    { id: 'tres', title: 'sekcja tres' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-6">
        {sections.map(section => (
          <div 
            key={section.id}
            className="flex items-center justify-end w-[200px] group cursor-pointer"
            onClick={() => scrollToSection(section.id)}
          >
            <span className={`text-sm font-medium transition-all duration-300 text-right ${
              activeSection === section.id 
                ? 'text-blue-500 opacity-100' 
                : 'text-gray-400 opacity-0 group-hover:opacity-100'
            }`}>
              {section.title}
            </span>
            <div 
              className={`ml-2 w-4 h-4 rounded-full transition-all duration-300 flex-shrink-0 ${
                activeSection === section.id 
                  ? 'w-8 bg-blue-500' 
                  : 'bg-gray-500 group-hover:bg-blue-400'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar; 