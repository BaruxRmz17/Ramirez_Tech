import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Para animaciones
import emailjs from '@emailjs/browser'; // Para enviar correos

const Contact: React.FC = () => {
  // Estado para manejar los datos del formulario con campos adicionales
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', // Nuevo: Empresa u organización
    appType: 'web', // Nuevo: Tipo de app (web o móvil), valor por defecto "web"
    budget: '', // Nuevo: Presupuesto
    deadline: '', // Nuevo: Plazo estimado
    message: '',
  });

  // Estado para mensajes de éxito o error
  const [status, setStatus] = useState<string>('');

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 }, // Estado inicial: invisible y desplazado hacia abajo
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Estado final: visible
  };

  // Maneja los cambios en los inputs y select del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Configuración de EmailJS (reemplaza con tus credenciales)
    const serviceID = 'service_t5hom3t'; // Obtén esto de EmailJS
    const templateID = 'template_mn2c7fl'; // Obtén esto de EmailJS
    const publicKey = 'lEJ3yEW9tf-TdKAne'; // Obtén esto de EmailJS

    // Envía el correo con todos los datos del formulario
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          app_type: formData.appType,
          budget: formData.budget,
          deadline: formData.deadline,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setStatus('Mensaje enviado con éxito. ¡Te contactaremos pronto!'); // Mensaje de éxito
        setFormData({ name: '', email: '', company: '', appType: 'web', budget: '', deadline: '', message: '' }); // Resetea el formulario
      })
      .catch((error) => {
        setStatus('Error al enviar el mensaje. Intenta de nuevo más tarde.'); // Mensaje de error
        console.error('Error en EmailJS:', error);
      });
  };

  return (
    // Contenedor principal con fondo gris oscuro
    <div className="bg-gray-950 text-white min-h-screen overflow-hidden">
      {/* Sección Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black py-24 md:py-32" // Fondo con gradiente
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div> {/* Textura sutil */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600"
          >
            Contáctanos
          </motion.h1>
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto font-light">
            Conecta con <span className="text-indigo-400">Ramirez Tech</span> y hagamos realidad tu próximo proyecto.
          </p>
        </div>
      </motion.section>

      {/* Sección del Formulario */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gray-900" // Fondo gris oscuro con padding
      >
        <div className="container mx-auto px-4 max-w-2xl"> {/* Contenedor centrado y limitado en ancho */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Envíanos un Mensaje
          </h2>
          {/* Formulario con más campos */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" // Estilo del input
                placeholder="Tu nombre"
              />
            </div>
            {/* Campo Correo */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="tuemail@ejemplo.com"
              />
            </div>
            {/* Nuevo Campo: Empresa/Organización */}
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2">Empresa u Organización</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nombre de tu empresa (opcional)"
              />
            </div>
            {/* Nuevo Campo: Tipo de App */}
            <div>
              <label htmlFor="appType" className="block text-gray-300 mb-2">Tipo de Aplicación</label>
              <select
                id="appType"
                name="appType"
                value={formData.appType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" // Estilo del select
              >
                <option value="web">Web</option>
                <option value="movil">Móvil</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
            {/* Nuevo Campo: Presupuesto */}
            <div>
              <label htmlFor="budget" className="block text-gray-300 mb-2">Presupuesto Estimado</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ej. $1,000 - $5,000 (opcional)"
              />
            </div>
            {/* Nuevo Campo: Plazo Estimado */}
            <div>
              <label htmlFor="deadline" className="block text-gray-300 mb-2">Plazo Estimado</label>
              <input
                type="text"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ej. 1 mes, 3 meses (opcional)"
              />
            </div>
            {/* Campo Mensaje */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Describe tu proyecto o consulta"
              />
            </div>
            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Enviar Mensaje
            </button>
          </form>
          {/* Mensaje de estado */}
          {status && (
            <p className={`mt-4 text-center ${status.includes('éxito') ? 'text-indigo-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </div>
      </motion.section>

      {/* Sección de Información Adicional */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-indigo-950 relative" // Fondo índigo oscuro
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Otras Formas de Contactarnos
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
            También puedes escribirnos directamente o seguirnos en nuestras redes sociales.
          </p>
          {/* Información de contacto */}
          <div className="space-y-4">
            <p className="text-indigo-400">
              Correo: <a href="mailto:barucramirez0617@gmail.com" className="hover:underline">barucramirez0617@gmail.com</a>
            </p>
            <p className="text-indigo-400">
              Teléfono: <a href="tel:+4651304889" className="hover:underline">+(465) 130 4889</a>
            </p>
            <p className="text-indigo-400">Redes Sociales: @RamirezTech</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;