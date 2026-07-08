import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function SolenoidInterlockDevice() {
  const slides = [
    { img: '/images/Product Images/Solenoid-interlocking-device/SOLENOID INTERLOCK DEVICE.jpg', caption: 'Solenoid Interlock Device' },
    // { img: '/images/Product Images/Solenoid Interlock.png', caption: 'Castle Lock & Key System' },
  ];

  return (
    <ProductPageLayout
      activeCategory="Solenoid Interlock Device"
      slides={slides}
    >
      <article>
        <h1>SOLENOID INTERLOCK Device/Castel Lock ARRANGEMENT</h1>

        <section>
          <h2>Application :</h2>
          <p>
            Solenoid interlock device is a unique combination of lock and key to ensure definite sequence of operation of one or more industrial and substation equipment as per customer requirement. It is also known as CASTLE LOCK & KEY. Each job is engineered by our experienced team to give a unique lock and key combination.
          </p>
        </section>

        <section>
          <h2>Working :</h2>
          <p>
            The key exchange box is designed to ensure that, once specific control keys are secured, only then the designated keys can be released in a predefined sequence. The secured keys can be released only after the previously released keys have been returned to their respective positions in the reverse order of their release and secured again.
          </p>
          <p>
            Door lock-type interlocking devices are commonly used in dry-type/cast resin transformers and substations. The Control Keys can be removed from the initial box only when the solenoid is de-energized. The released Control Keys are then secured in the Key Exchange Box, enabling the release of the secured Door Lock Keys. These keys are subsequently used to unlock the Door Bolt Lock, where they remain secured until the door is opened.
          </p>
          <p>
            The Door Lock Keys can only be removed from the Door Bolt Lock after the door has been closed and the bolt lock has returned to its locked position. The Door Lock Keys are then secured back in the Key Exchange Box, after which the Control Keys can be removed.
          </p>
          <p>
            The NO/NC contact arrangement ensures that the Control Keys can be secured in the Key Exchange Box only when the solenoid is energized.The operation of standard locking and unlocking can be executed depending upon the design with rotation of clockwise and anticlockwise in different degrees like 90⁰,65⁰,45⁰ etc.
          </p>
        </section>

        <section>
          <h2>Models:</h2>
          <ul>
            <li>Outside Control Key can be locked with several side lock key</li>
            <li>Different models having solenoid with NO or NC contact can be made.</li>
            <li>Combination having different series of operations can be made.</li>
          </ul>
        </section>

        <section>
          <h2>FEATURES :</h2>
          <ul>
            <li>Assures series and sequences of appropriate operations.</li>
            <li>Unique lock and key combinations make it full proof.</li>
            <li>Robust construction for long life.</li>
            <li>Designed ergonomically for easy and smooth operation.</li>
            <li>Visible lock/unlock condition.</li>
            <li>Excellent finish.</li>
            <li>This unique castle lock and key arrangement makes it an important safety device for use in transformer, switchgears and substations.</li>
            <li>For any of the models the equipment cannot be utilized even if any one of the keys is missing.</li>
            <li>We provide master key if asked by the supplier along with the supply in spare</li>
          </ul>
        </section>
      </article>
    </ProductPageLayout>
  );
}
