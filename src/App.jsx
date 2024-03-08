import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import LoginPage from './Pages/login/LoginPage';
import SignupPage from './Pages/signup/SignupPage';
import BusList from './Pages/buslist/BusList';
import SelectSeatPage from './Pages/seatselect/SelectSeatPage';
import Dashboard from './Pages/dashboard/Dashboard';

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<LoginPage />} />
        <Route path="/buslist" element={<BusList/>} />
        <Route path="/seatselect" element={<SelectSeatPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
  )
}

export default App
