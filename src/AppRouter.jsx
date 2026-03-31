import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import App from './App.jsx';
import Company from './pages/Company.jsx';
import Support from './pages/Support.jsx';
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
import ProductSection from './pages/ProductSection.jsx';

// Pressure Relief Valves subsections
import PressureReliefWithSwitches from './pages/subsections/PressureReliefWithSwitches.jsx';
import PressureReliefThreaded from './pages/subsections/PressureReliefThreaded.jsx';
import PressureReliefFlange from './pages/subsections/PressureReliefFlange.jsx';

// Oil Level Indicator subsections
import OilLevelVertical from './pages/subsections/OilLevelVertical.jsx';
import OilLevelThreaded from './pages/subsections/OilLevelThreaded.jsx';
import OilLevelPrismatic from './pages/subsections/OilLevelPrismatic.jsx';
import OilLevelTubular from './pages/subsections/OilLevelTubular.jsx';

// Nitrogen Gas Monitoring System
import NitrogenGasMonitoringSystem from './pages/subsections/NitrogenGasMonitoringSystem.jsx';
import NitrogenGasSDGR02 from './pages/subsections/NitrogenGasSDGR02.jsx';
import NitrogenGasSDGR02D from './pages/subsections/NitrogenGasSDGR02D.jsx';
import NitrogenGasDGR02 from './pages/subsections/NitrogenGasDGR02.jsx';
import NitrogenGasDGR05 from './pages/subsections/NitrogenGasDGR05.jsx';
import NitrogenGasTGR02 from './pages/subsections/NitrogenGasTGR02.jsx';

// Tank Components subsections
import TankComponentGFV1 from './pages/subsections/TankComponentGFV1.jsx';
import TankComponentGFV2 from './pages/subsections/TankComponentGFV2.jsx';
import TankComponentGFV3 from './pages/subsections/TankComponentGFV3.jsx';
import TankComponentGFV4 from './pages/subsections/TankComponentGFV4.jsx';
import TankComponentGFV5 from './pages/subsections/TankComponentGFV5.jsx';
import TankComponentGFV6 from './pages/subsections/TankComponentGFV6.jsx';
import TankComponentBrassCap from './pages/subsections/TankComponentBrassCap.jsx';
import TankComponentFinish from './pages/subsections/TankComponentFinish.jsx';

// Map subsection routes to components
const subsectionRouteMap = {
  'pressure-relief-valves': {
    'with-switches': PressureReliefWithSwitches,
    'threaded': PressureReliefThreaded,
    'flange': PressureReliefFlange
  },
  'oil-level-indicator': {
    'vertical': OilLevelVertical,
    'threaded': OilLevelThreaded,
    'prismatic': OilLevelPrismatic,
    'tubular': OilLevelTubular
  },
  'nitrogen-gas-monitoring-system': {
    'sdgr-02': NitrogenGasSDGR02,
    'sdgr-02d': NitrogenGasSDGR02D,
    'dgr-02': NitrogenGasDGR02,
    'dgr-05': NitrogenGasDGR05,
    'tgr-02': NitrogenGasTGR02
  },
  'tank-components': {
    'gfv-1': TankComponentGFV1,
    'gfv-2': TankComponentGFV2,
    'gfv-3': TankComponentGFV3,
    'gfv-4': TankComponentGFV4,
    'gfv-5': TankComponentGFV5,
    'gfv-6': TankComponentGFV6,
    'brass-cap': TankComponentBrassCap,
    'finish': TankComponentFinish
  }
};

// Dynamic component loader for subsections
function DynamicSubsectionRoute() {
  let { sectionSlug, subsectionSlug } = useParams();
  
  // Extract section slug from URL path if not in params (for specific routes)
  if (!sectionSlug) {
    const pathname = window.location.pathname;
    const match = pathname.match(/\/products\/([^/]+)\/(.+)/);
    if (match) {
      sectionSlug = match[1];
      subsectionSlug = match[2];
    }
  }
  
  const section = subsectionRouteMap[sectionSlug];
  
  if (!section) {
    return <div><p>Section not found</p></div>;
  }

  const Component = section[subsectionSlug];
  if (!Component) {
    return <div><p>Subsection not found</p></div>;
  }

  return <Component />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company" element={<Company />} />
        <Route path="/support" element={<Support />} />
        <Route path="/transformer-accessories" element={<TransformerAccessories />} />
        
        {/* Special Direct Routes */}
        <Route path="/products/pressure-alarm-system" element={<LowHighPressureAlarmSystem />} />
        <Route path="/products/solenoid-interlock-device" element={<SolenoidInterlockDevice />} />
        
        {/* Generic Products Routes */}
        <Route path="/products/:sectionSlug" element={<ProductSection />} />
        <Route path="/products/:sectionSlug/:subsectionSlug" element={<DynamicSubsectionRoute />} />
        
        {/* Legacy Routes - kept for backward compatibility */}
        <Route path="/gas-monitoring-system" element={<GasMonitoringSystem />} />
        <Route path="/low-high-pressure-alarm-system" element={<LowHighPressureAlarmSystem />} />
        <Route path="/oil-level-indicators" element={<OilLevelIndicator />} />
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
