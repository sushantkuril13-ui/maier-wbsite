import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasDGR02() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'dgr-02');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'DGR-02' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="dgr-02"
    >
      <article>
        <h1>DGR-02 - Dual Gas Regulator</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The DGR-02 (Dual Gas Regulator) is a specialized two-stage pressure regulation system designed for applications 
            requiring simultaneous monitoring and control of two independent gas supply sources. Box-mounted architecture supports both single and 
            dual-cylinder configurations, making it ideal for complex transformer systems, backup gas supply systems, or installations where equipment 
            redundancy or multi-gas supply is critical. Dual pressure gauges provide independent monitoring of each supply line.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>DGR-02 (Dual Gas Regulator)</td>
              </tr>
              <tr>
                <td><strong>Cylinder Capacity</strong></td>
                <td>Two independent supply channels (1 or 2 cylinders each)</td>
              </tr>
              <tr>
                <td><strong>Regulation Stages</strong></td>
                <td>2-stage regulation per channel (primary & secondary reduction)</td>
              </tr>
              <tr>
                <td><strong>Pressure Gauge Count</strong></td>
                <td>4 gauges total (H.P. & L.P. gauges for each of 2 channels)</td>
              </tr>
              <tr>
                <td><strong>Mounting Configuration</strong></td>
                <td>Box Mounting (dual-unit system)</td>
              </tr>
              <tr>
                <td><strong>Outlet Pressure Range (Each Channel)</strong></td>
                <td>0.05 to 0.50 kg/cm² (50 to 500 mbar) — independently adjustable</td>
              </tr>
              <tr>
                <td><strong>Inlet Pressure (Cylinders)</strong></td>
                <td>Typically 150–200 kg/cm² (1500–2000 bar) per channel</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>Nitrogen (standard), Dry Air, SF6, other inert gases</td>
              </tr>
              <tr>
                <td><strong>Safety Features Per Channel</strong></td>
                <td>H.P. relief valve, L.P. relief valve, independent pressure limiting</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature</strong></td>
                <td>-10°C to +50°C ambient (cylinder dependent)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Dual Independent Channels:</strong> Two separate pressure regulation systems in single box</li>
            <li><strong>Flexible Cylinder Config:</strong> Each channel supports 1 or 2 cylinders independently</li>
            <li><strong>4 Pressure Gauges:</strong> Independent monitoring of inlet & outlet on each channel</li>
            <li><strong>2-Stage Regulation Per Channel:</strong> Improved stability via dual-stage design</li>
            <li><strong>Integrated Safety Systems:</strong> Dual H.P. & L.P. relief valves per channel</li>
            <li><strong>Box Mounting:</strong> Flexible installation on equipment frame or vehicle</li>
            <li><strong>Independent Adjustment:</strong> Each channel outlet pressure adjustable separately</li>
            <li><strong>Redundancy Option:</strong> One channel serves primary, second channel serves backup</li>
          </ul>
        </section>

        <section>
          <h2>Dual-Channel Application Architecture</h2>
          <p>
            The DGR-02 enables two distinct operational modes. In <strong>parallel mode</strong>, both channels supply the same tank simultaneously, 
            providing 2× the supply capacity of single-channel systems. In <strong>redundancy mode</strong>, Channel 1 provides normal supply while 
            Channel 2 remains stand-by, automatically activating if Channel 1 cylinder depletes or pressure drops. Each channel maintains independent 
            outlet pressure regulation (0.05–0.50 kg/cm²), allowing optimization for different tank requirements or equipment characteristics.
          </p>
        </section>

        <section>
          <h2>Installation & Configuration</h2>
          <ol>
            <li>Secure DGR-02 box to equipment frame with provided mounting points</li>
            <li>For Channel 1: Attach one or two high-pressure cylinders to inlet connection</li>\n            <li>For Channel 2: Attach one or two high-pressure cylinders to second inlet connection</li>
            <li>Route Channel 1 outlet to primary tank supply through shut-off valve</li>
            <li>Route Channel 2 outlet to secondary tank supply or standby line</li>
            <li>Ensure both inlet cylinder shutoff valves are closed initially</li>
            <li>Bleed each channel separately by cracking outlet needle valves</li>
            <li>Adjust Channel 1 outlet pressure to desired level (typically 0.15–0.25 kg/cm²)</li>
            <li>Adjust Channel 2 outlet pressure to match Channel 1 (for parallel operation) or different setting (if different tank requirements)</li>
            <li>Monitor all 4 gauges simultaneously during initial operation to verify both channels stabilizing</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Operation</h2>
          <ul>
            <li>Monitor all 4 pressure gauges daily during active operations</li>
            <li>When Channel 1 H.P. gauge drops below 50 bar, prepare to change Channel 1 cylinders</li>
            <li>Channel 2 provides continued supply during Channel 1 cylinder change or maintenance</li>
            <li>Replace inlet gas filters annually or when dual-channel pressure drop observed</li>
            <li>Field-service parts available: seals, diaphragms, relief valves, gauges per channel</li>
            <li>Annual professional servicing recommended for critical redundancy systems</li>
            <li>Spare cylinder sets recommended for backup channel to ensure continuous redundancy</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information & Options</h2>
          <p>
            When ordering the DGR-02, specify:
          </p>
          <ul>
            <li>Cylinder configuration: dual (1 or 2 cylinders per channel)</li>
            <li>Operating mode: parallel (both channels to same tank) or redundancy (active/standby)</li>
            <li>Desired outlet pressure (standard 0.05–0.50 kg/cm²)</li>
            <li>Gas type (Nitrogen standard; specify if SF6 or alternate gas)</li>
            <li>Channel pressure settings: matched (parallel mode) or different (specialized requirements)</li>
            <li>Optional: pressure switches, solenoid valves, or automated switchover logic</li>
          </ul>
        </section>

        <section>
          <h2>Application</h2>
          <p>
            Dual Gas Regulator model for box mounting. Supports 1 or 2 cylinders with 2-stage regulation. Standard choice
            for multi-cylinder applications or where dual regulator redundancy is required. Suitable for transformer and
            sealed tank applications requiring reliable pressure maintenance.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator maintains positive pressure in the connected tank and automatically allows additional gas
            flow from high-pressure cylinder when pressure drops below set point. Double-stage regulation improves
            flow stability and efficiency. The system includes safety valves at high-pressure (H.P.) and low-pressure
            (L.P.) stages to prevent unwanted pressure buildup.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Box Mounting configuration for flexible installation</li>
            <li>Supports 1 or 2 high-pressure cylinders</li>
            <li>Dual regulator design with redundancy capability</li>
            <li>2-stage regulation for improved efficiency</li>
            <li>2 pressure gauges for inlet and outlet monitoring</li>
            <li>Automatic pressure maintenance from 0.05 to 0.50 kg/cm²</li>
            <li>Safety valves protect against overpressure</li>
          </ul>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Pressure Range:</strong> 0.05 to 0.50 kg/cm² (adjustable)</li>
            <li><strong>Regulation Type:</strong> Double-stage</li>
            <li><strong>Gauge Type:</strong> Pressure gauges for real-time monitoring</li>
            <li><strong>Inlet Pressure:</strong> From standard high-pressure gas cylinders</li>
            <li><strong>Safety Protection:</strong> High-pressure and low-pressure safety valves</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'dgr-02' ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
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
