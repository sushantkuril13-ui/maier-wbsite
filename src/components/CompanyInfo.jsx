import React from 'react';
import '../styles/components/CompanyInfo.css';

export default function CompanyInfo() {
  return (
    <section id="company" className="company-info">
      <div className="container">
        <div className="company-content">
          <div className="company-text">
            <h2 className="company-title">Maier Accessories</h2>
            <h3 className="company-subtitle">Transformer Accessories and Tank Components</h3>
            <p className="company-tagline">
              <em>Reliability is the basis for a successful cooperation!</em>
            </p>
            <p className="company-description">
              The experience we have been gathering in the field of production and development of transformer accessories for many decades makes us the reliable partner of today. Adherence to delivery dates, short delivery times, predictability, and the complete fulfilment of your requirements are the measurable factors of our service.
            </p>
            <p className="company-description">
              Nowadays the efficient and smooth production flow from the release until the delivery of your transformer units is more important than ever. We support you alongside in order to provide our components when needed for assembling.
            </p>
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
