import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaRocket } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      icon: FaMobile,
      title: 'Full-Stack Development',
      description: 'React Native mobile apps & Next.js web platforms with scalable architecture and TypeScript',
    },
    {
      icon: FaServer,
      title: 'Advanced Integrations',
      description: 'Payment systems, subscriptions, AI/ML, offline handling, SEO, and native modules',
    },
    {
      icon: FaCode,
      title: 'Performance Expert',
      description: '40%+ improvements via FlatList optimization, memoization, SSR/SSG, and caching',
    },
    {
      icon: FaRocket,
      title: 'CI/CD & DevOps',
      description: 'GitHub Actions, TestFlight, Play Store releases, and automated web deployments',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text about-text-full"
            data-aos="fade-right"
          >
            <h3>Senior React Native & Web Developer</h3>
            <p>
              Full-Stack Developer with experience building <strong>scalable, production-ready mobile apps</strong> and 
              <strong> high-performance web applications</strong> using <strong>React Native</strong>, <strong>React.js</strong>, 
              <strong> Next.js</strong>, <strong>TypeScript</strong>, <strong>Redux Toolkit</strong>, <strong>Reanimated</strong>, 
              and <strong>REST APIs</strong>. Skilled in <strong>performance optimization</strong>, <strong>payment integrations</strong>, 
              <strong> multi-step flows</strong>, <strong>CI/CD</strong>, and <strong>App Store/Web deployments</strong>.
            </p>
            <p>
              I build high-quality Android, iOS applications, and web platforms using <strong>clean architecture</strong> principles, 
              <strong> feature-based folder structure</strong>, and <strong>reusable components</strong>. My work emphasizes 
              <strong> performance optimization</strong> (FlatList optimizations, memoization, SSR/SSG), <strong>advanced state management</strong> 
              (Redux Toolkit, Zustand), and <strong>production-grade features</strong> like payments, subscriptions, offline handling, 
              SEO optimization, and native module integrations.
            </p>
            <p>
              I actively collaborate through code reviews, implement <strong>proper error handling strategies</strong>, 
              and follow <strong>TypeScript best practices</strong> with strict linting. Continuously upgrading skills to deliver 
              reliable, scalable, and impactful software solutions across mobile and web platforms.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>12+</h4>
                <p>Apps Published</p>
              </div>
              <div className="stat">
                <h4>100K+</h4>
                <p>Active Users</p>
              </div>
            </div>
            
            <div className="about-expertise">
              <h4>Core Expertise Areas:</h4>
              <div className="expertise-tags">
                <span>Mobile App Development</span>
                <span>Web Development</span>
                <span>Performance Optimization</span>
                <span>Payment Integration</span>
                <span>CI/CD Pipelines</span>
                <span>Clean Architecture</span>
                <span>TypeScript</span>
                <span>State Management</span>
                <span>GraphQL</span>
                <span>System Design</span>
                <span>REST APIs</span>
                <span>Microservices</span>
                <span>DevOps</span>
                <span>Agile Methodologies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features-wrapper"
            data-aos="fade-left"
          >
            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
