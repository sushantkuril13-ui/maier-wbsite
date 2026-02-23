import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function TankValve() {
  const slides = [
    { img: '/images/Product Images/TANK VALVE.png', caption: 'Tank Valve' },
    { img: '/images/Product Images/Tank Valve.png', caption: 'Tank Valve Assembly' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="Tank Valve"
      slides={slides}
    >
      <article>
        <h1>TANK VALVE</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Tank Valves are especially designed to permit quick inflation, deflation & gauging of containers with / without various
            standard equipment such as air chucks, deflators & pressure gauge. They provide minimum protrusion within the
            containers where space is at premium. Widely used in hermetically sealed transformers.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            These valves are fitted with VALVE CORE a tiny precise item whose every point serves a specific purpose.
          </p>
          
          <h3>Key Components:</h3>
          <ul>
            <li>
              <strong>Plug:</strong> Single piece construction permits full flow of gas giving clear & fast inflation/ deflation.
            </li>
            <li>
              <strong>Teflon Sleeve:</strong> Super slippery, self-swiveling & non-sticky gasket turns as it tightens, thus maintaining a perfect sealing.
            </li>
            <li>
              <strong>Ferrule & Plunger Washer:</strong> Scientifically designed to optimum air blast along with cleaning the plunger washer each time valve operates.
            </li>
            <li>
              <strong>Spring:</strong> Corrosion Resistant Stainless Steel / Brass coil spring provide right tension for the best seal.
            </li>
            <li>
              <strong>Plunger Pin:</strong> Seating at the top & bottom of plunger pin provides positive location for inflation/deflation pressure gauge.
            </li>
            <li>
              <strong>Brass Valve Cap:</strong> Provides maximum sealing force with minimum effort. Thus avoiding entry of any dirt particles to the valve mouth to impair the operating efficiency of valve core.
            </li>
          </ul>
          
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Valve Core with valve housing is yet an ACE OF STANDARDIZATION.
          </p>
        </section>

        <section>
          <h2>Models Available</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Thread Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Material</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Available in</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Remark/Note</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>GFV-1</td>
                <td style={{ padding: '0.75rem' }}>1/8"</td>
                <td style={{ padding: '0.75rem' }}>Brass</td>
                <td style={{ padding: '0.75rem' }}>Both NPT and BSP</td>
                <td style={{ padding: '0.75rem' }}>Longer than usual valves (33mm length). Used for special gases like SF6 applications and switchgears.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>GFV-2</td>
                <td style={{ padding: '0.75rem' }}>1/8"</td>
                <td style={{ padding: '0.75rem' }}>Brass</td>
                <td style={{ padding: '0.75rem' }}>Both NPT and BSP</td>
                <td style={{ padding: '0.75rem' }}>Most commonly used model. Specially designed smaller size valve to be mounted from inside of the tank.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>GFV-3</td>
                <td style={{ padding: '0.75rem' }}>---</td>
                <td style={{ padding: '0.75rem' }}>---</td>
                <td style={{ padding: '0.75rem' }}>---</td>
                <td style={{ padding: '0.75rem' }}>---</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>GFV-4</td>
                <td style={{ padding: '0.75rem' }}>1/4"</td>
                <td style={{ padding: '0.75rem' }}>Brass</td>
                <td style={{ padding: '0.75rem' }}>Both NPT and BSP</td>
                <td style={{ padding: '0.75rem' }}>---</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>GFV-5</td>
                <td style={{ padding: '0.75rem' }}>---</td>
                <td style={{ padding: '0.75rem' }}>Both Brass and Aluminium</td>
                <td style={{ padding: '0.75rem' }}>Without thread</td>
                <td style={{ padding: '0.75rem' }}>Economical alternative to GFV-2. To be mounted from inside of the tank.</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>GFV-6</td>
                <td style={{ padding: '0.75rem' }}>---</td>
                <td style={{ padding: '0.75rem' }}>Both Brass and Aluminium</td>
                <td style={{ padding: '0.75rem' }}>Without thread</td>
                <td style={{ padding: '0.75rem' }}>Economical alternative to GFV-1. To be mounted from inside of the tank.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Special Options & Variants</h2>
          <ul>
            <li><strong>GFV-1B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O" or Aluminum Washer.</li>
            <li><strong>GFV-2B Model:</strong> Available with 1/8" B.S.P. Mounting Thread, to be fitted with Rubber "O" or Aluminum Washer.</li>
            <li><strong>Brass Cap Options:</strong> All models have option of availability with / without Brass Cap.</li>
            <li><strong>Finish Options:</strong> All models have option of availability in Natural Finish / Nickel Plated.</li>
          </ul>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Quick inflation and deflation capability</li>
            <li>Minimal protrusion for space-constrained applications</li>
            <li>Precise valve core engineering with optimized components</li>
            <li>Perfect sealing with Teflon sleeve technology</li>
            <li>Corrosion-resistant construction</li>
            <li>Easy to operate brass valve cap</li>
            <li>Compatible with various standard equipment (chucks, deflators, gauges)</li>
          </ul>
        </section>

        <section>
          <h2>Routine Test</h2>
          <p>
            Each valve is individually tested for leakage at 2.5 kg/cm² by soap water process.
          </p>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete tank valve catalogue below:</p>
          <a 
            href="/downloads/tank-valve-catalogue.pdf" 
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
