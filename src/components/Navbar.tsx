'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0e14] border-b border-gray-800 shadow-md shadow-black/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-full h-20 max-h-20 overflow-hidden">
        <Link href="/" scroll={true} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Matías Roiz"
            width={60}
            height={60}
            className="rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#studies" className="hover:text-cyan-500 text-sm transition-colors duration-300">STUDIES</Link>
          <Link href="#skills" className="hover:text-cyan-500 text-sm transition-colors duration-300">SKILLS</Link>
          <Link href="#portfolio" className="hover:text-cyan-500 text-sm transition-colors duration-300">PORTFOLIO</Link>
          <Link href="#contact" className="hover:text-cyan-500 text-sm transition-colors duration-300">CONTACT</Link>
        </div>

        <div className="flex items-center">
          <Link href="/esp" className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs mr-4 md:mr-0">
            ESP
          </Link>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <div className={`absolute top-20 left-0 w-full bg-gray-900 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-4 py-4 flex flex-col space-y-3">
            <Link href="#studies" className="hover:text-blue-300 text-sm" onClick={toggleMenu}>STUDIES</Link>
            <Link href="#skills" className="hover:text-blue-300 text-sm" onClick={toggleMenu}>SKILLS</Link>
            <Link href="#portfolio" className="hover:text-blue-300 text-sm" onClick={toggleMenu}>PORTFOLIO</Link>
            <Link href="#contact" className="hover:text-blue-300 text-sm" onClick={toggleMenu}>CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
