import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import TransformerAccessories from './pages/TransformerAccessories.jsx';
import GasMonitoringSystem from './pages/GasMonitoringSystem.jsx';
import LowHighPressureAlarmSystem from './pages/LowHighPressureAlarmSystem.jsx';
import OilLevelIndicator from './pages/OilLevelIndicator.jsx';
import PressureReliefValve from './pages/PressureReliefValve.jsx';
import PRVWithLiquidLevelIndicator from './pages/PRVWithLiquidLevelIndicator.jsx';
import SolenoidInterlockDevice from './pages/SolenoidInterlockDevice.jsx';
import TankValve from './pages/TankValve.jsx';
import ThreadedPressureReliefValve from './pages/ThreadedPressureReliefValve.jsx';
import TubularOilLevelGauge from './pages/TubularOilLevelGauge.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transformer-accessories" element={<TransformerAccessories />} />
        <Route path="/gas-monitoring-system" element={<GasMonitoringSystem />} />
        <Route path="/low-high-pressure-alarm-system" element={<LowHighPressureAlarmSystem />} />
        <Route path="/oil-level-indicators" element={<OilLevelIndicator />} />
        <Route path="/oil-level-indicator-thread-502" element={<OilLevelIndicator />} />
        <Route path="/pressure-relief-valve" element={<PressureReliefValve />} />
        <Route path="/prv-with-liquid-level-indicator" element={<PRVWithLiquidLevelIndicator />} />
        <Route path="/solenoid-interlock-device" element={<SolenoidInterlockDevice />} />
        <Route path="/tank-valve" element={<TankValve />} />
        <Route path="/threaded-pressure-relief-valve" element={<ThreadedPressureReliefValve />} />
        <Route path="/tubular-oil-level-gauge" element={<TubularOilLevelGauge />} />
      </Routes>
    </BrowserRouter>
  );
}
