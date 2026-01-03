import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <a href="#home" className="md:hidden text-xl font-bold text-gray-800">
            HackX
          </a>

          {/* HAMBURGER MENU - MOBILE */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded transition"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* ===== DESKTOP NAV ===== */}
          <ul className="hidden md:flex gap-6 lg:gap-10 text-[14px] lg:text-[15px] text-gray-700 font-medium mx-auto">
            <li><a href="#pastsponsor" className="hover:text-black transition">Partners</a></li>
            <li><a href="#schedule" className="hover:text-black transition">Schedule</a></li>
            <li><a href="#problems" className="hover:text-black transition">Problems</a></li>
            <li><a href="#prizes" className="hover:text-black transition">Prizes</a></li>
            <li><a href="#rules" className="hover:text-black transition">Rules</a></li>
            <li><a href="#glimpse" className="hover:text-black transition">Glimpse</a></li>
            <li><a href="#faqs" className="hover:text-black transition">FAQs</a></li>
            <li><a href="#contacts" className="hover:text-black transition">Contacts</a></li>
          </ul>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-[15px] text-gray-700 font-medium">
            <li>
              <a href="#pastsponsor" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Partners
              </a>
            </li>
            <li>
              <a href="#schedule" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Schedule
              </a>
            </li>
            <li>
              <a href="#problems" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Problems
              </a>
            </li>
            <li>
              <a href="#prizes" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Prizes
              </a>
            </li>
            <li>
              <a href="#rules" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Rules
              </a>
            </li>
            <li>
              <a href="#glimpse" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Glimpse
              </a>
            </li>
            <li>
              <a href="#faqs" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={closeMenu}
                className="block py-2 px-4 hover:bg-gray-50 rounded">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}