import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  // Datos de ejemplo - reemplaza con tus proyectos
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Una tienda online completa con carrito de compras, autenticación y pasarela de pagos.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      projectLink: "https://tu-proyecto.vercel.app",
      codeLink: "https://github.com/tuusuario/tu-proyecto",
      image: "https://via.placeholder.com/400x250" // Reemplaza con imagen real
    },
    {
      id: 2,
      title: "App de Tareas",
      description: "Aplicación para gestionar tareas con drag & drop, categorías y recordatorios.",
      stack: ["React", "Firebase", "CSS Modules"],
      projectLink: "https://tu-proyecto.vercel.app",
      codeLink: "https://github.com/tuusuario/tu-proyecto",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 3,
      title: "Clon de Spotify",
      description: "Réplica de Spotify con reproductor funcional, listas de reproducción y búsqueda.",
      stack: ["React", "Spotify API", "Styled Components"],
      projectLink: "https://tu-proyecto.vercel.app",
      codeLink: "https://github.com/tuusuario/tu-proyecto",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      Ver Proyecto
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-stack">
                  {project.stack.map((tech, index) => (
                    <span key={index} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;