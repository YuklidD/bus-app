// NewsletterForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to backend)
    console.log('Email submitted:', email);
  };

  return (
    <Container className="newsletter-container py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Join Our Newsletter</h2>
          <p>
            Stay in the loop with our latest offers, travel tips, and updates by subscribing to our newsletter.
            Be the first to know about exclusive promotions, new routes, and exciting travel destinations.
            Simply enter your email address below to get started.
          </p>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="d-flex align-items-center">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="me-2"
              required
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </Form>
          <p className="small mt-2">
            By subscribing, you agree to receive marketing emails from [Your Company Name]. You can unsubscribe at any time.
            For more information, please read our Privacy Policy.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterForm;
