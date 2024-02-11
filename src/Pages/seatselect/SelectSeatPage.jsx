import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Container, Row, Col,Button } from 'react-bootstrap';
import './Seatselect.css'; // Your CSS file
import NavigationBar from '../../component/NevigationBar';
import Footer from '../../component/Footer';

const SelectSeatPage = () => {
  const { busId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat click
  const handleSeatClick = (seatId) => {
    // Implement the seat click functionality
  };

  // Create a component to represent individual seats
  const Seat = ({ number, status }) => (
    <Badge
      pill
      bg={selectedSeats.includes(number) ? 'success' : status === 'booked' ? 'secondary' : 'primary'}
      onClick={() => status === 'available' && handleSeatClick(number)}
      className={`seat ${status}`}
    >
      {number}
    </Badge>
  );

  return (
    <>
    <NavigationBar/>
    <Container className="select-seat-page">
      <Row >
        <Col md={8} className="bus-container">
          <div className="bus">
            <div className="bus-section entrance">Entrance</div>
            <Row className="justify-content-center">
              <Col xs={5}>
                <div className="seats-column">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="seats-row">
                      <Seat number={2 * i + 1} status="available" />
                      <Seat number={2 * i + 2} status="available" />
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs={7}>
                <div className="seats-column">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="seats-row">
                      <Seat number={11 + 3 * i} status="available" />
                      <Seat number={12 + 3 * i} status="available" />
                      <Seat number={13 + 3 * i} status="available" />
                    </div>
                  ))}
                  <div className="seats-row exit-row">
                    <Seat number={23} status="available" />
                    <Seat number={24} status="available" />
                    <Seat number={25} status="available" />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="bus-section exit">Exit</div>
            <Row className="justify-content-center last-row">
              <Col xs={5}>
                <Seat number={26} status="available" />
                <Seat number={27} status="available" />
              </Col>
              <Col xs={7}>
                <Seat number={28} status="available" />
                <Seat number={29} status="available" />
                <Seat number={30} status="available" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4}>
          <div className="checkout-section">
            <h4>Bus No: {busId}</h4>
            <div>Please select your seats for reservation</div>
            <Badge pill bg="primary" className="m-1">Available</Badge>
            <Badge pill bg="secondary" className="m-1">Booked</Badge>
            <Badge pill bg="success" className="m-1">Selected</Badge>
            <div className="mt-3">
              <h5>Price per seat: Rs. 60.00</h5>
              <h5>Total: Rs. {selectedSeats.length * 60}.00</h5>
              <div className="seat-count-control">
                <Button variant="outline-primary" disabled>-</Button>
                <span className="mx-2">{selectedSeats.length}</span>
                <Button variant="outline-primary" disabled>+</Button>
              </div>
              <Button variant="primary" className="mt-2">Checkout</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default SelectSeatPage;
