import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TrustSignals.css';



const TrustSignals = () => {
  return (
    <Container className="trust-signals-container py-5">
      <h2 className="text-center">Our Trust Signals</h2>
      <Row className="text-center justify-content-center mt-4">
        <Col md={3} className="trust-signal">
          <div className="trust-signal-card">
            <img src='src/assets/signals/pic1.png' alt="Secure Payment Gateway" className="trust-signal-image" />
            <h4>Secure Payment Gateway</h4>
            <p>Your payments are safe and secure with our trusted payment gateway. We use industry-leading encryption technology to protect your sensitive information.</p>
          </div>
        </Col>
        <Col md={3} className="trust-signal">
          <div className="trust-signal-card">
            <img src='src/assets/signals/pic2.png' alt="Verified Reviews" className="trust-signal-image" />
            <h4>Verified Reviews</h4>
            <p>Don't just take our word for it! Our platform features verified reviews from satisfied customers, providing authentic feedback about their experiences.</p>
          </div>
        </Col>
        <Col md={3} className="trust-signal">
          <div className="trust-signal-card">
            <img src='src/assets/signals/pic3.png' alt="24/7 Customer Support" className="trust-signal-image" />
            <h4>24/7 Customer Support</h4>
            <p>Need assistance? Our dedicated customer support team is available around the clock to answer your questions and address any concerns.</p>
          </div>
        </Col>
        <Col md={3} className="trust-signal">
          <div className="trust-signal-card">
            <img src='src/assets/signals/pic4.png'alt="Money-Back Guarantee" className="trust-signal-image" />
            <h4>Money-Back Guarantee</h4>
            <p>We stand behind our service. If you're not satisfied with your booking experience, we offer a money-back guarantee for added peace of mind.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrustSignals;
