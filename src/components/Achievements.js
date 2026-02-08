import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaRocket, FaUsers, FaCode } from 'react-icons/fa';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Achieved 95% performance optimization in multiple apps through FlatList optimization and memoization techniques',
      metric: '95%',
      color: '#4a90e2',
    },
    {
      icon: FaUsers,
      title: 'User Impact',
      description: 'Built apps serving 100,000+ active users with high satisfaction ratings and positive reviews',
      metric: '100K+',
      color: '#7b68ee',
    },
    {
      icon: FaCode,
      title: 'Production Apps',
      description: 'Successfully published 12+ production-ready apps on both App Store and Play Store',
      metric: '12+',
      color: '#00d4ff',
    },
    {
      icon: FaStar,
      title: 'Code Quality',
      description: 'Maintained 98% code quality with TypeScript, ESLint, and comprehensive testing practices',
      metric: '98%',
      color: '#ff6b6b',
    },
    {
      icon: FaTrophy,
      title: 'Project Success',
      description: 'Delivered 20+ complex projects on time with zero critical bugs in production',
      metric: '20+',
      color: '#ffd700',
    },
    {
      icon: FaRocket,
      title: 'CI/CD Excellence',
      description: 'Implemented automated deployment pipelines with 99% CI/CD success rate and reduced release time',
      metric: '99%',
      color: '#9b59b6',
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Key Achievements
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="achievement-icon" style={{ background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}dd)` }}>
                <achievement.icon />
              </div>
              <div className="achievement-metric" style={{ color: achievement.color }}>
                {achievement.metric}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
