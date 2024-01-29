// Home.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import NavigationBar from './NevigationBar';
import ReservationForm from './ReservationForm';
import Footer from './Footer';

const Home = () => {
const isMobile = window.innerWidth < 768;

  return (
    <Container fluid className="p-0 home">
      <NavigationBar />
      <Container className="mt-5 pt-4">
        <ReservationForm />
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
