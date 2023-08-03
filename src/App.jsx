import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import Navbar from './components/Navbar';
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
