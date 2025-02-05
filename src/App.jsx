import {React,useState } from 'react'
import AppLayout from './AppLayout/AppLayout';
import { Route, Router, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <>
      <AppLayout />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>     
    </>
  )
}

export default App;
