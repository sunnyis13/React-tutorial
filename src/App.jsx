import React, { useState } from 'react'
import Navbar  from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from '../src/components/pages/Home'
import '../src/App.css'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/sign-in" element={<SignUp />} />
            </Routes>
        </>
    )
}

export default App