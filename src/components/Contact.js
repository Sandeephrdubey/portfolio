import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:dubeyhr2000@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'dubeyhr2000@gmail.com',
      link: 'mailto:dubeyhr2000@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9115056091',
      link: 'tel:+919115056091',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Noida, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          data-aos="fade-up"
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            data-aos="fade-right"
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions. Whether you're looking for a mobile app developer,
              web developer, or technical consultant, I'd love to hear from you!
            </p>
            <p>
              <strong>Available for:</strong> Full-time positions, Contract work, Freelance projects,
              Technical consulting, Code reviews, and Mentorship.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="contact-icon">
                    <item.icon />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your Message..."
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
