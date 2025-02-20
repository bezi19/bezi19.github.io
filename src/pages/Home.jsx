import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../assets/styles.css'
import avatar from '../assets/avatar.png'
import Navbar from '../components/Navbar'
import Projects from './Projects'
import Technologies from './Technologies'
import { technologies } from '../data/technologies'
import HireStatus from '../components/HireStatus'

function App() {
  return (
    <div className="relative min-h-screen overflow-y-auto">
      <Navbar />
      <div className="content-container">
        <div className="flex flex-col gap-8 w-full px-4 md:w-3/4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="card-container w-full md:w-1/2">
              <div className="flex gap-8 h-full">
                <div className="flex items-center">
                  <img 
                    src={avatar} 
                    alt="Profile avatar" 
                    className="w-32 h-32 rounded-full"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <div className="pb-4 border-b border-blue-500/50">
                    <h1 className="heading-primary text-2xl sm:text-4xl">
                      Wojciech Bezak
                    </h1>
                    <div className="mt-2">
                      <HireStatus status="AVAILABLE" />
                    </div>
                  </div>

                  <div className="flex flex-row gap-6 mt-4">
                    <p className="flex items-center gap-2 text-gray">
                      <i className="fas fa-envelope w-5"></i>
                      <span className="break-all">wojciech.bezak19@gmail.com</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray">
                      <i className="fas fa-phone w-5"></i>
                      <span>+48 737 861 773</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-container w-full md:w-1/2">
              <h2 className="text-xl font-bold text-white mb-4">Technologie</h2>
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
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            
            <div className="card-container flex-1">
              <h2 className="text-xl font-bold text-white mb-4">Wykształcenie</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <i className="fas fa-graduation-cap mt-1 text-gray"></i>
                  <div>
                    <h3 className="text-white font-medium">Polsko-Japońska Akademia Technik Komputerowych w Gdańsku</h3>
                    <p className="text-gray text-sm">Inżynierskie - Informatyka/Inżynieria gier komputerowych</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray">
                      <i className="fas fa-calendar-alt"></i>
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="fas fa-school mt-1 text-gray"></i>
                  <div>
                    <h3 className="text-white font-medium">Liceum Ogólnokształcące imienia W. Broniewskiego w Świdwinie</h3>
                    <p className="text-gray text-sm">Profil matematyczno-językowy</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray">
                      <i className="fas fa-calendar-alt"></i>
                      <span>2018 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppWrapper() {
  return (
    <BrowserRouter basename="/bezi19.github.io/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
) 