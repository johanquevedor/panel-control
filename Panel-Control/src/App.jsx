import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppleProducts from './pages/AppleProducts';
import SamsungProducts from './pages/SamsungProducts';
import XiaomiProducts from './pages/XiaomiProducts';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/apple" element={<AppleProducts />} />
          <Route path="/samsung" element={<SamsungProducts />} />
          <Route path="/xiaomi" element={<XiaomiProducts />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
