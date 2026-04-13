import { useMemo } from "react";
import { formatBalance } from "../utils/functions";
import StatCard from "./StatCard";
import BalanceChart from "./BalanceChart";
import SpendingChart from "./SpendingChart";
import RecentTransactions from "./RecentTransactions";

const CAT_COLORS = { Housing: "#7aaec8", Food: "#7ec8a0", Transport: "#c9b99a", Health: "#e07b6a", Shopping: "#b07ac8", Entertainment: "#c8a87a", Savings: "#7ac8b8", Other: "#888" };

function Dashboard({ transactions, balance }) {
  const areaData = useMemo(() => {
    const days = ["Jun 1","Jun 5","Jun 8","Jun 10","Jun 12","Jun 14","Jun 17","Jun 20","Jun 22"];
    let running = 0;
    return days.map((d, i) => { running += (i % 3 === 0 ? 400 : -120); return { date: d, balance: running + 1200 }; });
  }, []);

  const pieData = useMemo(() => {
    const map = {};
    transactions?.filter(t => t.amount < 0).forEach(t => { map[t.category] = (map[t.category] || 0) + Math.abs(t.amount); });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  if (!transactions) {
    return (
      <div>No transactions.</div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <div className="tag" style={{ marginBottom: "0.15rem" }}>March 2026</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 400 }}>Financial Overview</h2>
      </div>

      <div className="card-container">
        <StatCard label="Net Balance" value={formatBalance(2415)} color="var(--green)" sub={balance >= 0 ? "You're on track" : "Over budget" } />
        <StatCard label="Total Income" value={formatBalance(4650)} color="var(--green)" sub="4 transactions" />
        <StatCard label="Total Spent" value={formatBalance(2235)} color="var(--red)" sub="12 transactions" />
      </div>

      <div className="chart-container">
        <BalanceChart areaData={areaData} />
        <SpendingChart pieData={pieData} colors={CAT_COLORS} />
      </div>

      <RecentTransactions transactions={transactions} colors={CAT_COLORS} />
    </div>
  );
}

export default Dashboard;