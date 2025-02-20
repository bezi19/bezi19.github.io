import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import avatar from './assets/avatar.png'

function App() {
  return (
    <div className="content-container">
      <div className="flex flex-col gap-8 w-3/4">
        <div className="flex gap-8">
          <div className="card-container flex-1">
            <div className="flex gap-6 items-center">
              <img 
                src={avatar} 
                alt="Profile avatar" 
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h1 className="heading-primary">
                  imie nazwisko
                </h1>
                <p className="text-gray-400 mt-2">
                  tekst
                </p>
                <div className="flex flex-col gap-2 mt-4 text-gray-300">
                  <p className="flex items-center gap-3">
                    <i className="fas fa-envelope"></i>
                    mail@example.com
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-phone"></i>
                    +48 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-container flex-1">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="card-container flex-[2]">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          
          <div className="card-container flex-1">
            <p className="text-gray-300">
              Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 