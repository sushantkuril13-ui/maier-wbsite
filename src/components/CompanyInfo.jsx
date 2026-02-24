import React from 'react';
import '../styles/components/CompanyInfo.css';

export default function CompanyInfo() {
  return (
    <section id="company" className="company-info">
      <div className="container">
        <div className="company-content">
          <div className="company-text">
            <h2 className="company-title">Rajshi Accessories</h2>
            <p className="company-tagline">
              <em>Reliability is the basis for a successful cooperation!</em>
            </p>

            <p className="company-description">
              We are a family run business, serving the energy sector for more than
              45 years with our international‑standard products. We have a list of
              delightful customers in our portfolio.
            </p>

            <p className="company-description">
              The company carries a culture of upgrading its technology with time,
              precision workmanship with stringent quality checks and innovative
              solutions for the transformer sector. We have global acceptance for
              our wide range of products with varied sizes and models. Our
              manufacturing facility has been accorded with ISO 9001:2015
              certification.
            </p>

            <ul className="company-acronym">
              <li><span className="acronym-letter">R</span> ‑ Reliable</li>
              <li><span className="acronym-letter">A</span> ‑ Affordable</li>
              <li><span className="acronym-letter">J</span> ‑ Just in Time</li>
              <li><span className="acronym-letter">S</span> ‑ Sustainable</li>
              <li><span className="acronym-letter">H</span> ‑ High Quality</li>
              <li><span className="acronym-letter">I</span> ‑ Innovative</li>
            </ul>
          </div>
          <div className="company-image">
            <img 
              src="./images/Geschichte/geschichte-3-generation.png" 
              alt="Maier Transformer Accessories - 3 Generations" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
