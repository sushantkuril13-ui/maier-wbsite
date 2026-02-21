import React from 'react';
import '../styles/components/NewsSection.css';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: 'Products According to Applications',
      image: './images/Aktuelles/Applications.png',
      description: 'Depending on the application other products are used! We summarized an overview of our products according to transformer & application.',
      link: '#news-1'
    },
    {
      id: 2,
      title: 'Even for Harshest Conditions: Protection Relay MCHD',
      image: './images/Aktuelles/MCHD_Protection_Relay_900x300_Maier.png',
      description: 'All-in-one protection for hermetically sealed transformers in accordance with EN50216-3 sets new standards.',
      link: '#news-2'
    },
    {
      id: 3,
      title: 'Compact and Reliable: Buchholz Relay MBP',
      image: './images/Aktuelles/MBP_Buchholz_Relay_900x300_Maier.png',
      description: 'Our completely improved Buchholz Relay MBP enlarges our product portfolio of protection devices for power and distribution transformers.',
      link: '#news-3'
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">News</h2>
        <div className="news-grid">
          {newsItems.map((news) => (
            <div key={news.id} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-body">
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <a href={news.link} className="btn">
                  Continue reading
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
