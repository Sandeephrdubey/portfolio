import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaFire,
  FaMobile,
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaRocket,
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiSpring,
  SiExpo,
  SiAndroid,
  SiApple,
  SiNextdotjs,
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core & Architecture',
      icon: FaMobile,
      skills: [
        { name: 'React Native', icon: SiReact, level: 95 },
        { name: 'React.js', icon: SiReact, level: 92 },
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'GraphQL', icon: SiGraphql, level: 85 },
        { name: 'System Design', icon: FaCode, level: 88 },
        { name: 'Clean Architecture', icon: FaCode, level: 90 },
        { name: 'Feature-Based Structure', icon: FaCode, level: 88 },
        { name: 'Redux Toolkit', icon: SiRedux, level: 92 },
        { name: 'Zustand', icon: FaCode, level: 85 },
        { name: 'React Query', icon: FaCode, level: 85 },
        { name: 'Reusable Components', icon: FaCode, level: 90 },
      ],
    },
    {
      title: 'Advanced Features',
      icon: FaServer,
      skills: [
        { name: 'Reanimated v2/v3', icon: FaCode, level: 88 },
        { name: 'Gesture Handler', icon: FaCode, level: 85 },
        { name: 'Payment Integration', icon: FaCode, level: 92 },
        { name: 'Subscriptions', icon: FaCode, level: 88 },
        { name: 'GraphQL APIs', icon: SiGraphql, level: 85 },
        { name: 'REST APIs', icon: FaCode, level: 95 },
        { name: 'Microservices', icon: FaCode, level: 80 },
        { name: 'Offline Handling', icon: FaCode, level: 85 },
        { name: 'Deep Linking', icon: FaCode, level: 90 },
        { name: 'Push Notifications', icon: FaCode, level: 90 },
        { name: 'Native Modules', icon: FaCode, level: 80 },
      ],
    },
    {
      title: 'Performance & Quality',
      icon: FaRocket,
      skills: [
        { name: 'FlatList Optimization', icon: FaCode, level: 92 },
        { name: 'Memoization', icon: FaCode, level: 90 },
        { name: 'Image Caching', icon: FaCode, level: 88 },
        { name: 'Code Splitting', icon: FaCode, level: 85 },
        { name: 'Database Optimization', icon: FaDatabase, level: 85 },
        { name: 'Error Handling', icon: FaCode, level: 90 },
        { name: 'ESLint + Prettier', icon: FaCode, level: 88 },
        { name: 'Testing (Jest)', icon: FaCode, level: 75 },
        { name: 'System Performance', icon: FaCode, level: 88 },
      ],
    },
    {
      title: 'Web Development',
      icon: FaReact,
      skills: [
        { name: 'React.js', icon: SiReact, level: 92 },
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'SSR/SSG', icon: FaCode, level: 85 },
        { name: 'SEO Optimization', icon: FaCode, level: 85 },
        { name: 'Responsive Design', icon: FaCode, level: 90 },
        { name: 'Web Performance', icon: FaCode, level: 88 },
        { name: 'API Integration', icon: FaCode, level: 92 },
      ],
    },
    {
      title: 'DevOps & Deployment',
      icon: FaCloud,
      skills: [
        { name: 'CI/CD Pipelines', icon: FaCloud, level: 88 },
        { name: 'GitHub Actions', icon: FaGitAlt, level: 85 },
        { name: 'App Store Release', icon: SiApple, level: 92 },
        { name: 'Play Store Release', icon: SiAndroid, level: 92 },
        { name: 'Web Deployment', icon: FaCloud, level: 88 },
        { name: 'TestFlight', icon: SiApple, level: 90 },
        { name: 'Environment Configs', icon: FaCode, level: 88 },
        { name: 'Versioning', icon: FaCode, level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        {React.createElement(skill.icon, { size: 20 })}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
