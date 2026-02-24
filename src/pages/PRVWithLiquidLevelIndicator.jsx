import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function PRVWithLiquidLevelIndicator() {
  const slides = [
    { img: '/images/Product Images/PRV_LIQUID INDICATOR.png', caption: 'PRV with Liquid Level Indicator' },
    { img: '/images/Product Images/PRV_LIQUID INDICATOR 2.png', caption: 'Alternate Design' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="PRV with Liquid Level Indicator"
      slides={slides}
    >
      <article>
        <h1>PRESSURE RELIEF VALVE WITH LIQUID LEVEL INDICATOR</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            XD series of Tubular Oil Level gauge is specialized product for hermatically sealed transformers.
            It is combo of:
          </p>
          <ul>
            <li><strong>Pressure Relief Valve at the Top</strong> with effective diameter of 1".</li>
            <li><strong>Oil Level Indicator</strong> where Blue indicated that the oil is sufficient and red indicates oil is to be refilled.</li>
          </ul>
          <p>
            Pressure Relief Valve (P.R.V.) is a safety device to be used in Transformer, Pressure Tanks & Pressure Lines for
            indoor & outdoor application. Suitable for repeated operation as compared to Conventional Explosion Vent which is
            for single use. It is compact, highly reliable and particularly designed to be used on O.L.T.C., Transformers, &
            similar equipment's / tank with non-corrosive liquid.
          </p>
          <p>
            Level Indicator is used to know level of liquid in Transformer / Tank for indoor and outdoor application. This
            product is very useful for hermatically sealed transformers.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Reliable Operating Pressure from 20 to 70 kPa. (0.20 to 0.70 kg/cm.sq.)</li>
            <li>Spring Safety Valve is compact, highly reliable and particularly useful for use in transformer & tanks containing non corrosive liquid even in extreme outdoor condition.</li>
            <li>Compact and Rugged Design.</li>
            <li>It is to mounted Vertically.</li>
            <li>Positive Resealing Pressure.</li>
            <li>Operating Temperature: -40° C to 105° C (of tank liquid).</li>
            <li>Normally our sealing is with Nitrile Rubber "O" Ring.</li>
            <li>Valve Resetting Automatic. Suitable for repeated use.</li>
            <li>Float compatible with Transformer Oil</li>
            <li>UV Protected Polycarbonate Clear window</li>
            <li>Each assembly acts as a conservator also.</li>
          </ul>
        </section>

        <section>
          <h2>Models Available</h2>
          <p>Based on PRV Mounting there are different varieties:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>PRV Mounting</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>Threaded</td>
                <td style={{ padding: '0.75rem' }}>ALXD</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Flange</td>
                <td style={{ padding: '0.75rem' }}>ALXF</td>
              </tr>
            </tbody>
          </table>
          
          <h3 style={{ marginTop: '1.5rem' }}>Specifications</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Mounting Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>M52*2</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>Standard Length (L) (mm.)</td>
                <td style={{ padding: '0.75rem' }}>
                  180, 270, 370, 420, 520
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>Total Length (L)</td>
                <td style={{ padding: '0.75rem' }}>As Specified by Customer</td>
              </tr>
            </tbody>
          </table>
          
          <p style={{ fontSize: '13px', marginTop: '1rem', color: '#666' }}>
            <strong>Note:</strong> Total Length (L) can be customized as per customer requirements.
          </p>
        </section>

        <section>
          <h2>Operating Specifications</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', width: '40%' }}>Operating Pressure Range</td>
                <td style={{ padding: '0.75rem' }}>20 to 70 kPa (0.20 to 0.70 kg/cm²)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Operating Temperature</td>
                <td style={{ padding: '0.75rem' }}>-40° C to 105° C (tank liquid temperature)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Mounting Orientation</td>
                <td style={{ padding: '0.75rem' }}>Vertical</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Sealing Material</td>
                <td style={{ padding: '0.75rem' }}>Nitrile Rubber "O" Ring (Standard)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Window Material</td>
                <td style={{ padding: '0.75rem' }}>UV Protected Polycarbonate (Clear)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Float Compatibility</td>
                <td style={{ padding: '0.75rem' }}>Transformer Oil</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Level Indicator Function</h2>
          <ul>
            <li><strong>Blue Color:</strong> Indicates oil level is sufficient</li>
            <li><strong>Red Color:</strong> Indicates oil needs to be refilled</li>
          </ul>
        </section>

        <section>
          <h2>Testing</h2>
          <ul>
            <li>Each assembly is tested for leakage by soap water.</li>
            <li>Each PRV is calibrated and tested as per customer specification.</li>
          </ul>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete PRV with Liquid Level Indicator catalogue below:</p>
          <a 
            href="/downloads/PRV WITH LIQUID LEVEL INDICATOR  Catalogue.pdf" 
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
