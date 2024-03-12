// LoginForm.jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import api from '../../axiosConfig'; // Adjust the import path as necessary
import './Login.css';
import AlertModal from '../../Modal/AlertModal'
import GoogleLoginButton from '../../component/GoogleLoginButton';

const LoginForm = ({ onSwitchToRegister  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false);
    const [showModal, setShowModal] = useState(false)
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

  

    const handleForgotPassword = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
            <>
            <Form
            className="login-form text-center"
            onSubmit={handleLogin}
            >
            <h2>Welcome back!</h2>
            <p>Login to get your seats reserved.</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group
                controlId="formBasicEmail"
                className="mb-3 "
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
                />
                <Link
                    to="/forgot-password"
                    onClick={handleForgotPassword}
                    className="forgot-password"
                >
                    Forgot Password? →
                </Link>
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3 login-button"
            >
                Login
            </Button>

            <div className="or-container">
                <div className="line"></div>
                <span className="or-text">or</span>
                <div className="line"></div>
            </div>
            <div className="login-button-google">
            <GoogleLoginButton clientId="113855965035-po9atl5spvi5t39lvfkmvb019ccpon4a.apps.googleusercontent.com" />
            </div>

            <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Button variant="link" className="register-link" onClick={onSwitchToRegister }>
                    Create one →
                </Button>
            </div>
            </Form>

            <AlertModal
                show={showModal}
                handleClose={handleCloseModal}
                message="Password reset functionality needs to be implemented on the backend."
            />
            </>
            
            );
            
        };

export default LoginForm;
