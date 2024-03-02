// RegistrationPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../axiosConfig';
import './Login.css';
import { GoogleLogin } from 'react-google-login';

// Add additional imports if needed

const RegistrationForm = ({ onSwitchToLogin }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        const  username = `${firstName.trim()} ${lastName.trim()}`;
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match. Try again.');
            return;
        }

        if (!termsAccepted) {
            setError('You must accept the terms and conditions.');
            return;
        }

        if (password.length <= 7) {
            setError('Password should contain minimum 8 charactors.')
            setPassword('')
            setRePassword('')
            return
        }
        // 

        try {
            // Check if the user already exists
            // let users = await api.get('user/accounts', {});
            // users = users.data.map((obj) => obj.email);

            // if (users.includes(email)) {
            //     setError('This email is already registered. Log in instead.');
            //     return;
            // }

            // Proceed with the registration
            const response = await api.post('user/signup', {
                username: username, // Assuming you want to concatenate first name and last name
                email,
                password,
            });

            if (response.status !== 200) {
                setError('Something went wrong when registering. Try again.');
                return;
            }

            // Reset form
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setTermsAccepted(false);
            setError('');

            // Redirect to login page or login the user directly
            onSwitchToLogin();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during signup.');
        }
    };
    const handleCloseModal = () => {
        setShowModal(false)
    }
    

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

    return (
        <>
            <div className="registration-page">
                
                        <Form
                            className="registration-form text-center"
                            onSubmit={handleRegister}
                        >
                            <h2>New to GoBus?</h2>
                            <p>Fill out following details to start reserving your seats with ease.</p>
                            {error && (
                                <Alert variant="danger">{error}</Alert>
                            )}
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Group>
                                <br></br>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Create Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Type Password Again"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex justify-content-between">
                                <Form.Check
                                    type="checkbox"
                                    label={
                                    <>
                                        Agree with{' '}
                                        <Link to="/terms-and-conditions" className="terms-link">
                                        Terms & Conditions
                                        </Link>
                                    </>
                                    }
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 mb-3"
                            >
                                Create account
                            </Button>

                            <div className="or-container">
                            <div className="line"></div>
                            <span className="or-text">or</span>
                            <div className="line"></div>
                            </div>

                            <GoogleLogin
                                clientId="113855965035-po9atl5spvi5t39lvfkmvb019ccpon4a.apps.googleusercontent.com"
                                buttonText={<span className="google-btn-text">Link with Google</span>}
                                onSuccess={handleGoogleLogin}
                                onFailure={(error) => {
                                    // Here, you can handle the error more gracefully
                                    console.error("Google Login Failure:", error);
                                    // Optionally, inform the user that the login process needs to be completed
                                }}
                                cookiePolicy={'single_host_origin'}
                                className="btn btn-outline-primary w-100 mb-4" // Apply Bootstrap classes directly
                                />


                            {/* Include GoogleLogin component or button if needed */}

                            <div className="text-center mt-3">
                <span>Already have an account? </span>
                <Button variant="link" className="login-link" onClick={onSwitchToLogin}>
                    Log in →
                </Button>
            </div>
                        </Form>
                        {showModal && (
                <AlertModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    message="You have successfully signed up! Please log in."
                />
            )}

            </div>
            {/* Include any modals or footers as in LoginPage */}
        </>
    );
};

export default RegistrationForm;


