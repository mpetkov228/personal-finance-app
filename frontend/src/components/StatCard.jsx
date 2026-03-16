function StatCard({ label, value, color }) {
  return (
    <div className="card">
      <div className="tag">{label}</div>
      <div style={{ color }}>{value}</div>
    </div>
  );
}

export default StatCard;