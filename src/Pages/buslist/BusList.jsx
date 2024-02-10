import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import './Buslist.css';
import NavigationBar from '../../component/NevigationBar';
import Footer from '../../component/Footer';

const BusList = () => {
  // Mock data
  const buses = [
    { id: 1, time: '10:33 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, time: '11:00 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 1, time: '10:33 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, time: '11:00 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 1, time: '10:33 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, time: '11:00 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 1, time: '10:33 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    { id: 2, time: '11:00 am', description: 'With supporting text below as a natural lead-in to additional content.' },
    
    // ...more mock bus objects
  ];

  return (
    <>
      <NavigationBar />
      {/* Add a top margin to ensure content starts below the navbar */}
      <Container className="mt-5 pt-3">
        <Row className="mb-4">
          <Col>
            <h4>Available busses on <Badge  bg="info" className="badge-custom">01/29</Badge> from <Badge bg="info" className="badge-custom">10.30 am</Badge></h4>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4">
          {buses.map((bus, index) => (
            <Col key={index}>
              <Card className="bus-card">
                <Card.Body>
                  <Card.Title className="bus-time">{bus.time}</Card.Title>
                  <Card.Text>
                    {bus.description}
                  </Card.Text>
                  <Button variant="primary" className="w-100">Reserve seat →</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BusList;
