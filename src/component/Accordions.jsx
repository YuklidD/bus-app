import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css';


function Accordions() {
  const accordionsData = [
    {
      id: 1,
      header: "Search for Your Route",
      body: "Enter your starting location, destination, date, and time in the search bar on our homepage."
    },
    {
      id: 2,
      header: "Browse Available Buses",
      body: "Enter your starting location, destination, date, and time in the search bar on our homepage."
    },
    {
      id: 3,
      header: "Select Your Seat",
      body: "Choose your preferred seat from an interactive seating chart. Whether you prefer a window seat for the view or an aisle seat for easy access, the choice is yours."
    },
    {
      id: 4,
      header: "Complete Your Reservation",
      body: "Secure your seat with just a few clicks. Enter your payment details and confirm your booking to finalize your reservation."
    },
    {
      id: 5,
      header: "Receive Confirmation",
      body: "Once your reservation is confirmed, you'll receive a booking confirmation email with all the details of your journey."
    },
    {
      id: 6,
      header: "Enjoy Your Journey",
      body: "Arrive at the bus station on time, present your ticket, and board your bus with ease. Sit back, relax, and enjoy the ride to your destination."
    }
  ];
  

  return (
    <Accordion defaultActiveKey={['1']} alwaysOpen>
      {accordionsData.map((accordion) => (
        <Accordion.Item key={accordion.id} eventKey={accordion.id.toString()}>
          <Accordion.Header className="accordion-header">{accordion.header}</Accordion.Header>
          <Accordion.Body className="accordion-body">{accordion.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Accordions;