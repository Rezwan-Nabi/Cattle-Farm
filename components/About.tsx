export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-label"><span>01</span><span>ABOUT THE FARM</span></div>
      <div className="about-grid">
        <div><h2>More than a farm.<br/><span>A way of life.</span></h2></div>
        <div className="about-text">
          <p>Green Pastures is a family-owned cattle farm dedicated to producing healthy, high-quality livestock through responsible and sustainable farming practices.</p>
          <p>From breeding and nutrition to animal welfare and pasture management, every part of our operation is built around quality.</p>
          <a href="#contact" className="text-link">Learn about our story →</a>
        </div>
      </div>
      <div className="about-image"><img src="https://images.unsplash.com/photo-1498191923457-88552caeccb3?fm=jpg&q=80&w=1600&auto=format&fit=crop" alt="Cattle grazing on the farm"/></div>
    </section>
  );
}