import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import TransformerAccessories from './pages/TransformerAccessories.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transformer-accessories" element={<TransformerAccessories />} />
      </Routes>
    </BrowserRouter>
  );
}
