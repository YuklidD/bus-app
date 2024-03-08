import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap'
import './Buslist.css'
import NavigationBar from '../../component/NavigationBar'
import Footer from '../../component/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../axiosConfig'
import { formatDistance } from 'date-fns'

const BusList = () => {
    const navigate = useNavigate()
    const { data } = useParams()
    const decodedData = decodeURIComponent(data)
    const parsedData = JSON.parse(decodedData)
    const [buses, setBuses] = useState([])

    useEffect(() => {
        const updateBuses = async () => {
            try {
                let response = await api.get('route')
                response = response.data

                for (const key in response) {
                    let element = response[key]

                    if (
                        element.origin === parsedData.from &&
                        element.destination === parsedData.to
                    ) {
                        response = await api.get(`schedule/${element._id}`)
                        response = response.data

                        let busList = []

                        response.forEach((schedule) => {
                            let busData = {
                                _id: schedule._id,
                                origin: element.origin,
                                destination: element.destination,
                                departure: new Date(schedule.departure),
                                arrival: schedule.arrival,
                                seats: schedule.seats,
                                price: element.price,
                            }

                            busData.departure = new Date(busData.departure)
                            var currentDate = new Date()

                            busData.departure.setFullYear(
                                currentDate.getFullYear()
                            )
                            busData.departure.setMonth(currentDate.getMonth())
                            busData.departure.setDate(currentDate.getDate())

                            busList.push(busData)
                        })

                        // Sorting buses by departure time
                        busList.sort((a, b) => a.departure - b.departure)

                        setBuses(busList)
                        break
                    }
                }
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }

        updateBuses()
    }, [parsedData.from, parsedData.to, parsedData.time])

    const handleReserveSeatClick = (busId) => {
        navigate(`/select-seat/${busId}`)
    }

    return (
        <>
            <NavigationBar />
            <div className="main-content">
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
                                                {bus.departure
                                                    .toString()
                                                    .substring(16, 21)}
                                                {' • '}
                                                <span className="timestamp">
                                                    {formatDistance(
                                                        new Date(bus.departure),
                                                        new Date(),
                                                        {
                                                            addSuffix: true,
                                                        }
                                                    )}
                                                </span>
                                            </Card.Title>
                                            <Card.Text>
                                                Departing from {bus.origin}, the
                                                journey is expected to reach{' '}
                                                {bus.destination} around{' '}
                                                {bus.arrival.substring(11, 16)}.
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
                                the route you searched. <br />
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

// Function to convert ISO time to seconds
function isoToSeconds(isoTime) {
    const date = new Date(isoTime)
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    return hours * 3600 + minutes * 60 + seconds
}

// Function to convert time string to seconds
function timeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60
}

export default BusList
