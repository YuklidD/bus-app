import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import LoginPage from './Pages/login/LoginPage'
import SignupPage from './Pages/signup/SignupPage'
import BusList from './Pages/buslist/BusList'
import SelectSeatPage from './Pages/seatselect/SelectSeatPage'
import RegistrationPage from './Pages/login/RegistrationForm'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/authentication" element={<LoginPage />} />
                    <Route path="/buslist/:data" element={<BusList />} />
                    <Route path="/seatselect" element={<SelectSeatPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
