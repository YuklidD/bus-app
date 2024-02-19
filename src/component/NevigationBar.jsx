// NavigationBar.jsx

import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import UserProfile from './Profile'

const NavigationBar = ({ showLoginButton, accountFound = false }) => {
    return (
        <Navbar
            bg="primary"
            variant="dark"
            expand="lg"
            fixed="top"
            className="navbar"
        >
            <Container>
                <Navbar.Brand href="/">Bus Schedule</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    {!accountFound && showLoginButton && (
                        <Link to="/login" className="nav-link">
                            <Button
                                variant="outline-light"
                                className="ms-lg-auto full-width-on-small"
                            >
                                Login
                            </Button>
                        </Link>
                    )}

                    {accountFound && (
                        <UserProfile
                            profilePhoto={
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSMMPZEeJwrNdx6iX_w9HNxYe74RGZgv_QQ&usqp=CAU'
                            }
                            username={localStorage.getItem('username')}
                        ></UserProfile>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// Set default props in case the prop isn't passed
NavigationBar.defaultProps = {
    showLoginButton: true,
    accountFound: localStorage.getItem('username') !== null ? true : false,
}

export default NavigationBar
