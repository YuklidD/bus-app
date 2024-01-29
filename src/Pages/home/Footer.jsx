import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-section">
            {/* Assuming column 1 content */}
            <h5>Login</h5>
            <ul>
              <li>Send Ticket</li>
              <li>Transfer Ticket</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            {/* Assuming column 2 content */}
            <h5>FAQ</h5>
            <ul>
              <li>T & C</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            {/* Assuming column 3 content */}
            <h5>DOWNLOAD ON</h5>
            <div className="icon-pack">
              <FontAwesomeIcon icon={faAppStore} size="2x" />
              <FontAwesomeIcon icon={faGooglePlay} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-section">
            {/* Assuming column 4 content */}
            <p>Company Address Here</p>
            <p>Hotline: 1315</p>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <p>©2024 Company Name. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
