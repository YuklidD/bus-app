import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Form,
    Button,
    Row,
    Col,
    InputGroup,
    FormControl,
} from 'react-bootstrap'
import axios from 'axios'
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
    const navigate = useNavigate()

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
    const handleReservationRequest = async (e) => {
        //e.preventDefault()

        const reservationData = {
            from,
            to,
            date,
            time,
        }

        try {
            if (
                from.length > 0 &&
                to.length > 0 &&
                from.length > 0 &&
                time.length > 0
            ) {
                navigate(
                    `/buslist/${encodeURIComponent(
                        JSON.stringify(reservationData)
                    )}`
                )
            }

            setFrom('')
            setTo('')
            setDate('')
            setTime('')
        } catch (error) {
            console.error('Failed to submit reservation:', error)
        }
    }

    return (
        <>
            <Form onSubmit={handleReservationRequest}>
                <h5 className="destination mb-3">Route Selection</h5>
                <Row>
                    <Col xs={12} md={6}>
                        <InputGroup className="mb-3">
                            <Form.Select
                                className="custom-select"
                                aria-label="From"
                                value={from}
                                onChange={(e) => {
                                    const selectedFrom = e.target.value
                                    setFrom(selectedFrom)
                                    toSelectionElement.current.disabled =
                                        selectedFrom === ''

                                    const uniqueOptions = rawData.filter(
                                        (option, index, self) =>
                                            index ===
                                            self.findIndex(
                                                (o) =>
                                                    o.origin === selectedFrom &&
                                                    o.destination ===
                                                        option.destination
                                            )
                                    )

                                    setToOptions(uniqueOptions)

                                    setTo('')
                                }}
                            >
                                <option value="" disabled>
                                    From
                                </option>
                                {fromOptions.map((option) => (
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
                                className="custom-select"
                                aria-label="To"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                disabled={toOptions.length === 0}
                                ref={toSelectionElement}
                            >
                                <option value="" disabled>
                                    To
                                </option>
                                {toOptions.map((option) => (
                                    <option
                                        key={option._id}
                                        value={option.destination}
                                    >
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
                <Row>
                <Col xs={12} >
                    <Button
                        variant="primary"
                        size="lg"
                        className="mb-4 w-100 button-check"
                        type="submit"
                        onClick={(e) => {
                            handleReservationRequest()
                        }}
                    >
                        Check
                    </Button>
                </Col>
            </Row>
            </Form>
        </>
    )
}

export default ReservationForm
