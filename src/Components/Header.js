import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(window.scrollY > 50); // Only track scroll on mobile
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full md:absolute fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled && window.innerWidth < 768
          ? 'bg-black bg-opacity-40 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/İmages/Tglelogo.png"
          alt="Logo"
          className="w-[150px] md:w-[200px]"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white font-bold hover:text-blue-300">Anasayfa</a>
          <a href="#services" className="text-white font-bold hover:text-blue-300">Hizmetlerimiz</a>
          <a href="#work" className="text-white font-bold hover:text-blue-300">Çalışma Süreci</a>
          <a href="#contact" className="text-white font-bold hover:text-blue-300">İletişim</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white rounded-xl">
            <a href="https://wa.me/+905510466110" className="p-6 text-[#6da9ff] font-bold">Whatsapp</a>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 md:hidden 
            flex flex-col items-center justify-center 
            w-full max-w-screen"  // Added max-w-screen to prevent overflow
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 z-60 text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center space-y-6 w-full px-4">
              <a
                href="#home"
                className="text-white text-2xl hover:text-blue-300 w-full text-center"
                onClick={toggleMenu}
              >
                Anasayfa
              </a>
              <a
                href="#services"
                className="text-white text-2xl hover:text-blue-300 w-full text-center"
                onClick={toggleMenu}
              >
                Hizmetlerimiz
              </a>
              <a
                href="#work"
                className="text-white text-2xl hover:text-blue-300 w-full text-center"
                onClick={toggleMenu}
              >
                Çalışma Süreci
              </a>
              <a
                href="#contact"
                className="text-white text-2xl hover:text-blue-300 w-full text-center"
                onClick={toggleMenu}
              >
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;