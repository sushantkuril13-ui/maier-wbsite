import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function GasMonitoringSystem() {
  const slides = [
    { img: '/images/Product Images/GMS_SDGR02D.png', caption: 'SDGR-02D' },
    { img: '/images/Product Images/GMS_SDGR02.png', caption: 'SDGR-02' },
    { img: '/images/Product Images/GMS_DGR02.png', caption: 'DGR-02' },
    { img: '/images/Product Images/GMS_DGR05.png', caption: 'DGR-05' },
    // additional images can be added here
  ];

  return (
    <ProductPageLayout 
      activeCategory="Gas Monitoring System (Automat)"
      slides={slides}
    >
      <article>
        <h1>GAS MONITORING SYSTEM (AUTOMAT)</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Used in Transformer or other sealed tank while Storing / Transportation to provide constant Nitrogen (N<sub>2</sub>) / Inert Gas / Dry Air
            pressure so as not to allow atmospheric air & moisture to enter Tank.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Gas regulator is used to automatically maintain a positive pressure of 0.05 to 0.50 kg / cm² or as desired (pre information
            necessary) inside the connected tank by help of attached High Pressure gas cylinder. In case pressure falls below set pressure (or
            as set) due to leakage or temperature variation, regulator automatically allows required additional gas to flow from the attached
            High-Pressure gas cylinder. This builds up the required pressure.
          </p>
          <p>
            Double Stage regulation beside minimizes the risk also increases
            the flow rate thus the efficiency of system. To know the inlet & outlet pressure, gauges are attached. Safety valve at High-
            Pressure (H.P) & Low-Pressure (L.P.) is attached so that if any unwanted pressure builds up in regulator chamber is released.
          </p>
          <p>
            <strong>Note:</strong> High Pressure cylinder is not a standard part of our item / supply.
          </p>
        </section>

        <section>
          <h2>Model</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>MODEL</th>
                  <th>No. of Cylinders</th>
                  <th>No. of Stages</th>
                  <th>No. of Gauges</th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SDGR-02</strong></td>
                  <td>1 or 2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>Box Mounting.</td>
                </tr>
                <tr>
                  <td><strong>SDGR-02D</strong></td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>Direct Single Cylinder Mounting</td>
                </tr>
                <tr>
                  <td><strong>DGR-02</strong></td>
                  <td>1 or 2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>Box Mounting.</td>
                </tr>
                <tr>
                  <td><strong>DGR-05</strong></td>
                  <td>1 or 2</td>
                  <td>2</td>
                  <td>5</td>
                  <td>Box Mounting. Individual Cylinder Pressure can be visualized</td>
                </tr>
                <tr>
                  <td><strong>TGR-02</strong></td>
                  <td>1 or 2</td>
                  <td>3</td>
                  <td>2</td>
                  <td>Box Mounting. It gives precise control of even very Low Pressure. Gas Purging at Higher Pressure for Conservator without Air Cell can be done by help of 3 Way Valve</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Note:</h4>
            <ul>
              <li>Except SDGR-02D all other models are available in Single or Double cylinder.</li>
              <li>In special case number of cylinders can be even higher as desired.</li>
              <li>Heaters can be provided if required.</li>
              <li>Housing for cylinder along with regulator can be provided in all models, as shown in Model TGR-02.</li>
            </ul>
          </div>

          {/* <div className="model-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/images/Product Images/PRV.png" alt="SDGR-02D" style={{ maxWidth: '100%', height: 'auto' }} />
              <p><strong>SDGR-02D</strong></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/images/Product Images/OLI.png" alt="DGR-02" style={{ maxWidth: '100%', height: 'auto' }} />
              <p><strong>DGR-02</strong></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/images/Product Images/Gas Monitoring.png" alt="SDGR-02" style={{ maxWidth: '100%', height: 'auto' }} />
              <p><strong>SDGR-02</strong></p>
            </div>
          </div> */}
{/* 
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p> */}
        </section>

        <section>
          <h2>Testing</h2>
          <p>
            Each assembly is tested for Functional & Leakage Test for 24 hrs by compressed gas after blocking outlet connection. During
            testing Inlet Pressure (of cylinder) is 150 ± 10 kg / cm² & Outlet Pressure is 0.25 ± 0.025 kg / cm² or higher as desired.
          </p>
          <ul>
            <li>L.P hose is tested at 0.7 kg / cm² for 15 minutes or as desired.</li>
            <li>H.P hose is tested at 130 ± 10 kg / cm² for 15 minutes.</li>
          </ul>
        </section>

        <section>
          <h2>Mounting</h2>
          <p>
            Mounting Holes or brackets are provided as desired by customer.
          </p>
        </section>

        <section>
          <h2>Identification</h2>
          <p>
            Each Regulator bears a Serial no., Month, Year of manufacturing for proper identification.
          </p>
        </section>

        <section>
          <h2>Test Certificate</h2>
          <p>
            Test Certificate is provided with each regulator for the above test performed.
          </p>
        </section>

        <section>
          <h2>Special Features</h2>
          <ul>
            <li>Gauges of size 63 mm with white dial to ensure better readability & are confirming to IS 3624.</li>
            <li>No intermediate setting is required as Automatic regulating of pressure is done after desired single setting.</li>
            <li>Normally Copper HP hose 800 mm long is provided with Brass socket of 5/8" B.S.P. Male thread to directly connect to cylinder
            and 3/8" B.S.P. to monitoring system.</li>
            <li>L.P. hose normally 3600 mm long is of PVC (1 No.) with 3/8" B.S.P. female thread outlet connection. It has Non-Return Valve
            (NRV) to ensure in case of hose gets leaked the gas in tank does not flows out.</li>
          </ul>
          
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete gas monitoring system catalogue below:</p>
          <a 
            href="/downloads/gas-monitoring-catalogue.pdf" 
            download 
            className="btn btn-download"
          >
            Download PDF
          </a>
        </section>
      </article>
    </ProductPageLayout>
  );
}
