import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function OilLevelIndicator() {
  const slides = [
    { img: '/images/Product Images/OLI_P.png', caption: 'P-1L Series' },
    { img: '/images/Product Images/OLI_6040L.png', caption: '6040 Series' },
    { img: '/images/Product Images/OLI_AL.png', caption: 'AL Series' },
    { img: '/images/Product Images/OLI_PRISMATIC.png', caption: 'Prismatic Series' },
    { img: '/images/Product Images/OLI.png', caption: 'Oil Level Indicator' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="Oil Level Indicator"
      slides={slides}
    >
      <article>
        <h1>OIL LEVEL INDICATOR</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Oil level gauge are designed for general industrial use for level monitoring of tanks and similar vessels.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <ul>
            <li>Easy to fit these oil Level Gauge gives a clear visibility from distance due to refractive property.</li>
            <li>Depending upon nature of liquid, seal ensures Leak Proof Assembly.</li>
          </ul>
        </section>

        <section>
          <h2>Models</h2>
          
          <h3>Model: P-1L</h3>
          <p>Aluminium Pressure Die Casted Body.</p>
          
          <h3>Model: 6040</h3>
          <p>Aluminium Sheet Metal Body with Prismatic Effect View Window</p>
          
          <h3>Model: 502 series</h3>
          <p>Thread Mounting Oil level indicator</p>
          <ul>
            <li>Available in Brass and Aluminium.</li>
            <li>Float Ball give the clear of Oil level.</li>
            <li>Available in 1" and 1½" Mounting.</li>
          </ul>
          
          <h3>Model: AL***</h3>
          <ul>
            <li>19 mm. Square Clear Acrylic Rod</li>
            <li>M-10 Mounting Stud, Gasket and Nut.</li>
            <li>Mounting PCD to be provided by customer.</li>
            <li>Marking Provided of High, Medium & Low.</li>
            <li>Marking Provided of 5°, 30°, 98°C.</li>
          </ul>
          
          <h3>Model: Prismatic</h3>
          <ul>
            <li>Available in Polycarbonate and Acrylic Material.</li>
            <li>Different size are available according to customer need.</li>
          </ul>
        </section>

        <section>
          <h2>OIL LEVEL INDICATOR VERTICAL MOUNTING</h2>
          
          <h3>Application</h3>
          <p>
            Oil level gauge are designed for general industrial use for level monitoring of Hermetically Sealed
            Transformer and tanks and similar vessels.
          </p>
          
          <h3>Working</h3>
          <ul>
            <li>Easy to fit Oil Level Gauge gives a clear visibility from distance due to refractive property.</li>
            <li>Compatible rubber seal ensures Leak Proof Assembly.</li>
          </ul>
          
          <h3>Features</h3>
          <ul>
            <li>UV Protected Polycarbonate Clear window.</li>
            <li>Nitrophyl Float suitable for use in transformer oil.</li>
            <li>Working Temperature: -40 to 120 °C</li>
          </ul>
        </section>

        <section>
          <h2>Mounting Options</h2>
          
          <h3>Thread Mounting (Vertical)</h3>
          <table className="mounting-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Mounting Thread</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>G-1" (1-BSP)</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>G-1½" (1.5-BSP)</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>G-2" (2-BSP)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Brass (B)</td>
                <td style={{ padding: '0.5rem' }}>BB-80*L</td>
                <td style={{ padding: '0.5rem' }}>BB-120*L</td>
                <td style={{ padding: '0.5rem' }}>BB-240*L</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Aluminium (A)</td>
                <td style={{ padding: '0.5rem' }}>AB-80L</td>
                <td style={{ padding: '0.5rem' }}>N/A</td>
                <td style={{ padding: '0.5rem' }}>N/A</td>
              </tr>
            </tbody>
          </table>
          
          <h3>Flange Mounting (Normal)</h3>
          <p>Model: P-250*L (Body: Aluminium)</p>
          <p>Model: BG-1FCL (Flange Mounting)</p>
          <p>Model: BG-1FL</p>
        </section>

        <section>
          <h2>Specifications</h2>
          <ul>
            <li><strong>Total Length (L):</strong> Specified by Customer</li>
            <li><strong>Marking (LH Low-High):</strong> In MM Min-Max</li>
            <li><strong>Yellow Metal Cap (C):</strong> Prefix before L</li>
          </ul>
        </section>

        <section>
          <h2>Testing</h2>
          <p>
            Each assembly is designed and tested to give Leak Proof installation and perfect fitment.
          </p>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete oil level indicator catalogue below:</p>
          <a 
            href="/downloads/oil-level-indicator-catalogue.pdf" 
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
