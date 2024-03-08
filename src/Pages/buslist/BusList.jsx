import React, { useState } from 'react'
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
    const [routeId, setRouteId] = useState('')

    const updateBuses = async () => {
        let response = await api.get('route')
        response = response.data

        for (const key in response) {
            let element = response[key]

            if (
                element.origin == parsedData.from &&
                element.destination == parsedData.to
            ) {
                setRouteId(element._id)
                break
            }
        }

        response = await api.get(`bus/${routeId}`)
        response = response.data

        console.log(response)
    }

    updateBuses()

    // Mock data
    const buses = [
        {
            id: 1,
            time: '10:33 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 2,
            time: '11:00 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 3,
            time: '10:33 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 4,
            time: '11:00 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 5,
            time: '10:33 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 6,
            time: '11:00 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 7,
            time: '10:33 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
        {
            id: 8,
            time: '11:00 am',
            description:
                'With supporting text below as a natural lead-in to additional content.',
        },
    ]

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
                                Available busses on{' '}
                                <Badge bg="info" className="badge-custom">
                                    01/29
                                </Badge>{' '}
                                from{' '}
                                <Badge bg="info" className="badge-custom">
                                    10.30 am
                                </Badge>
                            </h4>
                        </Col>
                    </Row>
                    {buses.length > 0 ? (
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {buses.map((bus) => (
                                <Col key={bus.id}>
                                    <Card className="bus-card">
                                        <Card.Body>
                                            <Card.Title className="bus-time">
                                                {bus.time}
                                            </Card.Title>
                                            <Card.Text>
                                                {bus.description}
                                            </Card.Text>
                                            <Button
                                                variant="primary"
                                                className="w-100"
                                                onClick={() =>
                                                    handleReserveSeatClick(
                                                        bus.id
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

export default BusList
