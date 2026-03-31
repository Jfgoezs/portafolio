import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import app3 from '../../assets/img/app3.png';
import app2 from '../../assets/img/app2.png'

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Una tienda online completa con carrito de compras, autenticación y pasarela de pagos.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      projectLink: "https://syncro.jfgoezs.online/",
      codeLink: "https://github.com/Jfgoezs/syncro",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 2,
      title: "Syncro",
      description: "Aplicación para gestionar mi día",
      stack: ["Next.js", "React", "Prisma", "PostgreSQL (Neon)", "Ant Design", "Framer Motion", "Three.js", "Day.js", "Canvas Confetti"],
      projectLink: "https://syncro.jfgoezs.online/",
      codeLink: "https://github.com/Jfgoezs/syncro",
      image: app2
    },
    {
      id: 3,
      title: "Finanzas Mini",
      description: "Dashboard completo de finanzas personales con CRUD de transacciones, gráficos interactivos y análisis de gastos. Control total de ingresos y egresos con interfaz moderna.",
      stack: ["Next.js 14", "PostgreSQL", "Tailwind CSS", "Prisma", "Chart.js", "Framer Motion", "Ant Design"],
      projectLink: "https://finanzas-mini.jfgoezs.online/", 
      codeLink: "https://github.com/Jfgoezs/finanzas",
      image: app3
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
          {t('projects.title')}
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
                      {t('projects.viewProject')}
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      {t('projects.viewCode')}
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