import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function SolenoidInterlockDevice() {
  const slides = [
    { img: '/images/Product Images/SOLENOID INTERLOCK DEVICE.png', caption: 'Solenoid Interlock Device' },
    { img: '/images/Product Images/Solenoid Interlock.png', caption: 'Castle Lock & Key System' },
  ];

  return (
    <ProductPageLayout 
      activeCategory="Solenoid Interlock Device"
      slides={slides}
    >
      <article>
        <h1>SOLENOID INTERLOCK DEVICE</h1>
        
        <section>
          <h2>Application</h2>
          <p>
            Interlocking device are unique combination of lock and key to ensure definite sequence of operation of one or
            more industrial and substation equipment as per customer requirement. It is also known as CASTLE LOCK & KEY.
          </p>
          <p>
            Each job is engineered by our experienced team to give a unique lock and key combination.
          </p>
        </section>

        <section>
          <h2>Working</h2>
          <p>
            Key exchange box ensures that once certain Control Keys are trapped, then only the other desired keys are released
            in a sequence. The trapped keys can only be released when the earlier released keys are placed back to their
            respective positions in reverse sequence and trapped.
          </p>
          <p>
            Door Lock type Interlocking device is commonly used in Dry/ Cast Resin Transformers and substations. It is important to
            note that the Control Key can only be removed from initial box if the solenoid is deenergized. Released Control Key is
            trapped in Key Exchange Box, to release the trapped Door Lock Keys. These are then used to open Door Bolt Lock.
            Where they remain trapped till the door are open. These can only be released once the bolt lock returns back to the lock
            position. Now these door keys are trapped back in Key Exchange Box after which the Control Key is removed.
          </p>
          <p>
            The NO-NC Contact ensures that Control Key will be trapped only when the solenoid is energized.
          </p>
          <p>
            The operation of standard locking and unlocking can be executed depending upon the design with rotation of clockwise
            and anticlockwise in different degrees like 90°, 65°, 45° etc.
          </p>
        </section>

        <section>
          <h2>Models</h2>
          <ul>
            <li>Outside Control Key can be locked with several side lock key</li>
            <li>Different models having solenoid with NO or NC contact can be made.</li>
            <li>Combination having different series of operations can be made.</li>
          </ul>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Assures series and sequences of appropriate operations.</li>
            <li>Unique lock and key combinations make it full proof.</li>
            <li>Robust construction for long life.</li>
            <li>Designed ergonomically for easy and smooth operation.</li>
            <li>Visible lock/unlock condition.</li>
            <li>Excellent finish.</li>
          </ul>
        </section>

        <section>
          <h2>Safety & Reliability</h2>
          <p>
            This unique castle lock and key arrangement makes it an important
            safety device for use in transformer, switchgears and substations.
          </p>
          <p>
            For any of the models the equipment cannot be utilized even if any
            one of the keys is missing.
          </p>
          <p>
            We provide master key if asked by the supplier along with the
            supply in spare.
          </p>
        </section>

        <section>
          <h2>Key Operating Specifications</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', width: '40%' }}>Lock/Unlock Rotation</td>
                <td style={{ padding: '0.75rem' }}>Clockwise and Anticlockwise (90°, 65°, 45° available)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Solenoid Contact Type</td>
                <td style={{ padding: '0.75rem' }}>NO (Normally Open) or NC (Normally Closed)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Lock Mechanism</td>
                <td style={{ padding: '0.75rem' }}>Castle Lock & Key System</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Design Type</td>
                <td style={{ padding: '0.75rem' }}>Key Exchange Box with Sequence Control</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Applications</td>
                <td style={{ padding: '0.75rem' }}>Dry/Cast Resin Transformers, Switchgears, Substations</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Operating Sequence</h2>
          <ol>
            <li>Control Key is trapped in initial box (solenoid deenergized)</li>
            <li>When solenoid is energized, Control Key is released from initial box</li>
            <li>Released Control Key is trapped in Key Exchange Box</li>
            <li>Door Lock Keys are released from Key Exchange Box</li>
            <li>Door Lock Keys are used to open Door Bolt Lock</li>
            <li>Door Lock Keys remain trapped until door is fully open</li>
            <li>When door lock returns to lock position, Door Lock Keys are released</li>
            <li>Door Lock Keys are trapped back in Key Exchange Box</li>
            <li>Control Key can then be removed and cycle repeats</li>
          </ol>
        </section>

        <section>
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic', marginTop: '2rem' }}>
            Manufacturer reserves the right of modification/upgrade. Due to our policy of continuous product improvement, dimensions and design are subject to change.
          </p>
        </section>

        <section>
          <h2>Catalogue</h2>
          <p>You can download the complete solenoid interlock device catalogue below:</p>
          <a 
            href="/downloads/solenoid-interlock-device-catalogue.pdf" 
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
