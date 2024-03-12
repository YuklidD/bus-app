import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Badge, Container, Row, Col, Button } from 'react-bootstrap'
import './Seatselect.css'
import NavigationBar from '../../component/NavigationBar'
import Footer from '../../component/Footer'
import api from '../../axiosConfig'

const SelectSeatPage = () => {
    // Get data from useParams and parse it
    const { data } = useParams()
    const decodedData = decodeURIComponent(data)
    const parsedData = JSON.parse(decodedData)
    const [busId, setBusId] = useState('')

    useEffect(() => {
        try {
            const response = api.get(`bus/${parsedData.busId}`)
            response.then((resData, err) => {
                setBusId(resData.data.number)
            })
        } catch (error) {
            console.error('Error parsing data:', error)
            // Handle parsing error here, such as showing an error message to the user
        }
    }, [data]) // useEffect will run whenever data changes

    const [bookedSeats, setBookedSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleSeatClick = (seatNumber, currentStatus) => {
        if (
            !selectedSeats.includes(seatNumber) &&
            currentStatus === 'available'
        ) {
            setSelectedSeats([...selectedSeats, seatNumber])
        } else if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(
                selectedSeats.filter((seat) => seat !== seatNumber)
            )
        }
    }

    // Improved function to handle adding a seat (adds only one seat)
    const handleAddSeat = () => {
        if (bookedSeats.length < 30 && selectedSeats.length < 30) {
            const availableSeats = Array.from(
                { length: 30 },
                (_, index) => index + 1
            ).filter(
                (seat) =>
                    !bookedSeats.includes(seat) && !selectedSeats.includes(seat)
            )
            if (availableSeats.length > 0) {
                setSelectedSeats([...selectedSeats, availableSeats[0]])
            }
        }
    }

    // Improved function to handle removing a seat (removes only one seat)
    const handleRemoveSeat = () => {
        if (selectedSeats.length > 0) {
            setSelectedSeats(selectedSeats.slice(0, selectedSeats.length - 1))
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
                                    {busId}
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
                                        Rs. {parsedData.price}.00
                                    </Badge>
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>
                                        Total:{' '}
                                        <span className="total-amount">
                                            Rs.{' '}
                                            {selectedSeats.length *
                                                parsedData.price}
                                            .00
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
                                            {selectedSeats.length}
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
