import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import NavigationBar from '../../component/NavigationBar';
import ReservationForm from '../../component/ReservationForm';
import Footer from '../../component/Footer';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie-bus.json'; // Your Lottie file
import FindIcon from "../../assets/icons/find.svg";
import SelectIcon from "../../assets/icons/select.svg";
import ReserveIcon from "../../assets/icons/reserve.svg";



const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  

  return (
    <Container fluid className="p-0 home">
      <NavigationBar />
      {/* Row for reservation form, GIF, and image content */}
      <Row className="mt-5 pt-4 align-items-start">
        <Col md={6} className="reservation-column">
          {/* Reservation Form and GIF */}
          <ReservationForm />
          {/* Place the GIF right under the Reservation Form */}
          <div className="lottie-animation">
          <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </Col>
        <Col md={6} className="content-column">
          {/* Right column text content extracted from the image provided */}
          <div className="detail-content">
            <h1>Your seamless journey starts here.</h1>
            <p>Reserve your bus seat hassle-free.</p>
            <div className="button-group">
            <a href="#" className="badge bg-primary rounded-pill p-2 me-1 btn-badge">
            <img src={FindIcon} alt="Find" className="icon-class" />Find
          </a>
          <a href="#" className="badge bg-secondary rounded-pill p-2 me-1 btn-badge">
            <img src={SelectIcon} alt="Select" className="icon-class" />Select
          </a>
          <a href="#" className="badge bg-success rounded-pill p-2 btn-badge">
            <img src={ReserveIcon} alt="Reserve" className="icon-class" />Reserve
          </a>
          </div>

            <p className='p1'>Experience the effortless way to book your bus seats with us. Whether you're planning a quick getaway or a cross-country adventure, our convenient service puts you in control of your journey, every step of the way.</p>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Home;
