import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import LoginPage from './Pages/login/LoginPage';
import SignupPage from './Pages/signup/SignupPage';
import BusList from './Pages/buslist/BusList';
import { AuthProvider } from './component/AuthContext';
import SelectSeatPage from './Pages/seatselect/SelectSeatPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/buslist" element={<BusList />} />
        <Route path="/select-seat/:busId" element={<SelectSeatPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </AuthProvider>
    </>
  )
}

export default App
