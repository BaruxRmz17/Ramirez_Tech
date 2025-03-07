import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para hacer scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Cerrar el menú móvil si está abierto
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-950 p-6 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-2xl font-semibold tracking-tight text-indigo-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={scrollToTop}
        >
          Ramirez Tech
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ease-in-out px-3 py-2 ${
                isActive
                  ? 'text-indigo-500 after:w-full after:scale-x-100'
                  : 'text-gray-300 hover:text-indigo-500 after:w-full after:scale-x-0 hover:after:scale-x-100'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-transform after:duration-300 after:origin-center`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/sobre-mi"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ease-in-out px-3 py-2 ${
                isActive
                  ? 'text-indigo-500 after:w-full after:scale-x-100'
                  : 'text-gray-300 hover:text-indigo-500 after:w-full after:scale-x-0 hover:after:scale-x-100'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-transform after:duration-300 after:origin-center`
            }
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/servicios"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ease-in-out px-3 py-2 ${
                isActive
                  ? 'text-indigo-500 after:w-full after:scale-x-100'
                  : 'text-gray-300 hover:text-indigo-500 after:w-full after:scale-x-0 hover:after:scale-x-100'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-transform after:duration-300 after:origin-center`
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/Proyectos"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ease-in-out px-3 py-2 ${
                isActive
                  ? 'text-indigo-500 after:w-full after:scale-x-100'
                  : 'text-gray-300 hover:text-indigo-500 after:w-full after:scale-x-0 hover:after:scale-x-100'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-transform after:duration-300 after:origin-center`
            }
          >
            Nuestros Proyectos
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ease-in-out px-3 py-2 ${
                isActive
                  ? 'text-indigo-500 after:w-full after:scale-x-100'
                  : 'text-gray-300 hover:text-indigo-500 after:w-full after:scale-x-0 hover:after:scale-x-100'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-transform after:duration-300 after:origin-center`
            }
          >
            Contacto
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-indigo-500 focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `block text-lg font-medium transition-all duration-300 ease-in-out ${
                isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-indigo-500'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/sobre-mi"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `block text-lg font-medium transition-all duration-300 ease-in-out ${
                isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-indigo-500'
              }`
            }
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/servicios"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `block text-lg font-medium transition-all duration-300 ease-in-out ${
                isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-indigo-500'
              }`
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/Proyectos"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `block text-lg font-medium transition-all duration-300 ease-in-out ${
                isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-indigo-500'
              }`
            }
          >
            Nuestros Proyectos
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={scrollToTop}
            className={({ isActive }) =>
              `block text-lg font-medium transition-all duration-300 ease-in-out ${
                isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-indigo-500'
              }`
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;