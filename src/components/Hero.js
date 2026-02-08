import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import TypedText from './TypedText';
import '../styles/Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/sandeep-dubey-9808a2186', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:dubeyhr2000@gmail.com', label: 'Email' },
    { icon: FaPhone, url: 'tel:+919115056091', label: 'Phone' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>👋 Welcome to my Portfolio</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Sandeep Dubey</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <TypedText
              strings={[
                'Senior React Native Developer',
                'Full-Stack Developer',
                'React & Next.js Expert',
                'Performance Optimization Expert',
                'Production-Grade App Builder',
                'CI/CD & DevOps Specialist',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Building <strong>scalable, production-ready mobile apps</strong> using TypeScript, Redux Toolkit, and React Native Reanimated.
            Specialized in <strong>performance optimization</strong>, <strong>payment integrations</strong>, <strong>CI/CD pipelines</strong>, 
            and <strong>App Store deployments</strong>. Delivering reliable, high-performance solutions with clean architecture and advanced state management.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
            <a
              href="/portfolio/My Resume.pdf"
              download="Sandeep_Dubey_Resume.pdf"
              className="btn btn-outline"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-avatar">
            <div className="avatar-glow"></div>
            <div className="avatar-content">
              <div className="avatar-inner">
                <img 
                  src="/portfolio/profile-photo.png" 
                  alt="Sandeep Dubey" 
                  className="avatar-image"
                />
                <div className="avatar-ring"></div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">
                <div className="tech-icon">RN</div>
              </div>
              <div className="floating-element element-2">
                <div className="tech-icon">TS</div>
              </div>
              <div className="floating-element element-3">
                <div className="tech-icon">JS</div>
              </div>
              <div className="floating-element element-4">
                <div className="tech-icon">NX</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
