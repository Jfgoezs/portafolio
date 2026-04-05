import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiFigma,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiTypescript,
  SiJest,
  SiPrisma
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon size={48} />
              </div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;