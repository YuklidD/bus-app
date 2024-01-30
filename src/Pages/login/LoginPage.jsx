import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/NevigationBar'; // Update the path as necessary
import './Login.css'; // Assuming you have a separate CSS file for login page styles
import AlertModal from '../../Modal/AlertModal';
import Footer from '../../component/Footer';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
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
      <Container className="login-container d-flex align-items-center justify-content-center">
        <Form className="login-form" onSubmit={handleLogin}>
          <h2 className="text-center mb-4">Login</h2>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <div className="text-center mt-3">
            <Link to="/register">Need an account? Register</Link>
          </div>

          <div className="text-center mt-2">
            <Link to="/forgot-password" onClick={handleForgotPassword}>Forgot password?</Link>
          </div>
        </Form>
      </Container>
      <AlertModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        message="Password has been reset and sent to your email."
      />
      <Footer></Footer>
    </>
  );
};

export default LoginPage;
