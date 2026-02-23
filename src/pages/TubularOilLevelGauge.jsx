import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function TubularOilLevelGauge() {
  const slides = [
    { img: '/images/Product Images/TOG_AT.png', caption: 'Anti-Theft Model (ATOLG)' },
    { img: '/images/Product Images/TOLG_BT.png', caption: 'Standard Model (BTOLG)' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="Tubular Oil Level Gauge"
      slides={slides}
    >
      <article>
        <h1>TUBULAR OIL LEVEL GAUGE</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Tubular oil level gauge are designed for general industrial use for level monitoring of tanks and similar vessels.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Easy to fit these Tubular Oil Level Gauge gives a clear visibility from distance due to refractive property.
          </p>
          <ul>
            <li>Float provided helps to know the Liquid Level from distant.</li>
            <li>Depending upon nature of liquid, rubber seal ensures Leak Proof Assembly.</li>
          </ul>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Stainless Steel bars in front are provided for safety during transit and use.</li>
            <li>Easy fitting</li>
            <li>Tube made of clear Polycarbonate.</li>
            <li>Clear visibility from distance due to refractive property</li>
            <li>Float-based level indication system</li>
            <li>Liquid type-dependent rubber seal options</li>
          </ul>
        </section>

        <section>
          <h2>Models Available</h2>
          <p>Model designation: TOLG***</p>
          <p>Where: *** = PCD of the mounting holes in mm</p>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model Type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model Code</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>Anti-Theft</td>
                <td style={{ padding: '0.75rem' }}>ATOLG***</td>
                <td style={{ padding: '0.75rem' }}>Bolt tightened from back for anti-theft design</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Standard</td>
                <td style={{ padding: '0.75rem' }}>BTOLG***</td>
                <td style={{ padding: '0.75rem' }}>Bolt tightened from front</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Construction Details</h2>
          <h3>Tube Material</h3>
          <p>Clear Polycarbonate - provides excellent visibility and durability</p>
          
          <h3>Safety Features</h3>
          <p>Stainless Steel bars in front are provided for safety during transit and use.</p>
          
          <h3>Sealing System</h3>
          <p>
            Depending upon nature of liquid, rubber seal ensures Leak Proof Assembly. Hardware used is compatible to:
          </p>
          <ul>
            <li>Environment condition</li>
            <li>Tank Liquid type</li>
            <li>Aesthetics</li>
          </ul>
        </section>

        <section>
          <h2>Model Specifications</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', width: '40%' }}>Tube Material</td>
                <td style={{ padding: '0.75rem' }}>Clear Polycarbonate</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Front Protection</td>
                <td style={{ padding: '0.75rem' }}>Stainless Steel Bars</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Level Indication</td>
                <td style={{ padding: '0.75rem' }}>Float-based system</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Sealing</td>
                <td style={{ padding: '0.75rem' }}>Liquid-type dependent rubber seal</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Visibility Range</td>
                <td style={{ padding: '0.75rem' }}>Long distance (via refractive property)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Installation</h2>
          <p style={{ marginBottom: '1rem' }}>These gauges are easy to fit with the following considerations:</p>
          <ul>
            <li>Mounting holes PCD compatible with tank design</li>
            <li>
              <strong>ATOLG Model:</strong> Bolt tightened from back - recommended for anti-theft applications
            </li>
            <li>
              <strong>BTOLG Model:</strong> Bolt tightened from front - standard installation
            </li>
            <li>Hardware selection based on tank liquid type and environmental conditions</li>
          </ul>
        </section>

        <section>
          <h2>Testing</h2>
          <p>
            Each assembly is checked for:
          </p>
          <ul>
            <li>Leakage test</li>
            <li>Fitment verification</li>
          </ul>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete tubular oil level gauge catalogue below:</p>
          <a 
            href="/downloads/tubular-oil-level-gauge-catalogue.pdf" 
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
