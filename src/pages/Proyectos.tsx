import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Definimos el tipo para los proyectos
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  category: string;
  impact: string;
};

// Lista de proyectos con más detalles
const projects: Project[] = [
  {
    title: 'Aplicación de Bienes Raíces',
    description: 'Una plataforma web diseñada para gestionar la venta de casas y terrenos. Facilita la comunicación entre usuarios y vendedores, permite dejar comentarios y optimiza el proceso de transacciones inmobiliarias con una interfaz intuitiva.',
    image: '/web1.png', // Reemplaza con la ruta real
    technologies: ['React', 'TypeScript', 'Supabase', 'TailwindCSS'],
    githubLink: 'https://github.com/BaruxRmz17/web_bienes_raices_I.git',
    liveLink: 'https://bienesraicesisrael.netlify.app/',
    category: 'Inmobiliaria',
    impact: 'Mejoró la eficiencia de las ventas inmobiliarias en un 30% y aumentó la interacción cliente-vendedor.',
  },
  {
    title: 'Portafolio Personal',
    description: 'Mi portafolio web personal, creado con un diseño oscuro y efectos neón. Muestra mis proyectos, habilidades y logros de manera interactiva, destacando mi experiencia como desarrollador y estudiante de IA.',
    image: '/web2.png',
    technologies: ['React', 'TailwindCSS', 'TypeScript'],
    liveLink: 'https://portafoliobaruc.netlify.app',
    githubLink: 'https://github.com/tuusuario/portfolio', // Actualiza este enlace
    category: 'Personal',
    impact: 'Sirve como carta de presentación profesional, atrayendo oportunidades laborales y colaboraciones.',
  },
  {
    title: 'Colegio Rehilete La Paz',
    description: 'Una página web que presenta la oferta académica de un jardín de infantes. Incluye información sobre ubicaciones, características, uniformes y más, con un diseño claro y accesible para padres y tutores.',
    image: '/web4.png',
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    githubLink: 'https://github.com/BaruxRmz17/web_rehilete.git',
    category: 'Educación',
    impact: 'Aumentó la visibilidad del colegio y facilitó el acceso a información clave para las familias.',
  },
  {
    title: 'Punto de Venta Barbería',
    description: 'Un sistema de punto de venta para barberías que registra ventas, productos, clientes y empleados. Incluye funcionalidades como corte de caja por empleado, optimizando la gestión financiera y operativa.',
    image: '/web3.png',
    technologies: ['TypeScript', 'React', 'Supabase', 'TailwindCSS'],
    liveLink: 'https://puntobarberpelitos.netlify.app',
    githubLink: 'https://github.com/BaruxRmz17/PuntoBarber_Pelitos.git',
    category: 'Comercio',
    impact: 'Redujo el tiempo de gestión administrativa en un 40% y mejoró el control de inventarios.',
  },
  {
    title: 'Ococalli Logística',
    description: 'Una solución web para mejorar la logística de Ococalli, permitiendo al dueño registrar ventas, clientes y optimizar tiempos. Diseñada para aumentar la eficiencia operativa y la trazabilidad de datos.',
    image: '/web5.png',
    technologies: ['TypeScript', 'React', 'Supabase', 'TailwindCSS'],
    liveLink: 'https://ococallilogistica.netlify.app/',
    githubLink: 'https://github.com/yosoyemi/ococalli-logistica.git',
    category: 'Logística',
    impact: 'Incrementó la eficiencia operativa en un 25% y mejoró la toma de decisiones basada en datos.',
  },
  {
    title: 'PastList',
    description: 'Una aplicación móvil desarrollada en Flutter para facilitar la asistencia en aulas. Permite a profesores y alumnos gestionar listas de manera rápida y eficiente, integrando datos en tiempo real.',
    image: '/web6.png',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubLink: 'https://github.com/AndreyyMunoz/Pass_List_168.git',
    category: 'Educación',
    impact: 'Redujo el tiempo de pasar lista en un 50%, mejorando la organización en el aula.',
  },
];

const Projects: React.FC = () => {
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
            Nuestros Proyectos
          </motion.h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto font-light">
            Explora cómo <span className="text-indigo-400">Ramirez Tech</span> ha transformado ideas en soluciones reales para diversos sectores.
          </p>
          <p className="text-lg mt-2 max-w-2xl mx-auto text-gray-300">
            Cada proyecto refleja nuestro compromiso con la innovación, la calidad y el impacto tangible.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Portafolio de Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="bg-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                  {/* Imagen */}
                  <div className="relative w-full h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Contenido */}
                  <div className="p-6">
                    <span className="text-sm text-indigo-400 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-semibold text-white mt-2 mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <p className="text-gray-300 text-sm mb-4">
                      <span className="font-semibold text-indigo-400">Impacto: </span>{project.impact}
                    </p>
                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Enlaces */}
                    <div className="flex gap-6">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaGithub size={20} /> GitHub
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-400 hover:scale-110 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaExternalLinkAlt size={20} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            ¿Inspirado por Nuestros Proyectos?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Convierte tu visión en realidad con Ramirez Tech. Contáctanos para discutir tu próximo proyecto.
          </p>
          <p className="text-gray-400 mb-8">
            Desde aplicaciones web hasta soluciones móviles, estamos listos para crear algo extraordinario juntos.
          </p>
          <a
            href="/contacto"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Inicia Tu Proyecto
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;