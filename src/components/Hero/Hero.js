import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import miFoto from '../../assets/img/yo.jpg';
import cvEs from '../../assets/CvFelipeGoez-Español.pdf';
import cvEn from '../../assets/CvFelipeGoez.pdf';

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Seleccionar el CV según el idioma actual
  const currentCV = i18n.language === 'es' ? cvEs : cvEn;

  const userData = {
    name: t('hero.name'),
    role: t('hero.role'),
    bio: t('hero.bio'),
    funFact: t('hero.funFact'),
    background: t('hero.background'),
    experiences: [
      {
        company: "Instituto Tecnológico Metropolitano (ITM)",
        role: "Desarrollador Frontend",
        period: "Mar. 2025 - Actualidad"
      },
      {
        company: "Gobernación de Antioquia",
        role: "Desarrollador Django",
        period: "Jul. 2024 - Dic. 2024"
      }
    ],
    avatar: miFoto,
    cvLink: currentCV
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

          {/* Div3: Experiencia Profesional */}
          <motion.div className="bento-cell div3" variants={itemVariants}>
            <h3>{userData.background}</h3>
            <div className="experience-list">
              {userData.experiences.map((exp, index) => (
                <React.Fragment key={index}>
                  <div className="experience-item">
                    <h4>{exp.company}</h4>
                    <p>{exp.role}</p>
                    <small>{exp.period}</small>
                  </div>
                  {index < userData.experiences.length - 1 && <br />}
                </React.Fragment>
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
              download
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