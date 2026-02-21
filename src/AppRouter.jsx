import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import TransformerAccessories from './pages/TransformerAccessories.jsx';
import GasMonitoringSystem from './pages/GasMonitoringSystem.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transformer-accessories" element={<TransformerAccessories />} />
        <Route path="/gas-monitoring-system" element={<GasMonitoringSystem />} />
        <Route path="/oil-level-indicator-thread-502" element={<GasMonitoringSystem />} />
      </Routes>
    </BrowserRouter>
  );
}
