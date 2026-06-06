import "./Stats.css";

const statsData = [
  { value: "6", label: "Core Service Verticals" },
  { value: "50+", label: "Enterprise Implementations" },
  { value: "8–14", label: "Weeks to ERP Go-Live" },
  { value: "2–4", label: "Week Sprint Cycles" }
];

function Stats() {
  return (
    <section className="stats-section section-space">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card card-hover">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;