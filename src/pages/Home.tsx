import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion para animaciones

const Home: React.FC = () => {
  // Definimos variantes de animación para un efecto de entrada suave desde abajo
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 }, // Estado inicial: invisible y desplazado 60px hacia abajo
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Estado final: visible y en posición original
  };

  // Variante para animar elementos hijos de manera escalonada
  const staggerContainer = {
    hidden: { opacity: 0 }, // Estado inicial: contenedor invisible
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Los hijos aparecen con 0.3s de retraso entre sí
    },
  };

  return (
    // Contenedor principal con fondo gris oscuro y altura mínima de pantalla completa
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {/* Sección Hero: encabezado principal */}
      <motion.section
        initial="hidden" // Estado inicial de la animación
        animate="visible" // Estado final de la animación
        variants={fadeInUp} // Usamos la variante fadeInUp para la entrada
        className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black py-24 md:py-32" // Fondo con gradiente y padding vertical
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>
        {/* Contenedor centrado para el contenido */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Título principal animado */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }} // Comienza invisible y ligeramente reducido
            animate={{ opacity: 1, scale: 1 }} // Se hace visible y alcanza tamaño normal
            transition={{ duration: 1, delay: 0.2 }} // Duración de 1s con retraso de 0.2s
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600" // Texto grande con gradiente
          >
            Ramirez Tech
          </motion.h1>
          {/* Subtítulo con énfasis en IA */}
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto font-light">
            Transformamos el futuro con <span className="text-indigo-400">inteligencia artificial</span> y tecnología de vanguardia.
          </p>
          {/* Botones animados */}
          <motion.div
            initial={{ opacity: 0 }} // Comienza invisible
            animate={{ opacity: 1 }} // Se hace visible
            transition={{ delay: 0.5 }} // Retraso de 0.5s para aparecer después del título
            className="mt-8 flex justify-center gap-4" // Contenedor flex para botones
          >
            {/* Botón de servicios */}
            <a
              href="/servicios" // Enlace a la página de servicios
              className="px-8 py-3 bg-indigo-600 rounded-full font-semibold text-white hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50" // Estilo con hover y sombra
            >
              Explora Nuestros Servicios
            </a>
            {/* Botón de proyectos */}
            <a
              href="/Proyectos" // Enlace a la página de proyectos
              className="px-8 py-3 border border-indigo-500 rounded-full font-semibold text-indigo-400 hover:text-white hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300" // Estilo con borde y hover
            >
              Ver Nuestros Proyectos
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de Servicios */}
      <section id="services" className="py-20 bg-gray-900"> {/* Fondo gris oscuro con padding vertical */}
        <div className="container mx-auto px-4"> {/* Contenedor centrado */}
          {/* Título de la sección */}
          <motion.h2
            initial="hidden" // Estado inicial
            whileInView="visible" // Se anima al entrar en la vista
            viewport={{ once: true }} // Solo se anima una vez
            variants={fadeInUp} // Usa la variante fadeInUp
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500" // Título con gradiente
          >
            Lo Que Ofrecemos
          </motion.h2>
          {/* Contenedor de tarjetas con animación escalonada */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer} // Usa staggerContainer para animar hijos
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" // Grid responsive
          >
            {/* Tarjeta 1: Innovación Tecnológica */}
            <motion.div variants={fadeInUp} className="group"> {/* Grupo para efectos hover */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"> {/* Estilo de tarjeta */}
                <div className="flex justify-center mb-6"> {/* Contenedor del ícono */}
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Ícono SVG */}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Innovación Tecnológica</h3> {/* Título */}
                <p className="text-gray-400">Desarrollamos soluciones únicas con las últimas tendencias para que tu negocio destaque.</p> {/* Descripción */}
              </div>
            </motion.div>

            {/* Tarjeta 2: Inteligencia Artificial */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Inteligencia Artificial</h3>
                <p className="text-gray-400">Creamos sistemas de IA personalizados que automatizan y potencian tus operaciones.</p>
              </div>
            </motion.div>

            {/* Tarjeta 3: Soporte Premium */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <svg className="w-14 h-14 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Soporte Premium</h3>
                <p className="text-gray-400">Atención técnica 24/7 con expertos dedicados a resolver tus desafíos.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección: ¿Por Qué Elegirnos? */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-t from-gray-950 to-gray-900" // Gradiente de fondo
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Por Qué Elegirnos?</h2> {/* Título */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light">
            En Ramirez Tech, liderados por Baruc Ramírez, combinamos pasión, conocimiento y tecnología para ofrecerte resultados excepcionales.
          </p>
          {/* Grid de razones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"> {/* Tarjeta con hover */}
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Expertise en IA</h3>
              <p className="text-gray-300">Formación avanzada en Ingeniería en Inteligencia Artificial.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Diseño Personalizado</h3>
              <p className="text-gray-300">Soluciones únicas adaptadas a tus necesidades específicas.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Resultados Garantizados</h3>
              <p className="text-gray-300">Compromiso con la excelencia en cada proyecto.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nueva Sección: Comentarios de Clientes */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer} // Usa staggerContainer para animar testimonios
        className="py-20 bg-gray-900" // Fondo gris oscuro con padding vertical
      >
        <div className="container mx-auto px-4">
          {/* Título de la sección */}
          <motion.h2
            variants={fadeInUp} // Animación de entrada
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>
          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Comentario 1 */}
            <motion.div variants={fadeInUp} className="group"> {/* Grupo para efectos hover */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <p className="text-gray-300 italic mb-4">
                  "Ramirez Tech transformó nuestra gestión de ventas con una solución de IA increíblemente eficiente. ¡El soporte es impecable!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold"> {/* Avatar simulado */}
                    JM
                  </div>
                  <div>
                    <p className="text-white font-semibold">Juan Morales</p>
                    <p className="text-gray-400 text-sm">Gerente, Inmobiliaria La Paz</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Comentario 2 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <p className="text-gray-300 italic mb-4">
                  "El equipo desarrolló un sistema personalizado que optimizó nuestra logística. ¡Resultados visibles desde el primer mes!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                    LR
                  </div>
                  <div>
                    <p className="text-white font-semibold">Laura Ramírez</p>
                    <p className="text-gray-400 text-sm">Directora, Ococalli Logística</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Comentario 3 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <p className="text-gray-300 italic mb-4">
                  "La aplicación móvil que crearon para nuestra escuela ha simplificado la asistencia y mejorado la organización. ¡Altamente recomendados!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-400 flex items-center justify-center text-white font-semibold">
                    AP
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ana Pérez</p>
                    <p className="text-gray-400 text-sm">Directora, Colegio Rehilete</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sección CTA: Llamado a la acción */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-indigo-950 relative" // Fondo índigo oscuro
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div> {/* Textura sutil */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Haz Realidad Tu Visión
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Únete a nosotros y transforma tu negocio con soluciones tecnológicas de clase mundial.
          </p>
          {/* Botón CTA */}
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Comienza Ahora
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;