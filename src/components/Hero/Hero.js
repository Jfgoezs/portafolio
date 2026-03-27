import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import miFoto from '../../assets/img/yo.jpg';
import cv from '../../assets/CvFelipeGoez.pdf';

const Hero = () => {
  const { t } = useTranslation();
  
  const userData = {
    name: t('hero.name'),
    role: t('hero.role'),
    bio: t('hero.bio'),
    funFact: t('hero.funFact'),
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Next.js", "Tailwind CSS", "Git", "Figma", "SQL", "MongoDB", "Express.js", "Python", "Django"],
    avatar: miFoto,
    cvLink: cv
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Div1: Avatar */}
          <motion.div className="bento-cell div1" variants={itemVariants}>
            <img src={userData.avatar} alt={userData.name} className="avatar" />
          </motion.div>

          {/* Div2: Nombre y rol */}
          <motion.div className="bento-cell div2" variants={itemVariants}>
            <h1>{userData.name}</h1>
            <h2>{userData.role}</h2>
          </motion.div>

          {/* Div3: Tecnologías */}
          <motion.div className="bento-cell div3" variants={itemVariants}>
            <h3>{t('hero.technologies')}</h3>
            <div className="tech-list">
              {userData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Div4: Fun Fact */}
          <motion.div className="bento-cell div4" variants={itemVariants}>
            <h3>{t('hero.funFactTitle')}</h3>
            <p>{userData.funFact}</p>
          </motion.div>

          {/* Div5: Bio */}
          <motion.div className="bento-cell div5" variants={itemVariants}>
            <h3>{t('hero.aboutMe')}</h3>
            <p>{userData.bio}</p>
          </motion.div>

          {/* Div6: CV */}
          <motion.div className="bento-cell div6" variants={itemVariants}>
            <motion.a 
              href={userData.cvLink} 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.downloadCV')}
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;