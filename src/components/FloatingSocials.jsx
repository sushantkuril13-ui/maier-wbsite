import React from 'react';
import '../styles/components/FloatingSocials.css';

const socialLinks = [
  {
    key: 'facebook',
    label: 'Follow via Facebook',
    href: 'https://www.facebook.com/Albert-Maier-GmbH-129951517659178/',
    external: true,
    icon: (
      <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    )
  },
  {
    key: 'linkedin',
    label: 'Follow via LinkedIn',
    href: 'https://www.linkedin.com/company/albert-maier-gmbh',
    external: true,
    icon: (
      <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    )
  },
  {
    key: 'phone',
    label: 'Phone: +49 7033 369 4100',
    href: 'tel:+4970333694100',
    external: false,
    icon: (
      <img src="/images/Icon-Telefon.png" alt="phone" className="social-icon-img" />
    )
  },
  {
    key: 'email',
    label: 'info@maier-accessories.com',
    href: 'mailto:info@maier-accessories.com',
    external: false,
    icon: (
      <img src="/images/Icon-E-Mail.png" alt="email" className="social-icon-img" />
    )
  }
];

export default function FloatingSocials() {
  return (
    <ul className="jj_sl_navigation left" aria-label="Social links">
      {socialLinks.map((item) => (
        <li key={item.key} className={`jj_sl_${item.key}`}>
          {item.external ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" title={item.label}>
              <span className="jj_social_text">{item.label}</span>
              <span className="jj_social_icon">{item.icon}</span>
            </a>
          ) : (
            <a href={item.href} title={item.label}>
              <span className="jj_social_text">{item.label}</span>
              <span className="jj_social_icon">{item.icon}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
