import React from 'react';
import '../styles/components/Footer.css';

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Gas Monitoring System (Automat)', href: '/gas-monitoring-system' },
        { label: 'Low/High Pressure Alarm System', href: '/low-high-pressure-alarm-system' },
        { label: 'Oil Level Indicator', href: '/oil-level-indicators' },
        { label: 'Pressure Relief Valve', href: '/pressure-relief-valve' },
        { label: 'PRV with Liquid Level Indicator', href: '/prv-with-liquid-level-indicator' },
        { label: 'Solenoid Interlock Device', href: '/solenoid-interlock-device' },
        { label: 'Tank Valve', href: '/tank-valve' },
        { label: 'Tubular Oil Level Gauge', href: '/tubular-oil-level-gauge' },
        { label: 'Threaded Pressure Relief Valve', href: '/threaded-pressure-relief-valve' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Values', href: '#values' },
        { label: 'Maier Group', href: '#maier-group' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Quicklinks',
      links: [
        { label: 'Homepage', href: '#home' },
        { label: 'Downloads', href: '#downloads' },
        { label: 'References', href: '#references' },
        { label: 'Support & Contact', href: '#support' },
        { label: 'Contact Persons', href: '#persons' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/Albert-Maier-GmbH' },
    { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/company/albert-maier-gmbh' },
    { icon: '☎', label: 'Phone', href: 'tel:+49703336941' },
    { icon: '✉', label: 'Email', href: 'mailto:info@maier-accessories.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-pages">
            <a href="#contact">Contact</a>
            <a href="#imprint">Imprint</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#home">Homepage</a>
            <a href="#copyright">Copyright ©</a>
          </div>

          <p className="footer-copyright">
            Built with React and CSS3 - Copyright © 2024 Rajshi Enterprise<br />
            Webservice & Webhosting: <a href="http://www.sercosys.de" target="_blank" rel="noopener noreferrer">SERCOSYS</a> | 
            Conception & Layout: <a href="http://karius-partner.de/" target="_blank" rel="noopener noreferrer">Karius & Partner</a>
          </p>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
