import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> admission@example.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +1 123 456 7890</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 College Admission Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
