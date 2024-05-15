import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardGallery.css';

// CARD component to display individual card
function CARD({ cardData }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={cardData.imagePath} alt="Card image" />
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text className='text'>
          {cardData.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Array of objects, each representing a card with its imagePath, title, and text
const cards = [
  {
    imagePath: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2VLZzQdk02iRdf9q1X1x2n4HqjBwNTwJbv34kYXRy3pLtJyIJ",
    title: "Convenience",
    text: "Our user-friendly platform makes it easy to search, book, and manage your bus reservations online."
  },
  {
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdm4zstBLVRkDVzUUswLKByxKifPDh928WiOcVnDtblN7U4FP",
    title: "Selection",
    text: "Choose from a wide range of bus operators and routes to find the perfect ride for your journey."
  },
  {
    imagePath: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMBEk86xaQ4hF5Hvd99zcXtSJDVO2BRJ6O0_xyzpEcLTeOoJcU",
    title: "Security",
    text: "Your payments are secure with our trusted payment gateway. Safe and hassle-free booking experience."
  },
  {
    imagePath: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSou44iuuaETdEb5r8i4yrAYNDeGxIqQu2J6m_sTZtPfxxanea",
    title: "Customer Support",
    text: "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns."
  },
];

// CardGallery component that maps each object in the cards array to a CARD component
function CardGallery() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 card-gallery">
      {cards.map((cardData, index) => (
        <Col key={index}>
          <CARD cardData={cardData} />
        </Col>
      ))}
    </Row>
  );
}

export default CardGallery;
