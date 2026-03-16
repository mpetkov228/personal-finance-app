import { formatBalance } from "../utils/functions";
import StatCard from "./StatCard";

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <div className="tag" style={{ marginBottom: "0.15rem" }}>March 2026</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 400 }}>Financial Overview</h2>
      </div>

      <div className="card-container">
        <StatCard label="Net Balance" value={formatBalance(2415)} color="var(--green)" />
        <StatCard label="Total Income" value={formatBalance(4650)} color="var(--green)" />
        <StatCard label="Total Spent" value={formatBalance(2235)} color="var(--red)" />
      </div>
    </div>
  );
}

export default Dashboard;