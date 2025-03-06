import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
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
            Nuestros Servicios
          </motion.h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto font-light">
            En <span className="text-indigo-400">Ramirez Tech</span>, ofrecemos soluciones tecnológicas avanzadas diseñadas para impulsar tu éxito en un mundo digital en constante evolución.
          </p>
          <p className="text-lg mt-2 max-w-2xl mx-auto text-gray-300">
            Desde inteligencia artificial hasta soporte técnico integral, estamos aquí para transformar tus ideas en realidades tangibles.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Soluciones a Tu Medida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Innovación Tecnológica</h3>
                <p className="text-gray-400 mb-4">
                  Diseñamos e implementamos soluciones tecnológicas de última generación que posicionan a tu empresa como líder en su industria. Nos especializamos en integrar herramientas avanzadas que optimizan procesos y generan valor sostenible.
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                  <li>Desarrollo de software a medida para aplicaciones web y móviles</li>
                  <li>Integración de sistemas avanzados con APIs y plataformas existentes</li>
                  <li>Optimización de procesos digitales mediante automatización</li>
                  <li>Consultoría tecnológica para identificar oportunidades de crecimiento</li>
                  <li>Prototipado rápido para validar ideas innovadoras</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Inteligencia Artificial</h3>
                <p className="text-gray-400 mb-4">
                  Creamos sistemas de inteligencia artificial personalizados que transforman datos en decisiones estratégicas. Desde la automatización hasta el análisis profundo, nuestras soluciones de IA están diseñadas para potenciar tu negocio.
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                  <li>Modelos de aprendizaje automático para predicción y clasificación</li>
                  <li>Análisis predictivo para anticipar tendencias y comportamientos</li>
                  <li>Procesamiento de lenguaje natural para chatbots y asistentes virtuales</li>
                  <li>Reconocimiento de patrones en imágenes y datos no estructurados</li>
                  <li>Optimización de recursos mediante algoritmos inteligentes</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Soporte Premium</h3>
                <p className="text-gray-400 mb-4">
                  Brindamos asistencia técnica integral disponible 24/7, asegurando que tus sistemas funcionen sin interrupciones. Nuestro equipo de expertos está comprometido con resolver tus desafíos tecnológicos de manera eficiente.
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                  <li>Soporte técnico en tiempo real vía chat, correo o teléfono</li>
                  <li>Mantenimiento proactivo para prevenir fallos críticos</li>
                  <li>Resolución rápida de incidencias con tiempos de respuesta garantizados</li>
                  <li>Monitoreo continuo de sistemas y redes</li>
                  <li>Capacitación personalizada para tu equipo técnico</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Additional Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-t from-gray-950 to-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            ¿Por Qué Elegir Nuestros Servicios?
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-6">
            En Ramirez Tech, no solo ofrecemos servicios, sino experiencias transformadoras. Liderados por Baruc Ramírez, un apasionado estudiante de Ingeniería en Inteligencia Artificial, nuestro enfoque combina innovación, precisión y un compromiso inquebrantable con el éxito de nuestros clientes.
          </p>
          <p className="text-gray-400 mb-8">
            Cada proyecto que emprendemos está respaldado por un análisis profundo de tus necesidades, un diseño personalizado y la implementación de tecnologías de punta. Ya sea que busques optimizar tus operaciones, implementar IA o garantizar la estabilidad de tus sistemas, estamos aquí para superar tus expectativas con soluciones que generan impacto real.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/contacto"
              className="px-8 py-3 bg-indigo-600 rounded-full font-semibold text-white hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Solicita una Consulta
            </a>
            <a
              href="/Proyectos"
              className="px-8 py-3 border border-indigo-500 rounded-full font-semibold text-indigo-400 hover:text-white hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300"
            >
              Ver Casos de Éxito
            </a>
          </div>
        </div>
      </motion.section>

     
    </div>
  );
};

export default Services;