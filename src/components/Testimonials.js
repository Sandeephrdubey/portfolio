import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Vivekanand Sharma',
      role: 'CTO, Xtended Space',
      content: 'Sandeep delivered exceptional work on our relocation platform. His attention to performance optimization and clean architecture made a significant impact on our app\'s success. The app now handles 100K+ users seamlessly.',
      rating: 5,
    },
    {
      name: 'Rahul Nakoti',
      role: 'Tech Lead, Akshamala Solutions',
      content: 'Working with Sandeep was a great experience. He consistently delivered high-quality code, implemented complex features efficiently, and always met deadlines. His expertise in Redux Toolkit and TypeScript is impressive.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Product Owner, Extrovert IT',
      content: 'Sandeep\'s expertise in React Native and backend integration helped us build a robust social media platform. His problem-solving skills are outstanding, and he always finds the most efficient solutions.',
      rating: 5,
    },
    {
      name: 'Ashok Prasad',
      role: 'Owner, Ora Finance',
      content: 'Sandeep implemented our payment integration flawlessly. His work on Razorpay integration and subscription management exceeded our expectations. The app is now processing thousands of transactions daily without any issues.',
      rating: 5,
    },
    {
      name: 'Amit Sinha',
      role: 'Founder, uStore',
      content: 'Sandeep transformed our e-commerce app with his performance optimizations. The FlatList improvements he implemented reduced load times by 40% and significantly improved user experience. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Rana Raghavendra Pratap Singh',
      role: 'Engineering Manager, Unnati Farmer App',
      content: 'Sandeep\'s work on our farmer app was exceptional. He handled complex offline functionality, API integrations, and state management beautifully. The app is now serving thousands of farmers across India.',
      rating: 5,
    },
    {
      name: 'Roushan Raj',
      role: 'DevOps Lead, Xtended Space',
      content: 'Sandeep set up our entire CI/CD pipeline using GitHub Actions. The automated deployment process he created reduced our release time by 70% and eliminated deployment errors. Outstanding work!',
      rating: 5,
    },
    {
      name: 'Nitin Pathwar',
      role: 'Product Manager, XS Sales App',
      content: 'Sandeep built our sales app from scratch with clean architecture and feature-based structure. His code quality is excellent, and the app is maintainable and scalable. A true professional!',
      rating: 5,
    },
    {
      name: 'Harsh Yadav',
      role: 'Senior Developer, Akshamala Solutions',
      content: 'Sandeep\'s knowledge of React Native Reanimated and gesture handling is top-notch. He implemented complex animations smoothly and optimized the app performance significantly. Great team player!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Client and Seniors Testimonials
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
