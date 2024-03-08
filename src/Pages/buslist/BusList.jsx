import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap'
import './Buslist.css'
import NavigationBar from '../../component/NavigationBar'
import Footer from '../../component/Footer'
import { useNavigate, useParams } from 'react-router-dom' // Import useNavigate
import api from '../../axiosConfig'

const BusList = () => {
    const navigate = useNavigate() // Initialize navigate function
    const { data } = useParams() // Get the data from URL parameters
    const decodedData = decodeURIComponent(data)
    const parsedData = JSON.parse(decodedData)
    const [buses, setBuses] = useState([])

    useEffect(() => {
        const updateBuses = async () => {
            let response = await api.get('route')
            response = response.data

            for (const key in response) {
                let element = response[key]

                if (
                    element.origin === parsedData.from &&
                    element.destination === parsedData.to
                ) {
                    response = await api.get(`schedule/${element._id}`)
                    console.log(`schedule/${element._id}`)
                    response = response.data

                    let busList = []

                    await response.forEach((schedule) => {
                        let busData = {
                            _id: schedule._id,
                            origin: element.origin,
                            destination: element.destination,
                            departure: schedule.departure,
                            arrival: schedule.arrival,
                            seats: schedule.seats,
                            price: element.price,
                        }

						const isoSeconds = isoToSeconds(schedule.departure)
                        const otherSeconds = timeToSeconds(parsedData.time)

                        if (isoSeconds > otherSeconds) {
							busList.push(busData)
						}
                    })

                    setBuses(busList)
                    break
                }
            }
        }

        updateBuses()
    }, [parsedData.from, parsedData.to]) // Add dependencies to rerun effect when these values change

    const handleReserveSeatClick = (busId) => {
        navigate(`/select-seat/${busId}`)
    }

    return (
        <>
            <NavigationBar />
            <div className="main-content">
                {' '}
                {/* Use the main-content class to flex the content */}
                <Container className="mt-5 pt-3">
                    <Row className="mb-4">
                        <Col>
                            <h4>
                                Available buses on{' '}
                                <Badge bg="info" className="badge-custom">
                                    {parsedData.date}
                                </Badge>{' '}
                                from{' '}
                                <Badge bg="info" className="badge-custom">
                                    {parsedData.time}
                                </Badge>
                            </h4>
                        </Col>
                    </Row>
                    {buses.length > 0 ? (
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {buses.map((bus) => (
                                <Col key={bus._id}>
                                    <Card className="bus-card" key={bus._id}>
                                        <Card.Body>
                                            <Card.Title className="bus-time">
                                                {bus.departure.substring(
                                                    11,
                                                    16
                                                )}
                                            </Card.Title>
                                            <Card.Text>
                                                Starting from {bus.origin} and
                                                will be arrived to{' '}
                                                {bus.destination} at about{' '}
                                                {bus.arrival.substring(11, 16)}
                                            </Card.Text>
                                            <Button
                                                variant="primary"
                                                className="w-100"
                                                onClick={() =>
                                                    handleReserveSeatClick(
                                                        bus.busId
                                                    )
                                                }
                                            >
                                                Reserve seat →
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div className="text-center">
                            <p>
                                Sorry, there are no buses available right now in
                                the route you searched.
                                <br />
                                Please try another date or change the Departure
                                & Arrival point & search again.
                            </p>
                            <p>
                                Example: Try Colombo - Badulla instead of
                                Bambalapitiya - Badulla
                            </p>
                        </div>
                    )}
                </Container>
            </div>
            <Footer />
        </>
    )
}

function isoToSeconds(isoTime) {
    const date = new Date(isoTime);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    return hours * 3600 + minutes * 60 + seconds;
}

function timeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60;
}

export default BusList
