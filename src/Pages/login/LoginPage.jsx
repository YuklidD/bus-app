import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../../component/NavigationBar';
import './Login.css';
import AlertModal from '../../Modal/AlertModal';
import Footer from '../../component/Footer';
import api from '../../axiosConfig';
import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('user/login', {
                username,
                password,
            });

            if (response.status !== 200) {
                setError('Something went wrong when logging in. Try again.');
                return;
            }

            localStorage.setItem('username', response.data.username);

            setError('');
            navigate('/');
            window.location.reload();
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    const handleGoogleLogin = async (response) => {
        const accessToken = response.accessToken; // Get the access token from Google response
    
        try {
            // Send the access token to your backend for verification and user handling
            const res = await axios.post('/api/auth/google', { accessToken });
    
            if (res.status === 200 && res.data.token) {
                // Assuming your backend responds with a token on successful authentication
                localStorage.setItem('token', res.data.token); // Store the token or other relevant data
    
                // Optionally, store other user information as needed
                // localStorage.setItem('username', res.data.username);
    
                setError(''); // Clear any previous errors
                navigate('/'); // Navigate to the homepage or dashboard
                window.location.reload(); // Optionally reload the page if needed to apply login state
            } else {
                // Handle any other responses as an error
                throw new Error('Failed to login with Google');
            }
        } catch (err) {
            console.error(err);
            setError('Google login failed. Try again.'); // Set an error message for Google login failure
        }
    };
    

    const handleForgotPassword = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <NavigationBar showLoginButton={false} />
            <div className="login-page">
                {' '}
                {/* Changed from Container to div to remove default padding */}
                <Row className="justify-content-center align-items-stretch min-vh-100 m-0">
                    {' '}
                    {/* m-0 removes default margin */}
                    <Col
                        xs={12}
                        md={6}
                        className="login-section d-flex align-items-center justify-content-center px-0"
                    >
                        <Form
                            className="login-form text-center"
                            onSubmit={handleLogin}
                        >
                            <h2>Welcome back!</h2>
                            <p>Login to get your seats reserved.</p>
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}
                            <Form.Group
                                controlId="formBasicEmail"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formBasicPassword"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex justify-content-between">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    checked={remember}
                                    onChange={(e) => {
                                        setRemember(e.target.checked)
                                    }}
                                />
                                <Link
                                    to="/forgot-password"
                                    onClick={handleForgotPassword}
                                    className="forgot-password"
                                >
                                    Forgot Password?
                                </Link>
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 mb-3"
                            >
                                Login
                            </Button>

                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">or</span>
                                <div className="line"></div>
                            </div>

                            <GoogleLogin
                                clientId="113855965035-po9atl5spvi5t39lvfkmvb019ccpon4a.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={handleGoogleLogin}
                                onFailure={(error) => {
                                    // Here, you can handle the error more gracefully
                                    console.error("Google Login Failure:", error);
                                    // Optionally, inform the user that the login process needs to be completed
                                }}
                                cookiePolicy={'single_host_origin'}
                                className="btn btn-outline-primary w-100 mb-4" // Apply Bootstrap classes directly
                            />


                            <div className="text-center mt-3">
                                <span>Don't have an account? </span>
                                <Link to="/register" className="register-link">
                                    Create one
                                </Link>
                            </div>
                        </Form>
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
