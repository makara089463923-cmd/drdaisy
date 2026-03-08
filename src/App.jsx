import React from 'react';
import './App.css';

function App() {
  const flowers = [
    { id: 1, name: "ផ្កា Daisy ពណ៌ស", price: "$10", img: "https://images.unsplash.com/photo-1550592704-6c76defa9985?w=500" },
    { id: 2, name: "ផ្កា Rose ក្រហម", price: "$15", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500" },
    { id: 3, name: "ផ្កា Tulip លឿង", price: "$12", img: "https://images.unsplash.com/photo-1520323232431-1113968364d2?w=500" },
  ];

  return (
    <div className="shop-container">
      <nav className="navbar">
        <h1 className="logo">Dr. Daisy 🌸</h1>
        <div className="nav-links">
          <span>ទំព័រដើម</span>
          <span>ផ្កាទាំងអស់</span>
          <span>ទាក់ទង</span>
        </div>
      </nav>

      <header className="hero">
        <h2>ស្វាគមន៍មកកាន់ហាងផ្កា Dr. Daisy</h2>
        <p>ផ្កាស្រស់ៗសម្រាប់មនុស្សជាទីស្រលាញ់របស់អ្នក</p>
        <button className="cta-btn">មើលផ្កាទាំងអស់</button>
      </header>

      <section className="product-section">
        <h3>ផ្កាពេញនិយម</h3>
        <div className="product-grid">
          {flowers.map(flower => (
            <div key={flower.id} className="flower-card">
              <img src={flower.img} alt={flower.name} />
              <h4>{flower.name}</h4>
              <p className="price">{flower.price}</p>
              <a href="https://t.me/your_telegram" className="buy-btn">កុម្ម៉ង់តាម Telegram</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Dr. Daisy Flower Shop - Phnom Penh, Cambodia</p>
      </footer>
    </div>
  );
}

export default App;