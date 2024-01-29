import React from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './Reservation.css';

const ReservationForm = () => {
  return (
    <>
    <Form>
      <h5 className="destination mb-3">Destination</h5>
      <Row>
        <Col xs={12} md={6}>
          <InputGroup className="mb-3">
            <FormControl placeholder="From" aria-label="From" />
            <Button variant="outline-secondary" id="button-addon1">
              Select
            </Button>
          </InputGroup>
        </Col>
        <Col xs={12} md={6}>
          <InputGroup className="mb-3">
            <FormControl placeholder="To" aria-label="To" />
            <Button variant="outline-secondary" id="button-addon2">
              Select
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <h5 className="dateTime mb-3">Date & Time</h5>
      <Row>
        <Col xs={12} sm={6}>
          <FormControl type="date" placeholder="Date" aria-label="Date" className="mb-3" />
        </Col>
        <Col xs={12} sm={6}>
          <FormControl type="time" placeholder="Time" aria-label="Time" />
        </Col>
      </Row>

      <Button variant="primary" size="lg" className="mb-4 w-100">
        Check
      </Button>
    </Form>

    <div className="areYouASection">
          <h5 className="areYouA mb-3">Are you a bus owner?</h5>  
          <Button variant="outline-primary" size="lg" className="w-100">
            Add your bus
          </Button>
        </div>
    </>
  );
};

export default ReservationForm;
