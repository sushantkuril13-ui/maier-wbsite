import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/components/Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleAnchorClick(e, href) {
    if (!href.includes('#')) return;
    e.preventDefault();
    const [pathPart, hash] = href.split('#');
    const targetId = hash;
    const targetPath = pathPart || '/';

    if (location.pathname === targetPath || (targetPath === '/' && location.pathname === '/')) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(targetPath);
    // wait for navigation/render then scroll
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 120);
  }
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Gas Monitoring System (Automat)', href: '/gas-monitoring-system#article' },
        { label: 'Low/High Pressure Alarm System', href: '/low-high-pressure-alarm-system#article' },
        { label: 'Oil Level Indicator', href: '/oil-level-indicators#article' },
        { label: 'Pressure Relief Valve', href: '/pressure-relief-valve#article' },
        { label: 'PRV with Liquid Level Indicator', href: '/prv-with-liquid-level-indicator#article' },
        { label: 'Solenoid Interlock Device', href: '/solenoid-interlock-device#article' },
        { label: 'Tank Valve', href: '/tank-valve#article' },
        { label: 'Tubular Oil Level Gauge', href: '/tubular-oil-level-gauge#article' },
        { label: 'Threaded Pressure Relief Valve', href: '/threaded-pressure-relief-valve#article' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/company#company-main' },
        { label: 'Our Values', href: '/company#values' },
        { label: 'Contact', href: '/support#main' }
      ]
    },
    {
      title: 'Quicklinks',
      links: [
        { label: 'Homepage', href: '/#hero-slider' },
        { label: 'References', href: '/#references' },
      ]
    }
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/share/1Aetwxb19x/' },
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
                      <Link to={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>{link.label}</Link>
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
            {/* <Link to="/support">Contact</Link> */}
            <Link to="/support" onClick={(e) => handleAnchorClick(e, '/support#main')}>Contact</Link>
            <Link to="/" onClick={(e) => handleAnchorClick(e, '/#hero-slider')}>Homepage</Link>
            <Link to="/" onClick={(e) => handleAnchorClick(e, '/')}>Copyright ©</Link>
          </div>

          <p className="footer-copyright">
            Copyright © 2026 Rajshi Enterprise<br />
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
