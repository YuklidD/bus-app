import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import './Seatselect.css'
import NavigationBar from '../../component/NavigationBar'
import Footer from '../../component/Footer'

const SelectSeatPage = () => {
    const { data } = useParams()
    const decodedData = decodeURIComponent(data)
    const parsedData = JSON.parse(decodedData)
    const [bookedSeats, setBookedSeats] = useState([5])
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleSeatClick = (seatNumber, currentStatus) => {
        if (
            !selectedSeats.includes(seatNumber) &&
            currentStatus == 'available'
        ) {
            setSelectedSeats([...selectedSeats, seatNumber])
        } else if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat != seatNumber))
        }
    }

    // Example function to handle adding a seat (this might not directly correlate with selecting a seat visually)
    const handleAddSeat = () => {
        if (bookedSeats.length < MAX_SEATS) {
            // Assume MAX_SEATS is defined somewhere
            // Logic to add a seat
        }
    }

    // Example function to handle removing a seat
    const handleRemoveSeat = () => {
        if (bookedSeats.length > 0) {
            setBookedSeats(bookedSeats.slice(0, -1)) // Removes the last seat from the selection
        }
    }

    // Create a component to represent individual seats
    const Seat = ({ number, status }) => (
        <Badge
            pill
            className={
                status === 'booked'
                    ? 'seat booked'
                    : selectedSeats.includes(number)
                    ? 'seat selected'
                    : 'seat available'
            }
            onClick={() =>
                status !== 'booked' && handleSeatClick(number, status)
            }
        >
            {number}
        </Badge>
    )

    return (
        <>
            <NavigationBar />
            <Container className="select-seat-page">
                <Row>
                    <Col md={8} className="bus-container">
                        <div className="bus">
                            <div className="bus-section entrance">Entrance</div>
                            <Row className="justify-content-center">
                                <Col xs={5}>
                                    <div className="seats-column">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <div key={i} className="seats-row">
                                                <Seat
                                                    number={2 * i + 1}
                                                    status={
                                                        bookedSeats.includes(
                                                            2 * i + 1
                                                        )
                                                            ? 'booked'
                                                            : 'available'
                                                    }
                                                />
                                                <Seat
                                                    number={2 * i + 2}
                                                    status={
                                                        bookedSeats.includes(
                                                            2 * i + 2
                                                        )
                                                            ? 'booked'
                                                            : 'available'
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col xs={7}>
                                    <div className="seats-column">
                                        {Array.from({ length: 4 }, (_, i) => (
                                            <div key={i} className="seats-row">
                                                <Seat
                                                    number={11 + 3 * i}
                                                    status={
                                                        bookedSeats.includes(
                                                            11 + 3 * i
                                                        )
                                                            ? 'booked'
                                                            : 'available'
                                                    }
                                                />
                                                <Seat
                                                    number={12 + 3 * i}
                                                    status={
                                                        bookedSeats.includes(
                                                            12 + 3 * i
                                                        )
                                                            ? 'booked'
                                                            : 'available'
                                                    }
                                                />
                                                <Seat
                                                    number={13 + 3 * i}
                                                    status={
                                                        bookedSeats.includes(
                                                            13 + 3 * i
                                                        )
                                                            ? 'booked'
                                                            : 'available'
                                                    }
                                                />
                                            </div>
                                        ))}
                                        <div className="seats-row exit-row">
                                            <Seat
                                                number={23}
                                                status={
                                                    bookedSeats.includes(23)
                                                        ? 'booked'
                                                        : 'available'
                                                }
                                            />
                                            <Seat
                                                number={24}
                                                status={
                                                    bookedSeats.includes(24)
                                                        ? 'booked'
                                                        : 'available'
                                                }
                                            />
                                            <Seat
                                                number={25}
                                                status={
                                                    bookedSeats.includes(25)
                                                        ? 'booked'
                                                        : 'available'
                                                }
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bus-section exit">Exit</div>
                            <Row className="justify-content-center last-row">
                                <Col xs={5}>
                                    <Seat
                                        number={26}
                                        status={
                                            bookedSeats.includes(26)
                                                ? 'booked'
                                                : 'available'
                                        }
                                    />
                                    <Seat
                                        number={27}
                                        status={
                                            bookedSeats.includes(27)
                                                ? 'booked'
                                                : 'available'
                                        }
                                    />
                                </Col>
                                <Col xs={7}>
                                    <Seat
                                        number={28}
                                        status={
                                            bookedSeats.includes(28)
                                                ? 'booked'
                                                : 'available'
                                        }
                                    />
                                    <Seat
                                        number={29}
                                        status={
                                            bookedSeats.includes(29)
                                                ? 'booked'
                                                : 'available'
                                        }
                                    />
                                    <Seat
                                        number={30}
                                        status={
                                            bookedSeats.includes(30)
                                                ? 'booked'
                                                : 'available'
                                        }
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} lg={3} xl={2}>
                        <div className="checkout-section">
                            <h4>
                                Bus No:{' '}
                                <Badge
                                    className="custom-busId-badge"
                                    pill
                                    bg="secondary"
                                >
                                    258AN
                                </Badge>
                            </h4>
                            <div>Please select your seats for reservation</div>
                            <Badge
                                pill
                                bg="primary"
                                className="m-1 available-badge"
                            >
                                Available
                            </Badge>
                            <Badge
                                pill
                                bg="secondary"
                                className="m-1 booked-badge"
                            >
                                Booked
                            </Badge>
                            <Badge
                                pill
                                bg="success"
                                className="m-1 selected-badge"
                            >
                                Selected
                            </Badge>
                            <div className="price-section">
                                {' '}
                                {/* Removed mt-3 for top margin */}
                                <h5>
                                    Price per seat:
                                    <Badge
                                        pill
                                        bg="secondary"
                                        className="ms-2 price-badge"
                                    >
                                        Rs. 60.00
                                    </Badge>
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>
                                        Total:{' '}
                                        <span className="total-amount">
                                            Rs. {bookedSeats.length * 60}.00
                                        </span>
                                    </h5>
                                    <div className="seat-count-control d-flex align-items-center">
                                        <Button
                                            variant="outline-primary"
                                            onClick={handleRemoveSeat}
                                            className="seat-control-button mx-1"
                                        >
                                            -
                                        </Button>
                                        <div className="count mx-2">
                                            {bookedSeats.length}
                                        </div>
                                        <Button
                                            variant="outline-primary"
                                            onClick={handleAddSeat}
                                            className="seat-control-button mx-1"
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    variant="primary"
                                    className="checkout-button"
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default SelectSeatPage
