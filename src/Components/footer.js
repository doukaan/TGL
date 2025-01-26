import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-white py-6">
       
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-1 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start md:ml-10">
          <img src="/İmages/Tglelogo.png" alt="TGL Elektrik" className="w-32" />
        </div>

        {/* Copyright */}
        <div className="text-sm text-center ">
          <p>Copyright © 2024 TGL Elektrik</p>
        </div>

        {/* Design by */}
        <div className="text-sm text-center md:mr-10">
          <p>
            Design by{' '}
            <a
              href="https://doukaan.com.tr"
              className="text-white hover:text-blue-300"
            >
              Doğu Kaan Ilgaz
            </a>
            <span> | </span>
            <a
              href="#"
              className="text-white hover:text-blue-300"
            >
              Zahir Toğal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
