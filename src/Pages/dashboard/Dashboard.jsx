import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../component/NavigationBar';
import './Dashboard.css';
import Footer from '../../component/Footer';


const Dashboard = () => {
  const bookings = [
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    // Add more bookings as needed
  ];

  const bookingHistory = [
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    { route: 'Colombo → Homagama', date: '01/03' },
    // ... more booking history
  ];

  const paymentHistory = [
    { payId: '#33894', date: '01/03' },
    { payId: '#78099', date: '01/03' },
    { payId: '#32411', date: '01/03' },
    { payId: '#89894', date: '01/03' },
    { payId: '#78814', date: '02/03' },
    // ... more booking history
  ];

  return (
    <>
      {/*NavBar*/}
      <NavigationBar/>
      {/* Main Content Section */}
      <Container fluid>

        <Row>
          <Col md='6'>
            <h1>Hi Allen!</h1>
          </Col>

          <Col md="6" className="text-md-right">
            {/* Account Settings Link */}
            <a href="/account-settings" className="account-settings-link">Account Settings →</a>
          </Col>
        </Row>

        <Row>
          <Col md="6">
           {/* Upcoming Bookings Card */}
            <h5>Upcoming Bookings</h5>
            <Card className="upcoming-bookings">
              <Card.Body>
                {bookings.map((booking, index) => (
                  <div className="booking-item" key={index}>
                    <span>{booking.route}</span>
                    <span className="booking-date badge bg-info text-dark">{booking.date}</span>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        
          <Col md="6" >
            <h5 className='booking-text'>Booking History</h5>
            <Card className="booking-history">
              <Card.Body>
                  {bookingHistory.map((bookingHistory, index) => (
                  <div className="booking-item" key={index}>
                    <span>{bookingHistory.route}</span>
                    <span className="booking-date badge bg-info text-dark">{bookingHistory.date}</span>
                  </div>
                  ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col md="6">
            <h5>Payment History</h5>
            <Card className="payment-history">
              <Card.Body>
                  {paymentHistory.map((paymentHistory, index) => (
                  <div className="booking-item" key={index}>
                    <span>{paymentHistory.payId}</span>
                    <span className="booking-date badge bg-info text-dark">{paymentHistory.date}</span>
                  </div>
                  ))}
              </Card.Body>
            </Card>
          </Col>

          <Col md="6">
          {/* Useful Links Card */}
            <Card className="link-card">
             <span>Useful Links</span>
              <Card.Body>
                {/* Repeat this block for each useful link */}
                <Card.Link className='links' href="#">Feedback and Suggestions →</Card.Link>
                <Card.Link className='links' href="#">Support and Help →</Card.Link>
                <Card.Link className='links' href="#">Support and Help →</Card.Link>
                <Card.Link className='links' href="#">Security Information →</Card.Link>
                {/* ...more links */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      <Footer/>
    </>
  );
};

export default Dashboard;
