import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO/BRAND (Optional - you can add your logo here) */}
          <div className="md:hidden text-xl font-bold text-gray-800">
            HackX
          </div>

          {/* HAMBURGER MENU BUTTON - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded transition"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* NAV LINKS - Desktop */}
          <ul className="hidden md:flex gap-6 lg:gap-10 text-[14px] lg:text-[15px] text-gray-700 font-medium mx-auto">
            <li className="hover:text-black cursor-pointer transition">Partners</li>
            <li className="hover:text-black cursor-pointer transition">Schedule</li>
            <li className="hover:text-black cursor-pointer transition">Problems</li>
            <li className="hover:text-black cursor-pointer transition">Prizes</li>
            <li className="hover:text-black cursor-pointer transition">Rules</li>
            <li className="hover:text-black cursor-pointer transition">FAQs</li>
            <li className="hover:text-black cursor-pointer transition">Contacts</li>
          </ul>

        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-4 text-[15px] text-gray-700 font-medium">
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Partners</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Schedule</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Problems</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Prizes</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Rules</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>FAQs</li>
            <li className="hover:text-black cursor-pointer transition py-2 px-4 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Contacts</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}