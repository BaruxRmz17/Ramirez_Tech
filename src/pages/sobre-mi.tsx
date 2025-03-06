import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600"
          >
            Sobre Nosotros
          </motion.h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto font-light">
            Conoce la historia y la visión detrás de <span className="text-indigo-400">Ramirez Tech</span>.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Nuestra Misión
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-center text-gray-300 leading-relaxed">
            En Ramirez Tech, nos dedicamos a revolucionar el mundo tecnológico mediante soluciones innovadoras basadas en inteligencia artificial. Nuestra misión es empoderar a empresas y personas con herramientas que no solo resuelvan problemas, sino que abran nuevas posibilidades para el futuro.
          </p>
        </div>
      </motion.section>

      {/* CEO Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-t from-gray-950 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Nuestro CEO
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            {/* Foto del CEO */}
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                <img
                  src="/img1.png"
                  alt="Baruc Ramírez, CEO de Ramirez Tech"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Descripción del CEO */}
            <motion.div variants={fadeInUp} className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Baruc Ramírez</h3>
              <p className="text-lg text-gray-300 mb-6">
                Baruc Ramírez es el fundador y CEO de Ramirez Tech. Actualmente estudiante de Ingeniería en Inteligencia Artificial en Edgehub, Baruc combina su pasión por la tecnología con un enfoque visionario para liderar proyectos innovadores. Con experiencia en desarrollo de sistemas de IA y un compromiso con la excelencia, él es el motor detrás de nuestra misión de transformar el mundo a través de la tecnología.
              </p>
              <p className="text-indigo-400 font-semibold">“Creo que la IA no es solo el futuro, sino la herramienta para construirlo.”</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Innovación</h3>
                <p className="text-gray-300">Buscamos nuevas formas de superar los límites tecnológicos.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Excelencia</h3>
                <p className="text-gray-300">Nos esforzamos por entregar resultados de la más alta calidad.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Compromiso</h3>
                <p className="text-gray-300">Estamos dedicados a nuestros clientes y sus objetivos.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-indigo-950 relative"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Únete a Nuestra Visión
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Descubre cómo podemos trabajar juntos para transformar el futuro.
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Contáctanos
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default About;