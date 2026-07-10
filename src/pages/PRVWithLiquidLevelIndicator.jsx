import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import { getSectionBySlug } from '../data/productHierarchy.js';

export default function PRVWithLiquidLevelIndicator() {
  const slides = [
    { img: '/images/Product Images/PRV_LIQUID INDICATOR.png', caption: 'PRV with Liquid Level Indicator' },
  ];

  return (
    <ProductPageLayout
      activeCategory="PRV with Liquid Level Indicator"
      slides={slides}
    >
      <article>
        <h1>PRESSURE RELIEF VALVE WITH LIQUID LEVEL INDICATOR</h1>

        <section>
          <h2>Product Overview :</h2>
          <p>
            XD series of Tubular Oil Level gauge is specialized product for hermetically sealed transformers.
          </p>
          <p>
            It is combo of:
          </p>
          <p>
            a) Pressure Relief Valve at the Top with effective diameter of 1”.
          </p>
          <p>
            b) Oil Level Indicator where Blue indicated that the oil is sufficient and red indicates oil is to be refilled.
          </p>
          <p>
            Pressure Relief Valve (P.R.V.) is a safety device to be used in Transformer, Pressure Tanks & Pressure Lines for indoor & outdoor application. Suitable for repeated operation as compared to Conventional Explosion Vent which is for single use. It is compact, highly reliable and particularly designed to be used on O.L.T.C., Transformers, & similar equipment’s / tank with non-corrosive liquid.
          </p>
          <p>
            Level Indicator is used to know level of liquid in Transformer / Tank for indoor and outdoor application. This product is very useful for hermetically sealed transformers.
          </p>
        </section>

        <section>
          <h2>Features :</h2>
          <ul>
            <li>Reliable Operating Pressure from 20 to 100 KPa. (0.20 to 1.00 kg/cm sq.)</li>
            <li>Spring Safety Valve is compact, highly reliable and particularly useful for use in transformer & tanks containing non corrosive liquid even in extreme outdoor condition.</li>
            <li>Compact and Rugged Design.</li>
            <li>It is to mounted Vertically.</li>
            <li>Positive Resealing Pressure.</li>
            <li>Normally our sealing is with Nitrile Rubber “O” Ring.</li>
            <li>Valve Resetting Automatic. Suitable for repeated use.</li>
            <li>Float compatible with Transformer Oil</li>
            <li>UV Protected Polycarbonate Clear window</li>
            <li>Each assembly acts as a conservator also.</li>
          </ul>
        </section>

        <section>
          <h2>Different Models available are:</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Threaded PRV</th>
                <th>Flange PRV</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mounting</td><td>M52 × 2</td><td>M52 × 2</td></tr>
              <tr><td>Material</td><td>Aluminium</td><td>Aluminium</td></tr>
              <tr><td>Model</td><td>ALXD</td><td>ALXF</td></tr>
              <tr><td>Standard Length (L)</td><td>180, 270, 370, 420, 520 mm</td><td>180, 270, 370, 420, 520 mm</td></tr>
            </tbody>
          </table>
          <p><strong>Note - Length can be modified as per customer specification</strong></p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>Download catalogue and datasheet documents for this product.</p>
          <a href="/downloads/PRV WITH LIQUID LEVEL INDICATOR  Catalogue.pdf" className="btn btn-download">
            Download Catalogue
          </a>
        </section>
        
      </article>
    </ProductPageLayout>
  );
}
