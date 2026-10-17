const services = [
  ["01","Cattle Breeding","Carefully managed breeding programs focused on strong genetics and healthy livestock."],
  ["02","Livestock Trading","Reliable cattle sourcing and livestock trading for farms and agricultural businesses."],
  ["03","Farm Management","Modern farming practices designed to improve animal health and operational efficiency."],
  ["04","Consultation","Practical agricultural guidance for cattle farmers and livestock businesses."]
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="section-label"><span>03</span><span>WHAT WE DO</span></div>
      <div className="services-heading"><h2>From pasture<br/><span>to possibility.</span></h2></div>
      <div className="services-list">
        {services.map(([number,title,text])=>(
          <div className="service-item" key={number}>
            <span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="service-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}