import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>
              © {currentYear} Sandeep Dubey. Made with <FaHeart className="heart-icon" /> using React & Next.js
            </p>
            <p className="footer-tagline">
              Building scalable, production-ready applications with passion and precision.
            </p>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
