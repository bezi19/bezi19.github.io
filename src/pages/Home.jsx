import React from 'react'
import '../assets/styles.css'
import avatar from '../assets/avatar.png'
import Navbar from '../components/Navbar'
import HireStatus from '../components/HireStatus'
import { technologies } from '../data/technologies'
import SideNavbar from '../components/SideNavbar'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

function Home() {
  const totalProjects = Object.values(projects).reduce((sum, category) => 
    sum + category.length, 0
  );

  return (
    <div className="relative min-h-screen overflow-y-auto">
      <Navbar />
      <SideNavbar />
      
      {/* Pierwsza sekcja */}
      <section id="about" className="min-h-screen bg-[#04070a]">
        <div className="content-container">
          <div className="flex flex-col gap-8 w-full px-4 md:w-3/4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="card-container w-full md:w-1/2">
                <div className="flex flex-col sm:flex-row gap-6 h-full">
                  <div className="flex justify-center sm:items-center flex-shrink-0 sm:w-1/4">
                    <img 
                      src={avatar} 
                      alt="Profile avatar" 
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0 sm:w-3/4">
                    <div className="pb-4">
                      <h1 className="heading-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words font-poppins font-bold">
                        Wojciech Bezak
                      </h1>
                      <div className="mt-2">
                        <HireStatus status="AVAILABLE" />
                      </div>
                    </div>
                    <div className="divider mb-4"></div>

                    <div className="flex flex-col lg:flex-row flex-wrap gap-3 mt-4">
                      <p className="flex items-center gap-2 text-gray min-w-0 text-sm sm:text-base w-full lg:w-auto font-poppins font-normal">
                        <i className="fas fa-envelope w-5 flex-shrink-0"></i>
                        <span className="truncate">wojciech.bezak19@gmail.com</span>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <p className="flex items-center gap-2 text-gray text-sm sm:text-base font-poppins font-normal">
                          <i className="fas fa-phone w-5 flex-shrink-0"></i>
                          <span>+48 737 861 773</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="divider mb-4"></div>
                      <div className="flex gap-4">
                        <a 
                          href="https://www.linkedin.com/in/wojciech-bezak/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray hover:text-blue-500 transition-colors"
                        >
                          <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a 
                          href="https://www.instagram.com/prodbybezi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray hover:text-blue-500 transition-colors"
                        >
                          <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a 
                          href="https://github.com/bezi19"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray hover:text-blue-500 transition-colors"
                        >
                          <i className="fab fa-github text-2xl"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-container w-full md:w-1/2">
                <h2 className="text-xl font-bold text-white mb-4 font-poppins">Technologie</h2>
                <div className="overflow-x-auto hide-scrollbar">
                  <div className="flex gap-4 pb-2 infinite-scroll-container">
                    {technologies.map((tech, index) => (
                      <div 
                        key={`original-${index}`} 
                        className="w-20 h-20 bg-black/40 rounded-lg p-4 flex-shrink-0 flex items-center justify-center group hover:bg-black/60 transition-colors"
                      >
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          title={tech.name}
                        />
                      </div>
                    ))}
                    {technologies.map((tech, index) => (
                      <div 
                        key={`clone-${index}`} 
                        className="w-20 h-20 bg-black/40 rounded-lg p-4 flex-shrink-0 flex items-center justify-center group hover:bg-black/60 transition-colors"
                      >
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          title={tech.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="card-container md:flex-[2]">
              <h2 className="text-xl font-bold text-white mb-4 font-poppins">O mnie</h2>
                <p className="text-gray font-poppins font-normal">
                Jestem studentem informatyki na PJATK w Gdańsku, specjalizującym się w inżynierii gier komputerowych. 
                Moje zainteresowania obejmują tworzenie gier, programowanie oraz projektowanie interfejsów użytkownika.
                W wolnym czasie tworzę grafiki komputerowe oraz zajmuję się produkcją muzyki.
                </p>
              </div>
              
              <div className="card-container flex-1">
                <h2 className="text-xl font-bold text-white mb-4 font-poppins">Wykształcenie</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-graduation-cap mt-1 text-gray"></i>
                    <div>
                      <h3 className="text-white font-medium">Polsko-Japońska Akademia Technik Komputerowych w Gdańsku</h3>
                      <p className="text-gray text-sm font-poppins font-light">Inżynierskie - Informatyka</p>
                      <p className="text-gray text-sm font-poppins font-light">specjalizacja: Inżynieria gier komputerowych</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray font-poppins font-light">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="text-sm text-gray font-poppins font-light">2021 - teraz</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <i className="fas fa-school mt-1 text-gray"></i>
                    <div>
                      <h3 className="text-white font-medium">Liceum Ogólnokształcące imienia W. Broniewskiego w Świdwinie</h3>
                      <p className="text-gray text-sm font-poppins font-light">egzamin maturalny</p>
                      <p className="text-gray text-sm font-poppins font-light">Profil matematyczno-językowy</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray font-poppins font-light">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="text-sm text-gray font-poppins font-light">2018 - 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Druga sekcja */}
      <section id="projectSection" className="min-h-screen bg-[var(--color-bg-secondary)] flex items-center justify-center">
        <div className="px-4 w-full">
          <div className="flex justify-center items-center">
            <div className="card-container w-full md:w-1/2 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-7xl sm:text-8xl font-bold text-blue-500 font-poppins">
                    {totalProjects}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-poppins mb-4">
                  Ukończonych Projektów
                </h2>
                <div className="h-1 w-24 bg-blue-500 rounded mx-auto mb-6"></div>

                {/* Statystyki kategorii */}
                <div className="flex flex-col sm:flex-row justify-between w-full mb-6">
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-2xl font-bold text-white font-poppins">
                      {projects.it.length}
                    </span>
                    <p className="text-gray text-sm font-poppins text-center">
                      Projekty IT
                    </p>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-2xl font-bold text-white font-poppins">
                      {projects.smallIt.length}
                    </span>
                    <p className="text-gray text-sm font-poppins text-center">
                      Mniejsze<br className="hidden sm:block" /> Projekty IT
                    </p>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-2xl font-bold text-white font-poppins">
                      {projects.graphic.length}
                    </span>
                    <p className="text-gray text-sm font-poppins text-center">
                      Projekty Graficzne
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-16 bg-blue-500/50 rounded mx-auto mb-6"></div>

                <Link 
                  to="/projects"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-poppins"
                >
                  <span>Zobacz wszystkie projekty</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tres" className="min-h-screen bg-[#04070a] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white font-poppins mb-4">
            Sekcja numero tres
          </h2>
          <div className="h-1 w-24 bg-blue-500 rounded mx-auto"></div>
        </div>
      </section>
    </div>
  )
}

export default Home 