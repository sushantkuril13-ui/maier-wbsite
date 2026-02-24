import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/components/Support.css';


export default function Support() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          city: '',
          country: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app site-shell">
      <div className="site-card">
        <Header />
        <div className="site-inner">
          <main className="support-main">
            {/* Hero Section */}
            <section className="support-hero">
              <div className="hero-content">
                <h1>Contact Us</h1>
                <p className="hero-tagline">Get in touch with Rajshi Engineers</p>
              </div>
            </section>

            {/* Contact Info and Form Section */}
            <section className="contact-section">
              <div className="container">
                <div className="contact-wrapper">
                  {/* Contact Information */}
                  <div className="contact-info">
                    <h2>Rajshi Engineers</h2>
                    
                    <div className="info-block">
                      <h3>Address</h3>
                      <p>
                        2, B.H.E.L. Industrial Estate, Ancillary Area,<br />
                        P.O. B.H.E.L., Khailar, Jhansi<br />
                        Uttar Pradesh, India. 284129
                      </p>
                    </div>

                    <div className="info-block">
                      <h3>Phone</h3>
                      <p>
                        <a href="tel:+919415113335">+91 – 9415113335</a><br />
                        <a href="tel:05102770090">0510 – 2770090</a>
                      </p>
                    </div>

                    <div className="info-block">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:rajshijhs@yahoo.com">rajshijhs@yahoo.com</a>
                      </p>
                    </div>

                    <div className="info-highlights">
                      <div className="highlight">
                        <div className="highlight-icon">📍</div>
                        <p>Centrally Located</p>
                      </div>
                      <div className="highlight">
                        <div className="highlight-icon">⏰</div>
                        <p>Quick Response</p>
                      </div>
                      <div className="highlight">
                        <div className="highlight-icon">🤝</div>
                        <p>Expert Support</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="contact-form-wrapper">
                    <h2>Send us a Message</h2>
                    
                    {submitted && (
                      <div className="success-message">
                        ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </div>
                    )}

                    {error && (
                      <div className="error-message">
                        ✗ {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name *</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="companyName">Company Name</label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="email">Email Id *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+91 XXXXXXXXXX"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your city"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Your country"
                          />
                        </div>
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          placeholder="Tell us about your inquiry..."
                        ></textarea>
                      </div>

                      <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
              <div className="container">
                <h2>Our Location</h2>
                <div className="map-container">
                  <iframe
                    title="Rajshi Engineers Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14426.971645132151!2d78.5212041!3d25.3128403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977653000000001%3A0x443a0018a079cbe9!2sRAJSHI%20ENGINEERS!5e0!3m2!1sen!2sin!4v1704978186719!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
