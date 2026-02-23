import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function PressureReliefValve() {
  const slides = [
    // Add product images here if available
    // { img: '/images/Product Images/PRV.png', caption: 'Pressure Relief Valve' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="Pressure Relief Valve"
      slides={slides}
    >
      <article>
        <h1>PRESSURE RELIEF VALVE</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Pressure Relief Valve (P.R.V.) is a mechanical safety device used for relief of excessive
            pressure build up and Transformer, Top Changer, Pressure Tanks & Pressure Lines for
            indoor & outdoor application. Suitable for repeated operation as compared to Conventional
            Explosion Vent which is for single use.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            The release Port is sealed by a Stainless-Steel Diaphragm resting on an "O" Ring. Heavy-
            Duty Spring Set keeps the port closed in normal condition. As soon as the pressure exceeds
            the pre determined safe limit due to any reason like change in temperature, formation of
            vapor etc. The diaphragm gets lifted from the seat.
          </p>
          <p>
            This exposes the tank pressure to a greater area. Resulting to sudden increase of force.
            Thus instantaneously opening of release port and allowing vapor, gas & liquid to flow out
            of tank. Resulting to fall of pressure. The diaphragm restores its normal position as soon
            as pressure drops below the set limit and is ready for second jump. Spring retainer
            prevents the dislocation of spring during repeated operation.
          </p>
          <p>
            The lift of diaphragm also
            operates the Limit Switch (Double Pole/ Double Throw type) & Visual Indicator (Flag) by
            help of Rod. Engineered for rugged use & long life each P.R.V. is checked for its
            operational condition individually. It is important to note that depending upon the tank
            fluid different "O" Ring material is suggested.
          </p>
          
          <h3>Standard Features:</h3>
          <ol>
            <li>PRV with Nitrile Rubber Gasket.</li>
            <li>Limit Switch confirms to weather protection IP-67 and is with ¾" 16 T.P.I. (B.S.C.) PVC Cable Gland.</li>
          </ol>
        </section>

        <section>
          <h2>Mounting Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Port Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>No. of Holes</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Bolt Size / Hole Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>P.C.D</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>DP-1</td>
                <td style={{ padding: '0.75rem' }}>1"</td>
                <td style={{ padding: '0.75rem' }}>4</td>
                <td style={{ padding: '0.75rem' }}>M08 / 10 mm. Ø</td>
                <td style={{ padding: '0.75rem' }}>85 mm</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>DP-3</td>
                <td style={{ padding: '0.75rem' }}>3"</td>
                <td style={{ padding: '0.75rem' }}>4</td>
                <td style={{ padding: '0.75rem' }}>M10 / 12 mm. Ø</td>
                <td style={{ padding: '0.75rem' }}>125 mm</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>DP-6</td>
                <td style={{ padding: '0.75rem' }}>6"</td>
                <td style={{ padding: '0.75rem' }}>6</td>
                <td style={{ padding: '0.75rem' }}>M12 / 14 mm. Ø</td>
                <td style={{ padding: '0.75rem' }}>235 mm</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Models Available</h2>
          <p>Where: Ø = Size of Release Port (6", 3", 1")</p>
          <p># = No. of Electrical Contacts [(1 for 1 N.O. & 1 N.C.) & (2 for 2 N.O. & 2 N.C.)]</p>
          <p>S = With Shroud / Oil Direction Cap</p>
          <p>P = Number of Pins</p>
          <p>C = Number of Cable Core</p>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Features</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Model</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>Without Electrical Contact & Visual Indicator</td>
                <td style={{ padding: '0.75rem' }}>DP-Ø</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>With Electrical Contact & Visual Indicator</td>
                <td style={{ padding: '0.75rem' }}>DP-ØEF#</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>With Shroud/ Oil Collection Cap</td>
                <td style={{ padding: '0.75rem' }}>DP-ØEF#S</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>With Plug and Socket Type Limit Switch Connection</td>
                <td style={{ padding: '0.75rem' }}>DP-ØEF#P</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>With Shroud /Oil Collection Cap & Plug and Socket Connection</td>
                <td style={{ padding: '0.75rem' }}>DP-ØEF#SP</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>With Shroud /Oil Collection Cap & Plug and Socket Connection & Cable</td>
                <td style={{ padding: '0.75rem' }}>DP-ØEF#SPC</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Standard Operating Pressures</h2>
          <p>All the above models are available in the following standard pressure:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Kg / cm²</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>PSI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.35±0.07</td>
                <td style={{ padding: '0.75rem' }}>5±1</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.42±0.07</td>
                <td style={{ padding: '0.75rem' }}>6±1</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.49±0.07</td>
                <td style={{ padding: '0.75rem' }}>7±1</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.56±0.07</td>
                <td style={{ padding: '0.75rem' }}>8±1</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.70±0.07</td>
                <td style={{ padding: '0.75rem' }}>10±1</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>0.84±0.07</td>
                <td style={{ padding: '0.75rem' }}>12±1</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}>1.40±0.07</td>
                <td style={{ padding: '0.75rem' }}>20±1</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Special Add-ons</h2>
          <ul>
            <li>These models are also available with VITON Rubber Gasket, suitable for Silicone Oil.</li>
            <li>Bleed Screw for venting air or gas bubbles can be provided if asked.</li>
            <li>"C" Copper Core Armored Cable of specified length and specification can be provided as required by customer.</li>
            <li>PRV at different operating pressure (higher/lower) can be supplied as per your request.</li>
          </ul>
        </section>

        <section>
          <h2>Routine Test</h2>
          <p>Test is carried on each P.R.V. as follows and test certificate furnished along with supply:</p>
          <ul>
            <li>Operating Pressure individually.</li>
            <li>Contact / Operation of Switch & Flag is checked in Before & After Valve Operation condition.</li>
            <li>Leakage Test at 75% of Operating Pressure for 12 hr is done.</li>
            <li>Dielectric Test of 2 K.V. for 1 minute.</li>
          </ul>
        </section>

        <section>
          <h2>Type Test</h2>
          <p>
            Our P.R.V. qualifies Environmental Test IP-67 Test condition for practical adaptability in real life condition and rugged use.
          </p>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete pressure relief valve catalogue below:</p>
          <a 
            href="/downloads/pressure-relief-valve-catalogue.pdf" 
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
