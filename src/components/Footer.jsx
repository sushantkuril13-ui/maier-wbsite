import React from 'react';
import { Link } from 'react-router-dom';
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
        { label: 'About Us', href: '/company' },
        { label: 'Our Values', href: '/company#values' },
        { label: 'Contact', href: '/support' }
      ]
    },
    {
      title: 'Quicklinks',
      links: [
        { label: 'Homepage', href: '/#hero-slider' },
        { label: 'References', href: '/#references' },
        { label: 'Support & Contact', href: '/support' },
        { label: 'Contact Persons', href: '/support#persons' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/Albert-Maier-GmbH' },
    { icon: 'in', label: 'LinkedIn', href: 'https://in.linkedin.com/company/rajshi-engineers' },
    { icon: '☎', label: 'Phone', href: 'tel:+91 – 9415113335' },
    { icon: '✉', label: 'Email', href: 'mailto:rajshijhs@yahoo.com' }
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
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-pages">
            <a href="/support">Contact</a>
            <a href="/imprint">Imprint</a>
            <a href="/">Homepage</a>
            <a href="/">Copyright ©</a>
          </div>

          <p className="footer-copyright">
            Built with React and CSS3 - Copyright © 2024 Rajshi Enterprise<br />
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
