//import React, { useState } from 'react';
import { useState, useEffect } from 'react';
import { Heart, ChevronRight, Camera, MessageCircleHeart, Flower, Video , Clock} from 'lucide-react';
import Gallery from './components/Gallery';
import Declaration from './components/Declaration';
import Flowers from './components/Flowers';
import Videos from './components/Videos';
import './global.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const [heartFilled, setHeartFilled] = useState(false);
  const handleMouseEnter = () => {
    setHeartFilled(true);
  };
  const handleMouseLeave = () => {
    setHeartFilled(false);
  };

  const [duration, setDuration] = useState({ months: 0, days: 0 });

  useEffect(() => {
    const calculateDuration = () => {
      const startDate = new Date('2024-11-05');
      const currentDate = new Date();
      
      let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
      months += currentDate.getMonth() - startDate.getMonth();
      
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      let days = currentDate.getDate() - startDate.getDate();
      
      if (days < 0) {
        months--;
        days += lastDayOfMonth;
      }

      setDuration({ months, days });
    };

    calculateDuration();
    const timer = setInterval(calculateDuration, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-rose-600 flex items-center gap-2 text-xl font-semibold"
            >
              <Heart className="w-6 h-6 fill-rose-600" /> Kalebe & Clara
            </button>
            <div className="flex gap-4 sm:gap-6">
              <button  
                id='menu-item'
                onClick={() => setActiveSection('gallery')}
                className={`flex items-center gap-1 ${activeSection === 'gallery' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <Camera className="w-4 h-4" /> <span className="menu-text">Galeria</span>
              </button>
              <button  
                id='menu-item'
                onClick={() => setActiveSection('flowers')}
                className={`flex items-center gap-1 ${activeSection === 'flowers' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <Flower className="w-4 h-4" /> <span className="menu-text">Flores</span>
              </button>
              <button  
                id='menu-item'
                onClick={() => setActiveSection('declaration')}
                className={`flex items-center gap-1 ${activeSection === 'declaration' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <MessageCircleHeart className="w-4 h-4" /> <span className="menu-text">Declaração</span>
              </button>

              <button 
                id='menu-item'
                onClick={() => setActiveSection('videos')}
                className={`flex items-center gap-1 ${activeSection === 'videos' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <Video className="w-4 h-4" /> <span className="menu-text">Videos</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 sm:pt-20">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
                Kalebe & Clara
              </h1>
              <p className="text-2xl sm:text-3xl text-rose-600 font-light mb-4">Nossa História de Amor</p>
              <p className="text-lg sm:text-xl text-gray-600 mb-2">Namorando desde</p>
              <p className="text-2xl sm:text-3xl font-bold text-rose-600 mb-6 sm:mb-8">05/11/2024</p>
              

              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p className="text-lg sm:text-xl text-gray-600 mb-2">{duration.months} meses e {duration.days} dias de amor</p>
              </div>
              
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl">
                <img 
                  src="/photos/couple/home.JPEG"
                  alt="Kalebe e Clara"
                  className="w-full h-[300px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6 sm:p-8">
                  <p className="text-white text-lg sm:text-xl font-light">Nosso amor cresce a cada dia</p>
                </div>
              </div>

              <button
                onClick={() => setActiveSection('gallery')}
                className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-rose-700 transition-colors text-sm sm:text-base"
              >
                Ver nossa galeria <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'flowers' && <Flowers />}
        {activeSection === 'declaration' && <Declaration />}
        {activeSection === 'videos' && <Videos />}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Heart onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} fill={heartFilled ? 'red' : 'none'} stroke="red" style={{ transition: 'fill 0.3s ease', cursor: 'pointer' }} className="h-5 w-5 text-pink-500" />
            </div>
            <div className="mt-4 md:mt-0 md:order-1 text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Desenvolvido com amor por{' '}
                <span className="text-pink-600 font-semibold">Kalebe Santos</span>
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;