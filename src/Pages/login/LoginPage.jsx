import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import NavigationBar from '../../component/NavigationBar'
import './Login.css'
import AlertModal from '../../Modal/AlertModal'
import Footer from '../../component/Footer'
import RegistrationForm from './RegistrationForm' // The registration form component
import LoginForm from './LoginForm'

const LoginPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const [showRegistration, setShowRegistration] = useState(false)

    const switchToRegister = () => {
        setShowRegistration(true)
    }

    const switchToLogin = () => {
        setShowRegistration(false)
    }

    return (
        <>
            <NavigationBar showLoginButton={false} />
            <div className="login-page">
                <Row className="justify-content-center align-items-stretch min-vh-100 m-0">
                    <Col
                        xs={12}
                        md={6}
                        className="auth-section d-flex align-items-center justify-content-center px-0"
                    >
                        {showRegistration ? (
                            <RegistrationForm onSwitchToLogin={switchToLogin} />
                        ) : (
                            <LoginForm onSwitchToRegister={switchToRegister} />
                        )}
                    </Col>
                    <Col md={6} className="image-section p-0 d-none d-md-block">
                        {' '}
                        {/* p-0 removes padding */}
                        <img
                            src="src\assets\busLogin.png"
                            alt="Login Visual"
                            className="img-fluid w-100 h-100"
                        />{' '}
                        {/* w-100 and h-100 make the image full width and height */}
                    </Col>
                </Row>
            </div>
            <AlertModal
                show={showModal}
                handleClose={handleCloseModal}
                message="Password reset functionality needs to be implemented on the backend."
            />
            <Footer />
        </>
    )
}

export default LoginPage
