import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/components/Company.css';

export default function Company() {
  const [activeTab, setActiveTab] = useState('company');

  const services = [
    {
      title: 'Design & Engineering',
      description: 'Customized transformer parts designed to meet your specific needs with our experienced engineering team.'
    },
    {
      title: 'Manufacturing & Testing',
      description: 'State-of-the-art manufacturing with rigorous testing in our in-house testing laboratory.'
    },
    {
      title: 'After-Sales Support',
      description: 'Comprehensive support program to assist you with any issues or maintenance needs.'
    }
  ];

  const stats = [
    { number: '1977', label: 'Founded' },
    { number: '45+', label: 'Years Experience' },
    { number: '9', label: 'Product Categories' },
    { number: '100%', label: 'Quality Assured' }
  ];

  const qualities = [
    {
      title: 'Experience',
      description: 'Rajshi Engineers has been in business for over 45 years, with a wealth of experience in the energy sector. We know what it takes to design and manufacture high-quality products that meet the needs of their customers.'
    },
    {
      title: 'Innovation',
      description: 'Our company is always looking for new ways to improve the products and services. We are at the forefront of developing new technologies for the transformer sector.'
    },
    {
      title: 'Customer Service',
      description: 'With a team of experienced customer service representatives who are available to answer your questions and help you find the right products for your needs we are always committed to providing you with excellent customer service.'
    }
  ];

  return (
    <div className="app site-shell">
      <div className="site-card">
        <Header />
        <div className="site-inner">
          <main className="company-main">
            {/* Tab Navigation */}
            <div className="tabs-container">
              <div className="container">
                <div className="tabs-nav">
                  <button 
                    className={`tab-button ${activeTab === 'company' ? 'active' : ''}`}
                    onClick={() => setActiveTab('company')}
                  >
                    Company
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'quality' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quality')}
                  >
                    Quality
                  </button>
                </div>
              </div>
            </div>

            {/* Company Tab Content */}
            {activeTab === 'company' && (
            <>
            {/* Hero Section */}
            <section className="hero-company">
              <div className="hero-content">
                <h1>Rajshi Enterprise</h1>
                <p className="hero-tagline">Engineering Excellence Since 1977</p>
              </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
              <div className="container">
                <div className="stats-grid">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Story</h2>
                  <div className="header-line"></div>
                </div>
                <div className="story-content">
                  <div className="story-text">
                    <p>
                      Rajshi Enterprise was founded in 1977 by Mr. R.M. Loya who had a passion for engineering and a vision to create a company that would provide high-quality products and services to the energy sector.
                    </p>
                    <p>
                      The company started out small, but it quickly grew to become a leading manufacturer of pressure relief valves and other transformer parts. Rajshi Enterprise has always been committed to innovation, and the company has been at the forefront of developing new technologies for the energy sector.
                    </p>
                  </div>
                  <div className="story-highlight">
                    <div className="highlight-box">
                      <h3>Our Vision</h3>
                      <p>To be a global leader in transformer component manufacturing, delivering innovative and reliable solutions that power the world's energy infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Products Section */}
            <section className="products-section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Products</h2>
                  <div className="header-line"></div>
                </div>
                <div className="products-description">
                  <p>
                    Rajshi Enterprise offers a wide range of pressure relief valves, nitrogen filling breathers, and other transformer parts. Our products are used in a wide range of applications, including power generation, transmission, and distribution.
                  </p>
                </div>
                <div className="products-grid">
                  <div className="product-card">
                    <div className="product-icon">⚙️</div>
                    <h3>Quality Assurance</h3>
                    <p>High-quality products that meet rigorous international standards and customer specifications.</p>
                  </div>
                  <div className="product-card">
                    <div className="product-icon">🔬</div>
                    <h3>Expert Engineering</h3>
                    <p>Experienced engineers dedicated to designing and manufacturing to the highest standards.</p>
                  </div>
                  <div className="product-card">
                    <div className="product-icon">🌍</div>
                    <h3>Global Applications</h3>
                    <p>Solutions for power generation, transmission, and distribution worldwide.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Services Section */}
            <section className="services-section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Services</h2>
                  <div className="header-line"></div>
                </div>
                <p className="section-intro">
                  In addition to our products, we offer a comprehensive range of services tailored to meet your unique requirements.
                </p>
                <div className="services-grid">
                  {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                      <div className="service-number">{idx + 1}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Commitment Section */}
            <section className="commitment-section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Commitment</h2>
                  <div className="header-line"></div>
                </div>
                <div className="commitment-content">
                  <p>
                    Rajshi Enterprise is committed to providing our customers with the best possible products and services. We are dedicated to innovation, quality, and customer satisfaction.
                  </p>
                  <p>
                    If you are looking for a reliable and experienced supplier of Pressure Relief Valves, Oil Level Indicators, and other transformer parts, then we can definitely be someone you can count on.
                  </p>
                  <div className="commitment-cta">
                    <a href="/support" className="cta-button">Get In Touch</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
              <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#333' }}>Our Core Values</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <h3>Innovation</h3>
                    <p>Continuously developing cutting-edge technologies and solutions for the energy sector.</p>
                  </div>
                  <div className="value-card">
                    <h3>Quality</h3>
                    <p>Unwavering commitment to manufacturing excellence and rigorous quality standards.</p>
                  </div>
                  <div className="value-card">
                    <h3>Reliability</h3>
                    <p>Dependable products and services you can count on, backed by 45+ years of expertise.</p>
                  </div>
                  <div className="value-card">
                    <h3>Customer Focus</h3>
                    <p>Your success is our priority—dedicated support and customized solutions for every client.</p>
                  </div>
                </div>
              </div>
            </section>
            </>
            )}

            {/* Quality Tab Content */}
            {activeTab === 'quality' && (
            <>
            {/* Quality Hero Section */}
            <section className="quality-hero">
              <div className="container">
                <h1>Quality & Certification</h1>
                <p>With over 45 years of experience RAJSHI ENGINEERS is a leading manufacturer of Instruments for Transformers like Pressure Relief Valves, Tank Valves and other transformer parts.</p>
              </div>
            </section>

            {/* Quality Introduction */}
            <section className="quality-intro">
              <div className="container">
                <p>
                  We are committed to providing our customers with high-quality products and services with the help of a team of experienced engineers who are dedicated to designing and manufacturing our products to the highest standards. We also have our in-house team of customer service representatives who are available to answer your questions and help you find the right products for your needs.
                </p>
                <p>
                  Rajshi Engineers is proud to be a part of the energy sector and to help keep our customers' power systems safe and reliable. Our manufacturing facility is ISO 9001:2015 certified unit giving us the confidence to be one of the best in our sector.
                </p>
              </div>
            </section>

            {/* Quality Features */}
            <section className="quality-features">
              <div className="container">
                <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', color: '#333' }}>Our Quality Commitment</h2>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                  Our commitment to providing our customers with the latest products in the market is backed with some of the below qualities.
                </p>
                <div className="quality-grid">
                  {qualities.map((quality, idx) => (
                    <div key={idx} className="quality-card">
                      <h3>{quality.title}</h3>
                      <p>{quality.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ISO Certificate Section */}
            <section className="iso-section">
              <div className="container">
                <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', color: '#333', textAlign: 'center' }}>ISO 9001:2015 Certification</h2>
                <div className="iso-content">
                  <div className="iso-image">
                    <a href="/downloads/ISO-CERTIFICATE-.pdf" target="_blank" rel="noopener noreferrer" download className="iso-link">
                      <img src="/images/iso-certificate.jpg" alt="ISO 9001:2015 Certificate" />
                      <div className="iso-overlay">
                        <span>Download Certificate</span>
                      </div>
                    </a>
                  </div>
                  <div className="iso-text">
                    <h3>ISO 9001:2015 Certified</h3>
                    <p>
                      Rajshi Engineers' manufacturing facility is proud to be ISO 9001:2015 certified. This certification demonstrates our commitment to quality management and continuous improvement in all aspects of our operations.
                    </p>
                    <h4>What this means for you:</h4>
                    <ul>
                      <li>Consistent, high-quality products meeting international standards</li>
                      <li>Reliable manufacturing processes and quality control</li>
                      <li>Commitment to customer satisfaction and continuous improvement</li>
                      <li>Trust and confidence in our products and services</li>
                    </ul>
                    <a href="/downloads/ISO-CERTIFICATE-.pdf" download className="download-btn">
                      Download Full Certificate
                    </a>
                  </div>
                </div>
              </div>
            </section>
            </>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
