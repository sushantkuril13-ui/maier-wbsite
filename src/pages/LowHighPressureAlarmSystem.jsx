import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout.jsx';

export default function LowHighPressureAlarmSystem() {
  const slides = [
    { img: '/images/Product Images/Pressure-alarm/LOW_HIGH PRESSURE ALARM SYSTEM.jpg', caption: 'Low/High Pressure Alarm System' },
  ];

  return (
    <ProductPageLayout
      activeCategory="Pressure Alarm System"
      activeSectionSlug="pressure-alarm-system"
      slides={slides}
    >
      <article>
        <h1>PRESSURE ALARM SYSTEM</h1>

        <section>
          <h2>APPLICATION :</h2>
          <p>
            To give Alarm and light indication if the pressure of Tank/ Transformer reaches to alarming low/high level during transit or storage.
          </p>
        </section>

        <section>
          <h2>WORKING :</h2>
          <p>
            Specially calibrated pressure sensing switch is attached to the Tank through Flexible hose, connected to pressure Tank. As soon as the pressure in the tank decreases to alarming level the pressure sensing switch actuates the signals.
          </p>
          <p><strong>In TRANSIT Mode:</strong> During Transit the remote send signals to wireless Bell/Buzzer which starts giving audio signals and light as visual indication.</p>
          <p><strong>In AUXILLARY (Storage) Mode:</strong> During Auxiliary (Storage) Mode the auxiliary alarm system is directly attached to transmit audio and or light signal as connected.</p>
        </section>

        <section>
          <h2>FEATURES :</h2>
          <ul>
            <li>Complete unit has been packed in FRP Box having tested for Environmental Condition IP 65.</li>
            <li>3 Way Switch (2) is provided for selection of different use mode TRANSIT / OFF AUXILLARY.</li>
            <li>Cable Gland (3) is provided for inlet of Auxiliary Cable</li>
            <li>Under Ideal Condition workable range of Wireless System is 15-20 meters.</li>
            <li>Special intermittent ringing effect is incorporated in the ringing wireless system, till the pressure is not restored in the Tank.</li>
            <li>To check the healthiness of the circuit, push type CHECKING SWITCH (4) is provided. To be used when Tank Pressure is above alarm actuating pressure.</li>
            <li>Dry Battery having long life is used as a Power Source.</li>
            <li>Power source during AUXILLARY (STORAGE) preferred is 12 V- D.C / 250 A.C.</li>
          </ul>
        </section>

        <section>
          <h2>IMPORTANT :</h2>
          <ul>
            <li>Mount LPAS near to the ringer unit with least interference in case of using wireless system.</li>
            <li>Periodically check healthiness of the Circuit & Dry Battery by the circuit CHECKING SWITCH.</li>
            <li>Select proper mode while using this instrument by help of 3-way switch provided. 3-way switch is provided to select mode of use Transit/OFF/Auxiliary.</li>
            <li>Intermittent ringing and blinking light of bell/ buzzer can be stopped artificially by changing the position of switch to OFF, to save Power / Battery life.</li>
            <li>During not in use keep the system in OFF condition.</li>
            <li>In case Dry Cell / Battery discharge replace by right substitute.</li>
            <li>Any assistance /rectification or modification of equipment at site is not recommended. Same if required to be contacted to manufacturer immediately.</li>
          </ul>
        </section>
      </article>
    </ProductPageLayout>
  );
}
