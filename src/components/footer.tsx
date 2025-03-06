import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-indigo-500 transition-colors duration-300 ease-in-out hover:text-indigo-400">
              Ramirez Tech
            </h2>
            <p className="mt-2 text-sm tracking-wide">
              Innovación y tecnología al servicio del futuro
            </p>
          </div>

          {/* Center Section - Info */}
          <div className="text-center">
            <p className="text-sm transition-all duration-300 ease-in-out hover:text-indigo-400">
              © {new Date().getFullYear()} Ramirez Tech. Todos los derechos reservados.
            </p>
            <p className="mt-1 text-sm">
              CEO: Baruc Ramírez - Estudiante de Ingeniería en Inteligencia Artificial en Edgehub
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex space-x-6">
            {/* Ícono de Instagram (reemplaza a Twitter) */}
            <a
              href="https://www.instagram.com/barux_rmz/"
              className="text-gray-400 hover:text-indigo-500 transform hover:scale-110 transition-all duration-300 ease-in-out"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.303.308 2.948.665.715.401 1.218.97 1.618 1.37.399.4.969.903 1.37 1.618.357.645.603 1.582.665 2.948.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.308 2.303-.665 2.948-.401.715-.97 1.218-1.37 1.618-.4.399-.903.969-1.618 1.37-.645.357-1.582.603-2.948.665-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.303-.308-2.948-.665-.715-.401-1.218-.97-1.618-1.37-.399-.4-.969-.903-1.37-1.618-.357-.645-.603-1.582-.665-2.948-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.308-2.303.665-2.948.401-.715.97-1.218 1.37-1.618.4-.399.903-.969 1.618-1.37.645-.357 1.582-.603 2.948-.665 1.265-.058 1.645-.07 4.849-.07zm0 1.714c-3.172 0-3.571.013-4.822.07-1.152.052-1.938.24-2.626.512-.749.291-1.373.68-1.992 1.3-.619.619-1.009 1.243-1.3 1.992-.272.688-.46 1.474-.512 2.626-.057 1.251-.07 1.65-.07 4.822s.013 3.571.07 4.822c.052 1.152.24 1.938.512 2.626.291.749.68 1.373 1.3 1.992.619.619 1.243 1.009 1.992 1.3.688.272 1.474.46 2.626.512 1.251.057 1.65.07 4.822.07s3.571-.013 4.822-.07c1.152-.052 1.938-.24 2.626-.512.749-.291 1.373-.68 1.992-1.3.619-.619 1.009-1.243 1.3-1.992.272-.688.46-1.474.512-2.626.057-1.251.07-1.65.07-4.822s-.013-3.571-.07-4.822c-.052-1.152-.24-1.938-.512-2.626-.291-.749-.68-1.373-1.3-1.992-.619-.619-1.243-1.009-1.992-1.3-.688-.272-1.474-.46-2.626-.512-1.251-.057-1.65-.07-4.822-.07zm0 4.163a4.681 4.681 0 100 9.362 4.681 4.681 0 100-9.362zm0 7.556a2.875 2.875 0 110-5.75 2.875 2.875 0 110 5.75zm6.18-8.986a.93.93 0 100-1.86.93.93 0 100 1.86z" />
              </svg>
            </a>
            {/* Ícono de LinkedIn */}
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-500 transform hover:scale-110 transition-all duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Ícono de GitHub */}
            <a
              href="https://github.com/BaruxRmz17/"
              className="text-gray-400 hover:text-indigo-500 transform hover:scale-110 transition-all duration-300 ease-in-out"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.3 11.3 0 016 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.6 5.4-5.1 5.7.4.3.7 1 .7 1.5v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-400">
          <p className="transition-all duration-300 ease-in-out hover:text-indigo-400">
            Diseñado y desarrollado por Ramirez Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;