function StatCard({ label, value, color, sub }) {
  return (
    <div className="card">
      <div className="tag">{label}</div>
      <div className="card-value" style={{ color: color || "var(--text)" }}>{value}</div>
      {sub && <div className="card-subtitle">{sub}</div> }
    </div>
  );
}

export default StatCard;