import React, { useState } from 'react';
import '../styles/components/ChatButton.css';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  function handleToggle() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
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
                <label htmlFor="chat-name">Name</label>
                <input
                  type="text"
                  id="chat-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  placeholder="Your name"
                />
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-email">Email</label>
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
                <label htmlFor="chat-subject">Subject</label>
                <select
                  id="chat-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales / Quotation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="chat-widget-field">
                <label htmlFor="chat-message">Message</label>
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