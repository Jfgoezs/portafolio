import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jfgoezs/",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/Jfgoezs",
      icon: "🐙"
    },
    {
      name: "Email",
      url: "jfgoezs@gmail.com",
      icon: "✉️"
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
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="contact-text"
            variants={itemVariants}
          >
            {t('contact.description')}
          </motion.p>
          
          <motion.div 
            className="contact-links"
            variants={containerVariants}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "var(--accent)",
                  color: "white"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="contact-icon">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>{t('contact.footer')}</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;