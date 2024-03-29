import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h5><Link to="/authentication" className="footer-link ">Login</Link></h5> {/* Make "Login" a link */}
            <ul className='lists'>
              <li><Link to="/send-ticket" className="footer-link">Send Ticket</Link></li> {/* Assuming "/send-ticket" is the route */}
              <li><Link to="/transfer-ticket" className="footer-link">Transfer Ticket</Link></li> {/* Assuming "/transfer-ticket" is the route */}
              
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h5>FAQ</h5>
            <ul className='lists'>
              <li><Link to="/terms-and-conditions" className="footer-link">T & C</Link></li> {/* Assuming "/terms-and-conditions" is the route */}
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li> {/* Assuming "/privacy-policy" is the route */}
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h5>Download On</h5>
            <div className="icon-pack download-icons social-icons ">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAppStore} size="2x"  className="icons" /></a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGooglePlay} size="2x" className="icons" /></a>
            

            </div>
            <h5>Connect With Us</h5>
            <div className="icon-pack social-icons ">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x"  className="icons"/></a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2x"  className="icons" /></a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            <h5>Contact Us</h5>
            <div className="lists">
            <p><FontAwesomeIcon icon={faPhone} className="icon-phone" />000 000 000</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="icon-envelope" /><a href="mailto:help@gobus.com" className="footer-email">help@gobus.com</a></p>


            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <p>© 2024 React Rangers. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
