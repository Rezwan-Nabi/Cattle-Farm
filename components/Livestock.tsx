export const cattle = [
  {name:"Angus",type:"Premium Beef Cattle",details:"Black-hided cattle known for excellent marbling and tender beef.",image:"https://images.unsplash.com/photo-1583095117886-ddb019562ee0?fm=jpg&q=80&w=1200&auto=format&fit=crop"},
  {name:"Hereford",type:"Grass-Fed Cattle",details:"Hardy, calm cattle raised on nutritious pasture in a natural environment.",image:"https://images.unsplash.com/photo-1577412032138-bbf147ceb80b?fm=jpg&q=80&w=1200&auto=format&fit=crop"},
  {name:"Holstein",type:"Dairy Cattle",details:"Healthy dairy cattle selected for reliable production and strong genetics.",image:"https://images.unsplash.com/photo-1609954111457-b377c9743c16?fm=jpg&q=80&w=1200&auto=format&fit=crop"},
  {name:"Simmental",type:"Dual-Purpose Cattle",details:"Versatile cattle valued for their strength, growth and gentle nature.",image:"https://images.unsplash.com/photo-1596733430284-f7437764b1a9?fm=jpg&q=80&w=1200&auto=format&fit=crop"},
  {name:"Charolais",type:"Premium Beef Cattle",details:"Powerful, fast-growing cattle with a lean build and quality finish.",image:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?fm=jpg&q=80&w=1200&auto=format&fit=crop"},
  {name:"Jersey",type:"Dairy Cattle",details:"Friendly, efficient dairy cattle known for rich, high-quality milk.",image:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?fm=jpg&q=80&w=1200&auto=format&fit=crop"}
];

export default function Livestock({ limit }: { limit?: number }) {
  const animals = limit ? cattle.slice(0, limit) : cattle;

  return (
    <section id="livestock" className="livestock section">
      <div className="section-label"><span>02</span><span>OUR LIVESTOCK</span></div>
      <div className="section-heading">
        <h2>Strong genetics.<br/><span>Healthy animals.</span></h2>
        <p>Carefully selected livestock raised in a natural environment with a focus on health, quality and welfare.</p>
      </div>
      <div className="cattle-grid">
        {animals.map((animal,i)=>(
          <article className="cattle-card" key={animal.name}>
            <div className="cattle-image"><img src={animal.image} alt={animal.name}/><div className="cattle-number">0{i+1}</div></div>
            <div className="cattle-info"><span>{animal.type}</span><h3>{animal.name}</h3><p className="cattle-details">{animal.details}</p><a href="/#contact">View details →</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}