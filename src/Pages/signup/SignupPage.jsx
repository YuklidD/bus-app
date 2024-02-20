import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavigationBar from '../../component/NavigationBar'
import './Signup.css'
import AlertModal from '../../Modal/AlertModal'
import Footer from '../../component/Footer'
import api from '../../axiosConfig'

const SignupPage = () => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState('')
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            if (password.length <= 7) {
                setError('Password should contain minimum 8 charactors.')
                setPassword('')
                setRePassword('')
                return
            }

            if (password !== rePassword) {
                setError('Passwords do not match. Try again.')
                setRePassword('')
                return
            }

            /* The code snippet `let users = await api.get('user/accounts', {})
            users = users.data.map((obj) => obj.email)` is making an API call to fetch a list of
            user accounts from the backend server. */
            let users = await api.get('user/accounts', {})
            users = users.data.map((obj) => obj.email)

            /* This part of the code is checking if the email entered by the user during signup already
            exists in the list of user accounts fetched from the backend server. */
            if (users.includes(email)) {
                setError('This user is already registered. Login instead.')
                setEmail('')
                return
            }

            const response = await api.post('user/signup', {
                username,
                email,
                password,
            })

            /* This part of the code snippet is checking the status of the response received after
            making a POST request to register a user. */
            /* The code snippet `if (response.status != 200) { setError('Something went wrong when
            registering the user. Try again.') setRePassword('') return }` is checking the status of
            the response received after attempting to register a user. */
            if (response.status != 200) {
                setError(
                    'Something went wrong when registering the user. Try again.'
                )
                setRePassword('')
                return
            }

            setName('')
            setEmail('')
            setPassword('')
            setRePassword('')
            setError('')

            /* `navigate('/login')` is a function call that uses the `useNavigate` hook from React
            Router. It is used to programmatically navigate the user to the '/login' route in the
            application. In this context, after a successful user signup, the function is
            redirecting the user to the login page for further actions. */
            navigate('/login')
        } catch (err) {
            setError(
                err.response.data.message || 'An error occurred during signup.'
            )
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <NavigationBar showLoginButton={false} />
            <Container className="signup-container d-flex align-items-center justify-content-center">
                <Form className="signup-form" onSubmit={handleSignup}>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form.Group controlId="formBasicName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <Form.Group
                        controlId="formBasicRePassword"
                        className="mb-3"
                    >
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Register
                    </Button>

                    <div className="text-center mt-3">
                        Already have an account?{' '}
                        <Link to="/login">Login Here</Link>
                    </div>
                </Form>
            </Container>
            {showModal && (
                <AlertModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    message="You have successfully signed up! Please log in."
                />
            )}
            <Footer />
        </>
    )
}

export default SignupPage
