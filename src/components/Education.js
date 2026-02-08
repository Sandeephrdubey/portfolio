import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech (Computer Science & Engineering)',
      institution: 'Galgotias University',
      location: 'Greater Noida',
      period: '08/2016 - 08/2020',
      description: 'Specialized in software engineering, data structures, algorithms, and web technologies. Completed projects in mobile app development and full-stack web applications.',
      achievements: [
        'Completed major projects in React Native and web development',
        'Active participation in coding competitions and hackathons',
        'Strong foundation in computer science fundamentals',
      ],
    },
    {
      degree: 'Intermediate (Mathematics)',
      institution: 'B.B.Y. Intermediate College',
      location: 'Deoria, U.P.',
      period: '08/2014 - 08/2016',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.',
    },
  ];

  const certifications = [
    {
      title: 'GraphQL API Development',
      issuer: 'Udemy',
      year: '2024',
      description: 'Mastered GraphQL schema design, queries, mutations, subscriptions, and Apollo Client integration',
    },
    {
      title: 'System Design & Architecture',
      issuer: 'Educative',
      year: '2024',
      description: 'Scalable system design, microservices architecture, distributed systems, and design patterns',
    },
    {
      title: 'React Native Advanced Concepts',
      issuer: 'Udemy',
      year: '2023',
      description: 'Advanced React Native patterns, performance optimization, and native module integration',
    },
    {
      title: 'TypeScript Fundamentals',
      issuer: 'Pluralsight',
      year: '2022',
      description: 'Comprehensive understanding of TypeScript, type systems, and advanced features',
    },
    {
      title: 'Mobile App Development',
      issuer: 'Coursera',
      year: '2021',
      description: 'Complete mobile app development lifecycle from design to deployment',
    },
    {
      title: 'CI/CD with GitHub Actions',
      issuer: 'LinkedIn Learning',
      year: '2023',
      description: 'Automated deployment pipelines and continuous integration best practices',
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Education & Learning
        </motion.h2>

        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">
              <FaGraduationCap /> Academic Background
            </h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-details">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <div className="education-meta">
                      <span><FaCalendarAlt /> {edu.period}</span>
                      <span><FaMapMarkerAlt /> {edu.location}</span>
                    </div>
                    <p>{edu.description}</p>
                    {edu.achievements && (
                      <ul className="education-achievements">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}><FaAward /> {achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="subsection-title">
              <FaAward /> Certifications & Continuous Learning
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -5 }}
                >
                  <div className="cert-header">
                    <h4>{cert.title}</h4>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
