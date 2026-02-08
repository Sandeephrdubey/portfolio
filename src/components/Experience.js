import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior React Native Developer',
      company: 'Xtended Space',
      location: 'Noida',
      period: '01/2025 - Present',
      description: [
        'Led end-to-end development using scalable, feature-based architecture with TypeScript and strict linting (ESLint + Prettier)',
        'Architected multi-step booking flows with complex state management using Redux Toolkit, implementing async flows with createAsyncThunk',
        'Integrated AI-based image detection for automatic item identification and DigiLocker KYC with secure token-based authentication',
        'Built complete payment ecosystem (Razorpay integration) supporting one-time payments, subscriptions, token payments, and automated settlements with retry logic',
        'Optimized FlatList performance by ~40% using memoization (useMemo, useCallback), keyExtractor, and getItemLayout for smooth scrolling',
        'Implemented React Native Reanimated v2 for smooth transitions, bottom sheets, and gesture-based interactions',
        'Developed offline-first architecture with cached API responses, retry mechanisms, and graceful offline UI handling',
        'Managed CI/CD pipelines using GitHub Actions, configured environment-specific builds (dev/staging/prod), and handled App Store/Play Store releases',
        'Took ownership of critical modules: booking systems, payment flows, KYC verification, push notifications, and real-time order tracking',
      ],
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Reanimated', 'Razorpay', 'AI/ML', 'CI/CD', 'Offline Handling'],
    },
    {
      title: 'Software Developer',
      company: 'Extrovert Information Technology',
      location: 'Delhi',
      period: '01/2024 - 12/2024',
      description: [
        'Built scalable social media platform using clean architecture with feature-based folder structure and reusable components',
        'Implemented real-time chat with Firebase Realtime Database, managing authentication, secure token storage (Keychain/Keystore), and refresh token handling',
        'Developed complex event hosting flows with multi-step forms, real-time updates, and friend management using optimized state management',
        'Integrated deep linking and universal links with proper routing, handling edge cases and improving conversion rates by 25%',
        'Optimized list rendering performance using FlatList optimizations and memoization techniques for smooth user experience',
        'Implemented proper error handling strategy with global error boundaries, API retry logic, and user-friendly error messages',
        'Collaborated with UI/UX designers to implement pixel-perfect designs with smooth animations using React Native Reanimated',
      ],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Reanimated', 'Deep Linking', 'Performance Optimization'],
    },
    {
      title: 'Software Engineer',
      company: 'Akshamala Solutions Pvt. Ltd. (Unnati)',
      location: 'Noida',
      period: '12/2021 - 01/2024',
      description: [
        'Developed production-ready agri e-commerce app using TypeScript, implementing clean architecture with proper separation of concerns (UI → Domain → Data)',
        'Built complex multi-step checkout flow with form validation, address auto-fill via pincode API, and optimized payment integration with Razorpay SDK',
        'Implemented fintech loan processing system with automated eligibility checks, document verification (image upload with FormData), instant approvals, and disbursement workflows',
        'Integrated Razorpay for one-time payments and subscriptions, handling payment status, failure flows, retry logic, and receipt generation',
        'Optimized app startup performance by implementing code splitting, lazy loading, and reducing initial bundle size by 30%',
        'Built offline-first features with cached responses, network detection, and graceful degradation when offline',
        'Implemented document scanner using native camera libraries with QR code processing, image compression, and secure file uploads',
        'Set up CI/CD pipeline for automated testing and deployment, managed Git workflows with structured branching strategies',
        'Improved list rendering performance by implementing FlatList optimizations, reducing scroll jank and improving UX metrics',
      ],
      technologies: ['React Native', 'TypeScript', 'Razorpay', 'Firebase', 'Native Modules', 'Performance Optimization', 'CI/CD'],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
