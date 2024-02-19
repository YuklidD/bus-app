import React, { useState, useEffect, useRef } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    InputGroup,
    FormControl,
} from 'react-bootstrap'
import axios from 'axios' // Import axios for HTTP requests
import './Reservation.css'
import api from '../axiosConfig'

const ReservationForm = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [rawData, setRawData] = useState([])
    const [fromOptions, setFromOptions] = useState([])
    const [toOptions, setToOptions] = useState([])
    const toSelectionElement = useRef(null)

    useEffect(() => {
        const fetchFromOptions = async () => {
            try {
                const response = await api.get('route')
                setRawData(response.data)

                const uniqueFromOptions = response.data.filter(
                    (option, index, self) =>
                        index ===
                        self.findIndex((o) => o.origin === option.origin)
                )
                setFromOptions(uniqueFromOptions)

                const uniqueToOptions = response.data.filter(
                    (option, index, self) =>
                        index ===
                        self.findIndex(
                            (o) => o.destination === option.destination
                        )
                )
                setToOptions(uniqueToOptions)
            } catch (error) {
                console.error('Failed to fetch options:', error)
            }
        }

        fetchFromOptions()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent default form submission behavior

        // Construct the reservation data
        const reservationData = {
            from,
            to,
            date,
            time,
        }

        try {
            // Replace '/api/reservations' with your actual backend API endpoint for creating reservations
            const response = await axios.post(
                '/api/reservations',
                reservationData
            )

            // Optionally reset form fields here
            setFrom('')
            setTo('')
            setDate('')
            setTime('')
            // Further actions upon successful submission (e.g., show a success message)
        } catch (error) {
            console.error('Failed to submit reservation:', error)
            // Handle errors, e.g., display an error message to the user
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h5 className="destination mb-3">Route Selection</h5>
                <Row>
                    <Col xs={12} md={6}>
                        <InputGroup className="mb-3">
                            <Form.Select
                                aria-label="From"
                                value={from}
                                onChange={(e) => {
                                    setFrom(e.target.value)
                                    toSelectionElement.current.disabled = false

                                    const uniqueOptions = rawData.filter(
                                        (option, index, self) =>
                                            index ===
                                            self.findIndex(
                                                (o) =>
                                                    o.origin ===
                                                        e.target.value &&
                                                    o.destination ===
                                                        option.destination
                                            )
                                    )

                                    setToOptions(uniqueOptions)
                                }}
                            >
                                {fromOptions.map((option, index) => (
                                    <option
                                        key={option._id}
                                        value={option.origin}
                                    >
                                        {option.origin}
                                    </option>
                                ))}
                            </Form.Select>
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <InputGroup className="mb-3">
                            <Form.Select
                                aria-label="To"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                disabled={true}
                                ref={toSelectionElement}
                            >
                                {toOptions.map((option, index) => (
                                    <option key={option._id} value={option._id}>
                                        {option.destination}
                                    </option>
                                ))}
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>

                <h5 className="dateTime mb-3">Date & Time</h5>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormControl
                            type="date"
                            placeholder="Date"
                            aria-label="Date"
                            className="mb-3"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormControl
                            type="time"
                            placeholder="Time"
                            aria-label="Time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </Col>
                </Row>

                <Button
                    variant="primary"
                    size="lg"
                    className="mb-4 w-100"
                    type="submit"
                >
                    Check
                </Button>
            </Form>

            <div className="areYouASection">
                <h5 className="areYouA mb-3">Are you a bus owner?</h5>
                <Button variant="outline-primary" size="lg" className="w-100">
                    Add your bus
                </Button>
            </div>
        </>
    )
}

export default ReservationForm
