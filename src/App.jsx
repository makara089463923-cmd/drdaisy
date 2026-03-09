import React, { useEffect, useRef } from 'react';
import './App.css';

const flowers = [
  {
    id: 1, name: "Pink Rose Bouquet", nameKm: "កាទ័រផ្កាឈូករ័ត្នផ្កាបាយ",
    price: "$15.00", badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500",
  },
  {
    id: 2, name: "Sunflower Bundle", nameKm: "ផ្កាអាទិត្យ ៥ ដើម",
    price: "$12.00", badge: "",
    img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500",
  },
  {
    id: 3, name: "Mixed Luxury Bouquet", nameKm: "ផ្កាលំអខ្ពស់ច្រើនប្រភេទ",
    price: "$25.00", badge: "New",
    img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500",
  },
  {
    id: 4, name: "Green Arrangement", nameKm: "លំអដោយស្លឹកឈើ",
    price: "$10.00", badge: "",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
  },
  {
    id: 5, name: "Tropical Flowers", nameKm: "ផ្កាក្តៅ ស្រស់ភ្លឺ",
    price: "$18.00", badge: "",
    img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500",
  },
  {
    id: 6, name: "Red Rose Special", nameKm: "ផ្កាកូរ ១២ ដើម ស្នេហ៍",
    price: "$30.00", badge: "Valentine",
    img: "https://images.unsplash.com/photo-1548094878-84ced0f3d50b?w=500",
  },
];

export default function App() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div className="app">

      {/* NAV */}
      <nav className="navbar">
        <div className="logo">Dr.<span>Daisy</span></div>
        <ul className="nav-links">
          <li><a href="#products">ផ្កា</a></li>
          <li><a href="#about">អំពីយើង</a></li>
          <li><a href="#contact">ទំនាក់ទំនង</a></li>
        </ul>
        <button className="nav-cart">🛒 កន្ត្រក</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left fade-up" ref={addRef}>
          <p className="hero-tag">🌸 Flower Shop — drdaisy.uk</p>
          <h1 className="hero-title">
            ផ្កា<br />
            <em>ស្រស់ស្អាត</em><br />
            រាល់ថ្ងៃ
          </h1>
          <p className="hero-subtitle">
            ផ្កាស្រស់ ដែលបានជ្រើសរើសដោយដៃ ដើម្បីបញ្ចេញក្លិនក្រអូប និងសំណព្វទៅដល់មនុស្សពិសេសសម្រាប់អ្នក
          </p>
          <div className="hero-btns">
            <a href="#products" className="btn-primary">មើលផ្កា</a>
            <a href="#contact" className="btn-outline">ទំនាក់ទំនង</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-circle">
            <div className="hero-flower-emoji">🌸</div>
          </div>
          <div className="hero-badge">
            <p>ថ្ងៃនេះ</p>
            <h4>ផ្កាស្រស់មកដល់!</h4>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <span className="marquee">
          {"🌸 ផ្កាស្រស់  ✦  FREE DELIVERY  ✦  ផ្កាអបអរ  ✦  ផ្កាថ្ងៃកំណើត  ✦  ផ្កាស្នេហ៍  ✦  drdaisy.uk  ✦  🌸 ផ្កាស្រស់  ✦  FREE DELIVERY  ✦  ផ្កាអបអរ  ✦  ផ្កាថ្ងៃកំណើត  ✦  ផ្កាស្នេហ៍  ✦  drdaisy.uk  ✦  "}
        </span>
      </div>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <p className="section-tag">🌺 ផលិតផលរបស់យើង</p>
        <h2 className="section-title">ផ្កាដ៏ស្រស់ស្អាត</h2>
        <p className="section-desc">ផ្កាគ្រប់ប្រភេទ ស្រស់ជារៀងរាល់ថ្ងៃ ។ ជ្រើសរើសសម្រាប់អ្នកស្រលាញ់ ។</p>
        <div className="products-grid">
          {flowers.map(flower => (
            <div className="product-card fade-up" key={flower.id} ref={addRef}>
              <div className="product-img">
                <img src={flower.img} alt={flower.name} />
                {flower.badge && <span className="product-badge">{flower.badge}</span>}
              </div>
              <div className="product-info">
                <h3 className="product-name">{flower.name}</h3>
                <p className="product-name-km">{flower.nameKm}</p>
                <div className="product-footer">
                  <span className="product-price">{flower.price}</span>
                  <button className="product-add">+ បន្ថែម</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="about-grid">
          <div>
            <p className="section-tag">🌿 អំពី Dr. Daisy</p>
            <h2 className="section-title">ផ្ការបស់យើង<br />មកពីបេះដូង</h2>
            <p className="about-text">
              Dr. Daisy គឺជាហាងផ្កាស្រស់ ដែលបានបង្កើតឡើងដោយក្តីស្រឡាញ់ចំពោះធម្មជាតិ និងការលំអ។
              យើងជ្រើសរើសផ្កាដោយដៃ រាល់ព្រឹក ដើម្បីធានាភាពស្រស់ និងក្រអូប។
            </p>
            <a href="#contact" className="btn-primary">ទំនាក់ទំនងយើង</a>
            <div className="about-stats">
              {[["500+", "អ្នកទិញពេញចិត្ត"], ["50+", "ប្រភេទផ្កា"], ["3+", "ឆ្នាំបទពិសោធ"]].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">🌸</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <p className="section-tag">📞 ទំនាក់ទំនង</p>
        <h2 className="section-title">កម្មាន់ផ្កា<br />របស់អ្នក</h2>
        <div className="contact-grid">
          <div>
            <p className="section-desc">ទំនាក់ទំនងយើង ដើម្បីកម្មាន់ ឬសួរព័ត៌មានបន្ថែម។ យើងឆ្លើយតបរហ័ស!</p>
            <div className="contact-info">
              {[
                ["📍", "អាសយដ្ឋាន", "ភ្នំពេញ, កម្ពុជា"],
                ["📱", "ទូរស័ព្ទ", "+855 XX XXX XXX"],
                ["🌐", "Website", "drdaisy.uk"],
                ["⏰", "ម៉ោងបើក", "ច័ន្ទ–អាទិត្យ: 7AM – 7PM"],
              ].map(([icon, label, val]) => (
                <div className="contact-item" key={label}>
                  <span className="contact-icon">{icon}</span>
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-val">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="ឈ្មោះរបស់អ្នក" />
            <input type="tel" placeholder="លេខទូរស័ព្ទ" />
            <input type="text" placeholder="ប្រភេទផ្កាដែលចង់បាន" />
            <textarea placeholder="សារបន្ថែម..."></textarea>
            <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
              📩 ផ្ញើសារ
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">Dr.<span>Daisy</span></div>
        <p className="footer-copy">© 2025 drdaisy.uk — រក្សាសិទ្ធិ</p>
        <div className="footer-social">
          {["📘", "📸", "🎵"].map(icon => (
            <div className="social-btn" key={icon}>{icon}</div>
          ))}
        </div>
      </footer>

    </div>
  );
}