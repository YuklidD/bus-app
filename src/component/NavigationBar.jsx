import React from 'react'
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'

const NavigationBar = ({ showLoginButton }) => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const isLoggedIn = username !== null

    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('permenent')
        navigate('/authentication')
        window.location.reload()
    }

    const profileImage =
        'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg'

    return (
        <Navbar
            bg="primary"
            variant="dark"
            expand="lg"
            fixed="top"
            className="navbar"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" >
                    <div className='brand-name'>
                     GoBus
                     </div>
                </Navbar.Brand>
                <Nav className="me-auto"></Nav>
                {!isLoggedIn && showLoginButton && (
                    <Link to="/authentication" className="nav-link">
                        <Button
                            variant="outline-light"
                            className="ms-lg-auto full-width-on-small login-button"
                        >
                            Login
                        </Button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            variant="outline-light"
                            id="dropdown-user"
                        >
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="rounded-circle"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '5px',
                                }}
                            />
                            {username}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/dashboard">
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/profile">
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>
                                Log out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </Container>
        </Navbar>
    )
}

// NavigationBar.defaultProps = {
//     showLoginButton: true,
//     accountFound: localStorage.getItem('username') !== null ? true : false,
// }

NavigationBar.defaultProps = {
    showLoginButton: true,
}

export default NavigationBar
