import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Corregido, ahora 'Routes' en vez de 'Switch'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/sobre-mi';
import Projects from './pages/Proyectos';
import Services from './pages/servicios';
import Contact from './pages/contacto';
import Achievements from './pages/Logros';
import Footer from './components/footer';  // Asegúrate de importar el Footer

const App: React.FC = () => {

  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      <div className="pt-4 min-h-screen bg-gray-50">
        <Routes>
          {/* Ruta de inicio (pública) */}
          <Route path="/" element={<Home />} />

          {/* Rutas Públicas */}
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/Proyectos" element={<Projects />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/Logros" element={<Achievements />} />
          <Route path="/contacto" element={<Contact />} />


          
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
