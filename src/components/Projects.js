import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaAppStore, FaGlobe } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Xtended Space',
      description: 'A full-scale relocation and storage platform enabling users to discover services, manage bookings, and track orders through a seamless mobile experience.',
      problem: 'Build a scalable platform handling complex booking flows, payments, and real-time tracking',
      solution: 'Implemented clean architecture with TypeScript, Redux Toolkit for state management, and optimized performance using FlatList optimizations',
      challenges: [
        'Multi-step booking flow with complex state management',
        'Payment integration with subscriptions and token payments',
        'AI-based image detection for item identification',
        'Real-time order tracking with offline support',
      ],
      achievements: [
        '40% performance improvement in list rendering',
        'Seamless payment flows with retry logic',
        'Production-ready with CI/CD pipeline',
        'Published on both App Store and Play Store',
      ],
      features: [
        'Clean Architecture with TypeScript',
        'Redux Toolkit with async flows',
        'AI-based image detection',
        'Complete payment ecosystem (Razorpay)',
        'Real-time tracking with offline support',
        'DigiLocker KYC integration',
        'React Native Reanimated animations',
        'Push notifications',
      ],
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Reanimated', 'Razorpay', 'AI/ML', 'CI/CD'],
      links: {
        android: 'https://play.google.com/store/search?q=xtended%20space&c=apps&hl=en_IN',
        ios: 'https://apps.apple.com/in/app/xtended-space/id1671530684',
      },
      color: '#4a90e2',
    },
    {
      title: 'XS Sales App',
      description: 'An in-house sales enablement app that records customer calls on the device and automatically syncs recordings to the CRM, clearing local storage after successful upload.',
      problem: 'Need to record calls, sync to backend, and analyze quality without impacting device performance',
      solution: 'Built native module for call recording, implemented background sync with retry logic, and integrated AI analysis API',
      challenges: [
        'Native call recording on both iOS and Android',
        'Background sync without draining battery',
        'Large file uploads with progress tracking',
        'AI integration for call analysis',
      ],
      achievements: [
        'Efficient background processing',
        'Automatic storage management',
        'Real-time sync status',
        'AI-powered quality scoring',
      ],
      features: [
        'Native call recording module',
        'Background sync with retry logic',
        'File upload with FormData',
        'AI-based call analysis',
        'Quality and performance metrics',
        'Automatic storage cleanup',
        'Offline queue management',
      ],
      technologies: ['React Native', 'Native Modules', 'Background Tasks', 'AI Integration', 'File Upload'],
      links: {},
      color: '#7b68ee',
    },
    {
      title: 'uStore',
      description: 'A digital agri e-commerce platform that allows farmers and retailers to discover, order, and purchase agricultural products with seamless billing and payment flows.',
      problem: 'Build an e-commerce platform optimized for rural users with offline support and local language',
      solution: 'Implemented offline-first architecture, multi-language support, and optimized for low-end devices',
      challenges: [
        'Offline shopping cart and order management',
        'Multi-language support with RTL',
        'Optimization for low-end Android devices',
        'Real-time inventory sync',
      ],
      achievements: [
        'Works seamlessly offline',
        'Supports 5+ local languages',
        'Optimized for 2GB RAM devices',
        'Real-time weather integration',
      ],
      features: [
        'Offline-first architecture',
        'Multi-language support (i18n)',
        'Real-time weather API',
        'Razorpay payment integration',
        'Smart search with filters',
        'Optimized for low-end devices',
        'Image caching and compression',
      ],
      technologies: ['React Native', 'Offline Handling', 'i18n', 'Razorpay', 'Performance Optimization'],
      links: {
        android: 'https://play.google.com/store/search?q=ustore&c=apps&hl=en_IN',
      },
      color: '#9b59b6',
    },
    {
      title: 'Unnati Farmer App',
      description: 'A smart agri-tech mobile solution to help farmers manage crop health and daily farm activities using technology-driven insights.',
      problem: 'Help farmers identify crop diseases using AI and provide treatment recommendations with e-commerce integration',
      solution: 'Built image upload with compression, integrated AI/ML API for disease detection, and seamless e-commerce flow',
      challenges: [
        'Image upload with compression for slow networks',
        'AI/ML API integration for disease detection',
        'Multi-step treatment recommendation flow',
        'E-commerce integration with cart management',
      ],
      achievements: [
        '90%+ accurate disease detection',
        'Reduced image upload time by 60%',
        'Seamless purchase flow',
        'Used by 10K+ farmers',
      ],
      features: [
        'Image upload with compression',
        'AI-based disease detection',
        'Treatment recommendations',
        'E-commerce integration',
        'Farm activity tracking',
        'Weather insights',
        'Push notifications',
      ],
      technologies: ['React Native', 'Image Processing', 'AI/ML', 'E-commerce', 'File Upload'],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.aspl.unnati&hl=en_IN',
      },
      color: '#00d4ff',
    },
    {
      title: 'Ora Finance App',
      description: 'A comprehensive finance solution with supply chain, overdraft, and EMI-based finance modules.',
      problem: 'Build a secure fintech app with complex loan workflows, document verification, and role-based access',
      solution: 'Implemented secure authentication, document upload/verification, dynamic UI based on roles, and complex financial calculations',
      challenges: [
        'Secure document upload and verification',
        'Complex loan calculation logic',
        'Role-based dynamic menu system',
        'Multi-step loan application flow',
      ],
      achievements: [
        'Secure document handling',
        'Dynamic role-based UI',
        'Complex financial calculations',
        'Production-ready fintech app',
      ],
      features: [
        'Secure authentication (JWT)',
        'Document upload & verification',
        'Digital agreement (e-Sign)',
        'Role-based authorization',
        'Dynamic menu system',
        'Loan calculation engine',
        'Reports and analytics',
        'Multi-step workflows',
      ],
      technologies: ['React Native', 'Fintech', 'Document Verification', 'JWT Auth', 'Role-Based Access'],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.app.orafinancecustomer&hl=en_IN',
      },
      color: '#ff6b6b',
    },
    {
      title: 'Xtended Space Website',
      description: 'A modern, responsive website for India\'s #1 rated storage and relocation service platform, featuring service discovery, booking flows, and corporate showcase.',
      problem: 'Build a high-performance, SEO-optimized website with smooth user experience and conversion-focused design',
      solution: 'Developed using Next.js with SSR/SSG for optimal performance, implemented responsive design, and integrated smooth animations',
      challenges: [
        'SEO optimization for better search rankings',
        'Responsive design for all devices',
        'Fast page load times',
        'Smooth animations and transitions',
        'Service booking flow integration',
      ],
      achievements: [
        'High-performance website with Next.js',
        'SEO optimized for better visibility',
        'Responsive across all devices',
        'Smooth user experience',
        'Corporate client showcase',
      ],
      features: [
        'Next.js with SSR/SSG',
        'React.js components',
        'Responsive design',
        'SEO optimization',
        'Smooth animations',
        'Service discovery',
        'Area calculator',
        'Corporate showcase',
        'Contact forms',
      ],
      technologies: ['Next.js', 'React.js', 'TypeScript', 'SSR/SSG', 'SEO', 'Responsive Design'],
      links: {
        website: 'https://www.xtendedspace.com/',
      },
      color: '#4a90e2',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div
                className="project-header"
                style={{ borderTopColor: project.color }}
              >
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Website`}
                    >
                      <FaGlobe />
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} on Google Play`}
                    >
                      <FaGooglePlay />
                    </a>
                  )}
                  {project.links.ios && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} on App Store`}
                    >
                      <FaAppStore />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              {project.problem && (
                <div className="project-section">
                  <h4>💡 Problem Statement</h4>
                  <p>{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="project-section">
                  <h4>✅ Solution</h4>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="project-section">
                  <h4>🎯 Key Challenges</h4>
                  <ul>
                    {project.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.achievements && project.achievements.length > 0 && (
                <div className="project-section achievements">
                  <h4>🚀 Achievements</h4>
                  <ul>
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-features">
                <h4>⚙️ Technical Features</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
