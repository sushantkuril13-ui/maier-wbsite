import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');
const subsectionTitle = 'Nitrogen Gas Monitoring System';

const nitrogenModels = [
  {
    model: 'SDGR-02',
    cylinders: '1 or 2',
    stages: '2',
    gauges: '2',
    features: 'Box Mounting.'
  },
  {
    model: 'SDGR-02D',
    cylinders: '1',
    stages: '2',
    gauges: '2',
    features: 'Direct Single Cylinder Mounting'
  },
  {
    model: 'DGR-02',
    cylinders: '1 or 2',
    stages: '2',
    gauges: '2',
    features: 'Box Mounting.'
  },
  {
    model: 'DGR-05',
    cylinders: '1 or 2',
    stages: '2',
    gauges: '5',
    features: 'Box Mounting. Individual Cylinder Pressure can be visualized'
  },
  {
    model: 'TGR-02',
    cylinders: '1 or 2',
    stages: '3',
    gauges: '2',
    features:
      'Box Mounting. It gives precise control of even very Low Pressure. Gas Purging at Higher Pressure for Conservator without Air Cell can be done by help of 3 Way Valve'
  }
];

export default function NitrogenGasMonitoringSystem() {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: subsectionTitle }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={section.slides || []}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="main"
    >
      <article>
        <h1>{subsectionTitle}</h1>

        <section>
          <h2>Application</h2>
          <p>
            Used in transformer and other sealed tanks during storage or transportation to maintain constant
            Nitrogen / Inert Gas / Dry Air pressure and prevent atmospheric air and moisture entry. These systems
            are essential for preserving transformer oil quality and extending equipment life during idle periods.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator maintains positive pressure in the connected tank and automatically allows additional gas
            flow from high-pressure cylinder when pressure drops below set point. Double-stage regulation improves
            flow stability and efficiency. The system includes safety valves at high-pressure (H.P.) and low-pressure
            (L.P.) stages to prevent unwanted pressure buildup. Attached gauges allow monitoring of inlet and outlet
            pressures for optimal system control.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Automatic pressure maintenance from 0.05 to 0.50 kg/cm² (adjustable).</li>
            <li>Double-stage regulation minimizes risk and increases flow rate efficiency.</li>
            <li>Safety valves protect against overpressure conditions.</li>
            <li>Inlet and outlet gauges for real-time pressure monitoring.</li>
            <li>Reliable connection to high-pressure gas cylinders.</li>
            <li>Suitable for all sealed transformer types and similar equipment.</li>
          </ul>
        </section>

        <section>
          <h2>Available Models</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>No. of Cylinders</th>
                <th>No. of Stages</th>
                <th>No. of Gauges</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {nitrogenModels.map((model) => (
                <tr key={model.model}>
                  <td><strong>{model.model}</strong></td>
                  <td>{model.cylinders}</td>
                  <td>{model.stages}</td>
                  <td>{model.gauges}</td>
                  <td>{model.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Model Descriptions</h2>

          <h3>SDGR-02</h3>
          <p>
            Standard Double Gas Regulator model featuring box mounting configuration. Supports 1 or 2 cylinders with
            2-stage regulation and 2 pressure gauges for inlet and outlet monitoring.
          </p>

          <h3>SDGR-02D</h3>
          <p>
            Direct Single Cylinder Mounting variant of SDGR-02. Streamlined design for single-cylinder installations
            where space is limited. Maintains same 2-stage regulation and dual gauges for monitoring.
          </p>

          <h3>DGR-02</h3>
          <p>
            Dual Gas Regulator model for box mounting. Supports 1 or 2 cylinders with 2-stage regulation. Standard
            choice for multi-cylinder applications or where dual regulator redundancy is required.
          </p>

          <h3>DGR-05</h3>
          <p>
            Advanced Dual Gas Regulator featuring 5 pressure gauges. Allows individual cylinder pressure visualization
            and more granular system monitoring. Ideal for complex installations or laboratory environments where
            detailed pressure data is required. Box mounting configuration.
          </p>

          <h3>TGR-02</h3>
          <p>
            Triple-stage Gas Regulator providing the most precise pressure control. Features 1 or 2 cylinders with
            3-stage regulation and 2 gauges. Particularly useful for transformer conservators without air cell,
            offering gas purging capability at higher pressures via 3-way valve integration. Ideal for low-pressure
            control requirements.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Pressure Range:</strong> 0.05 to 0.50 kg/cm² (adjustable based on application)</li>
            <li><strong>Regulation Type:</strong> Double-stage (TGR-02 includes Triple-stage option)</li>
            <li><strong>Inlet Pressure:</strong> From standard high-pressure gas cylinders</li>
            <li><strong>Safety Valves:</strong> High-pressure and low-pressure protection</li>
            <li><strong>Gauge Type:</strong> Pressure gauges for real-time monitoring</li>
            <li>
              <strong>Material:</strong> Corrosion-resistant body suitable for indoor/outdoor installation
            </li>
          </ul>
        </section>

        <section>
          <h2>Gas Supply Requirements</h2>
          <p>
            <strong>Note:</strong> High Pressure gas cylinder is not a standard part of our supply. The regulator is
            designed as an attachment to customer-supplied nitrogen, inert gas, or dry air cylinders at standard
            pressure ratings (typically 150-200 bar).
          </p>
        </section>

        <section>
          <h2>Installation Notes</h2>
          <ul>
            <li>Mount regulators in dry, temperature-controlled environments when possible.</li>
            <li>Ensure high-pressure cylinders are properly secured and labeled.</li>
            <li>Check all connections periodically for gas leakage.</li>
            <li>Pre-pressurize tanks and monitor gauges regularly during storage/transportation.</li>
            <li>Follow local regulations regarding high-pressure gas equipment.</li>
          </ul>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this product.</p>
          <a href={section.catalogueLink || '/downloads'} className="btn btn-download">
            Download Catalogue
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
