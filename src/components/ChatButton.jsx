import React, { useState } from 'react';
import '../styles/components/ChatButton.css';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    phoneNumber: '', 
    companyName: '',
    city: '',
    country: '',
    subject: '',
    message: '' 
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  function handleToggle() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStatus('idle');
      setFormData({ 
        fullName: '', 
        email: '', 
        phoneNumber: '', 
        companyName: '',
        city: '',
        country: '',
        subject: '',
        message: '' 
      });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      // Combine subject with message for the server
      const messageWithSubject = formData.subject 
        ? `[${formData.subject}]\n\n${formData.message}`
        : formData.message;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          companyName: formData.companyName,
          city: formData.city,
          country: formData.country,
          message: messageWithSubject,
        }),
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ 
          fullName: '', 
          email: '', 
          phoneNumber: '', 
          companyName: '',
          city: '',
          country: '',
          subject: '',
          message: '' 
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <div id="onwebchat_chatimage_div">
        <button
          type="button"
          className={`chat-info-button ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          title={isOpen ? 'Close chat' : 'Contact us'}
        >
          <img src="/images/info.png" alt="info" className="chat-info-icon" />
        </button>
      </div>
      
      {isOpen && (
        <div className="chat-widget" role="dialog" aria-label="Contact form">
          <div className="chat-widget-header">
            <h3>Contact Us</h3>
            <button className="chat-widget-close" onClick={handleToggle} aria-label="Close chat">
              &times;
            </button>
          </div>
          
          {status === 'success' ? (
            <div className="chat-widget-success">
              <div className="success-icon">✓</div>
              <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
              <button className="chat-widget-restart" onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form className="chat-widget-form" onSubmit={handleSubmit}>
              <div className="chat-widget-field">
                <label htmlFor="chat-name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="chat-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  placeholder="Your name"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="chat-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  placeholder="your@email.com"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-phone">Phone</label>
                <input
                  type="tel"
                  id="chat-phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  placeholder="+49 7033 369 4100"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-company">Company</label>
                <input
                  type="text"
                  id="chat-company"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  placeholder="Company name (optional)"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-city">City</label>
                <input
                  type="text"
                  id="chat-city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  placeholder="City (optional)"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-country">Country</label>
                <select
                  id="chat-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                >
                  <option value="">Select country (optional)</option>
                  <option value="Germany">Germany</option>
                  <option value="Austria">Austria</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-subject">Subject</label>
                <select
                  id="chat-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Sales / Quotation">Sales / Quotation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-message">Message <span className="required">*</span></label>
                <textarea
                  id="chat-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  rows={4}
                  placeholder="Describe your inquiry..."
                />
              </div>
              
              {status === 'error' && (
                <div className="chat-widget-error">Failed to send. Please try again.</div>
              )}
              
              <button 
                type="submit" 
                className="chat-widget-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}