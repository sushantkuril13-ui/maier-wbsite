import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../../components/ProductPageLayout.jsx';
import productHierarchy, { getSectionBySlug, getSubsectionSlides } from '../../data/productHierarchy.js';
import '../../styles/components/ProductHierarchyPages.css';

const section = getSectionBySlug('nitrogen-gas-monitoring-system');

export default function NitrogenGasSDGR02() {
  const slides = getSubsectionSlides('nitrogen-gas-monitoring-system', 'sdgr-02');
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Transformer Accessories', to: '/transformer-accessories' },
    { label: 'Nitrogen Gas Monitoring System', to: '/products/nitrogen-gas-monitoring-system' },
    { label: 'SDGR-02' }
  ];

  return (
    <ProductPageLayout
      activeCategory="Nitrogen Gas Monitoring System"
      slides={slides}
      breadcrumbs={breadcrumbs}
      hierarchy={productHierarchy}
      activeSectionSlug="nitrogen-gas-monitoring-system"
      activeSubsectionSlug="sdgr-02"
    >
      <article>
        <h1>SDGR-02 - Standard Double Gas Regulator</h1>

        <section>
          <h2>Product Overview</h2>
          <p>
            The SDGR-02 (Standard Double Gas Regulator) is a dual-stage pressure regulation system engineered for maintaining constant inert gas 
            or dry nitrogen atmosphere in sealed transformer tanks. Featuring box mounting flexibility and support for 1 or 2 high-pressure cylinders, 
            the SDGR-02 combines reliable two-stage regulation with integrated safety protection to prevent atmospheric air and moisture contamination 
            during transformer storage, transportation, or commissioning phases. The dual-gauge system provides real-time visibility into both inlet 
            (cylinder) and outlet (tank) pressures.
          </p>
        </section>

        <section>
          <h2>Technical Specifications</h2>
          <table className="specification-table">
            <tbody>
              <tr>
                <td><strong>Model Designation</strong></td>
                <td>SDGR-02 (Standard Double Gas Regulator)</td>
              </tr>
              <tr>
                <td><strong>Cylinder Capacity</strong></td>
                <td>Single cylinder or dual cylinder (1 or 2 cylinders)</td>
              </tr>
              <tr>
                <td><strong>Regulation Stages</strong></td>
                <td>2-stage (primary & secondary reduction)</td>
              </tr>
              <tr>
                <td><strong>Pressure Gauge Count</strong></td>
                <td>2 gauges (H.P. inlet gauge, L.P. outlet gauge)</td>
              </tr>
              <tr>
                <td><strong>Mounting Configuration</strong></td>
                <td>Box Mounting (flexible installation options)</td>
              </tr>
              <tr>
                <td><strong>Outlet Pressure Range</strong></td>
                <td>0.05 to 0.50 kg/cm² (50 to 500 mbar) - adjustable</td>
              </tr>
              <tr>
                <td><strong>Inlet Pressure (Cylinder)</strong></td>
                <td>Typically 150–200 kg/cm² (1500–2000 bar)</td>
              </tr>
              <tr>
                <td><strong>Gas Compatibility</strong></td>
                <td>Nitrogen (primary), Dry Air, SF6, other inert gases</td>
              </tr>
              <tr>
                <td><strong>Safety Features</strong></td>
                <td>H.P. relief valve, L.P. relief valve, pressure limiting</td>
              </tr>
              <tr>
                <td><strong>Operating Temperature</strong></td>
                <td>-10°C to +50°C ambient (cylinder dependent)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Application & Use Cases</h2>
          <p>
            The SDGR-02 maintains positive inert gas pressure in sealed transformer tanks during critical phases: factory acceptance testing, 
            storage period prior to installation, transportation to site, and initial commissioning. By maintaining continuous positive pressure, 
            it prevents atmospheric air ingress and prevents moisture contamination that would compromise transformer insulation. Applications include:
            </p>
          <ul>
            <li><strong>Factory Storage:</strong> Maintain nitrogen atmosphere during factory acceptance testing and pre-shipment hold periods</li>
            <li><strong>Transportation:</strong> Pressurize tank atmosphere during truck/rail/ship transport to prevent moisture ingress</li>
            <li><strong>Site Storage:</strong> Maintain positive pressure during extended on-site storage pre-installation</li>
            <li><strong>Commissioning Phase:</strong> Maintain purged atmosphere during cable connection and pre-energization procedures</li>
            <li><strong>Extended Degassing:</strong> Support extended nitrogen purging cycles in high-moisture environments</li>
          </ul>
        </section>

        <section>
          <h2>How Two-Stage Regulation Works</h2>
          <p>
            The SDGR-02 employs dual-stage pressure reduction to smoothly step down pressure from the high-pressure cylinder (typically 150–200 bar) 
            to the low output pressure needed in the transformer tank (0.05–0.50 bar). The first stage rapidly reduces cylinder pressure to an 
            intermediate level (typically 5–10 bar), stabilizing inlet flow to the second stage. The second stage then precisely regulates this 
            intermediate pressure down to the target tank pressure. This two-step approach provides: (1) improved pressure stability throughout cylinder 
            discharge, (2) reduced temperature rise at the regulator, (3) better response to tank pressure fluctuations, and (4) more consistent 
            gas flow during extended operations.
          </p>
        </section>

        <section>
          <h2>Key Features & Benefits</h2>
          <ul>
            <li><strong>Flexible Single or Dual Cylinder:</strong> Configure for 1 or 2 cylinders based on volume/duration requirements</li>
            <li><strong>Two-Stage Regulation:</strong> Superior pressure stability and flow control compared to single-stage alternatives</li>
            <li><strong>Dual Pressure Gauges:</strong> Monitor both inlet (cylinder depletion) and outlet (tank) pressures simultaneously</li>
            <li><strong>Box Mounting Design:</strong> Mount to equipment frame, vehicle bracket, or fixed installation surface flexibly</li>
            <li><strong>Automatic Pressure Maintenance:</strong> Maintains set pressure automatically; additional gas supplies when tank pressure drops</li>
            <li><strong>Integrated Safety Valves:</strong> High-pressure and low-pressure relief valves prevent overpressure conditions</li>
            <li><strong>Field-Adjustable Output:</strong> Easily adjust outlet pressure from 0.05 to 0.50 kg/cm² to match tank requirements</li>
            <li><strong>Proven Design:</strong> Standard configuration used globally for transformer gas supply systems</li>
          </ul>
        </section>

        <section>
          <h2>Safety Protection System</h2>
          <table className="specification-table">
            <thead>
              <tr>
                <th>Protection Feature</th>
                <th>Location</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>High-Pressure (H.P.) Relief Valve</strong></td>
                <td>First stage output</td>
                <td>Prevents excessive pressure between stages; protects first-stage diaphragm</td>
              </tr>
              <tr>
                <td><strong>Low-Pressure (L.P.) Relief Valve</strong></td>
                <td>Second stage output</td>
                <td>Limits maximum tank outlet pressure; protects transformer tank integrity</td>
              </tr>
              <tr>
                <td><strong>Check Valve</strong></td>
                <td>Outlet line</td>
                <td>Prevents backflow from tank when cylinder pressure falls below tank pressure</td>
              </tr>
              <tr>
                <td><strong>Pressure Limiting Design</strong></td>
                <td>Regulator bodies</td>
                <td>Internal mechanical limits prevent dangerous pressure buildup under all conditions</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Installation & Configuration</h2>
          <ol>
            <li><strong>Mount the Box:</strong> Secure SDGR-02 box to equipment frame, vehicle, or fixed location using provided mounting points</li>
            <li><strong>Connect Cylinders:</strong> Attach one or two high-pressure gas cylinders to inlet connections; ensure valve knobs are closed initially</li>
            <li><strong>Connect Tank:</strong> Route outlet line to transformer tank through shut-off valve and quality gauge (for operator reference)</li>
            <li><strong>Bleed System:</strong> Crack outlet needle valve slowly to bleed air from regulator; close when pure gas flows</li>
            <li><strong>Adjust Pressure:</strong> Open cylinder valve; observe H.P. gauge; adjust L.P. screw to reach desired outlet pressure (typically 0.15–0.25 kg/cm²)</li>
            <li><strong>Open Tank Valve:</strong> Slowly open tank shut-off valve; observe pressure rise on L.P. gauge</li>
            <li><strong>Monitor Operation:</strong> Verify both gauges stabilize; H.P. gauge will gradually drop as cylinder depletes</li>
          </ol>
        </section>

        <section>
          <h2>Maintenance & Operation</h2>
          <ul>
            <li>Check both pressure gauges daily during active supply operations</li>
            <li>When H.P. gauge drops below 50 bar, prepare to change to fresh cylinder</li>
            <li>Close cylinder valve before changing cylinders to prevent pressure loss</li>
            <li>Replace inlet gas filter annually or when pressure drop is observed</li>
            <li>Do not attempt to repair internal diaphragms; return unit to service center for repair</li>
            <li>Store cylinders upright in cool, dry location when not in use</li>
            <li>Field-service parts available: seals, diaphragms, relief valves, pressure gauges</li>
          </ul>
        </section>

        <section>
          <h2>Ordering Information & Options</h2>
          <p>
            When ordering the SDGR-02, specify:
          </p>
          <ul>
            <li>Single or dual cylinder configuration</li>
            <li>Desired outlet pressure range (standard 0.05–0.50 kg/cm²)</li>
            <li>Gas type (Nitrogen standard; specify if SF6 or alternate gas)</li>
            <li>Mounting preference (box mount standard; specify if wall-mount or pipeline integration requested)</li>
            <li>Gauge types (standard gauges; high-precision gauges available)</li>
            <li>Optional shutoff valves, check valves, or pressure switches for tank circuit</li>
          </ul>
        </section>

        <section>
          <h2>More Nitrogen Gas Models</h2>
          <div className="subsection-inline-list">
            {section.subsections.map((item) => (
              <Link
                key={item.slug}
                to={`/products/nitrogen-gas-monitoring-system/${item.slug}`}
                className={`subsection-chip ${item.slug === 'sdgr-02' ? 'active' : ''}`}
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
