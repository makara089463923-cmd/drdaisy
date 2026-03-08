import React from 'react';
import './App.css';

function App() {
  const flowers = [
    { id: 1, name: "ផ្កា Daisy ស្រស់", price: "$10", img: "https://images.unsplash.com/photo-1550592704-6c76defa9985?w=500" },
    { id: 2, name: "បាច់ផ្កាកុលាប", price: "$25", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500" },
    { id: 3, name: "ផ្កា Tulip ពណ៌លឿង", price: "$15", img: "https://images.unsplash.com/photo-1520323232431-1113968364d2?w=500" },
    { id: 4, name: "ផ្កា Sunflowers", price: "$12", img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500" }
  ];

  return (
    <div className="shop-container">
      <nav className="navbar">
        <h1 className="logo">Dr. Daisy 🌸</h1>
        <div className="nav-links">
          <a href="#">ទំព័រដើម</a>
          <a href="#">ផ្កា</a>
          <a href="#">អំពីយើង</a>
          <a href="#">ទំនាក់ទំនង</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h2>ផ្កាស្រស់ស្អាតរាល់ថ្ងៃ</h2>
          <p>ផ្កាស្រស់ដែលបានជ្រើសរើសដោយដៃ ដើម្បីបញ្ចេញក្លិនក្រអូប និងសំណព្វចិត្តដល់មនុស្សពិសេសរបស់អ្នក</p>
          <div className="hero-btns">
            <button className="btn-primary">មើលផ្កា</button>
            <button className="btn-secondary">ទាក់ទងយើង</button>
          </div>
        </div>
      </header>

      <section className="products">
        <h3>ផ្កាមកដល់ថ្មី!</h3>
        <div className="product-grid">
          {flowers.map(flower => (
            <div key={flower.id} className="card">
              <img src={flower.img} alt={flower.name} />
              <h4>{flower.name}</h4>
              <p className="price">{flower.price}</p>
              <button className="btn-buy">កុម្ម៉ង់ឥឡូវនេះ</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Dr. Daisy Flower Shop. អាសយដ្ឋាន៖ ភ្នំពេញ កម្ពុជា។</p>
      </footer>
    </div>
  );
}

export default App;