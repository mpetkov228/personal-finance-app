import { useMemo } from "react";
import { formatBalance } from "../utils/functions";
import StatCard from "./StatCard";
import BalanceChart from "./BalanceChart";
import SpendingChart from "./SpendingChart";
import RecentTransactions from "./RecentTransactions";

const SEED_TRANSACTIONS = [
  { id: 1, desc: "Monthly Rent", amount: -1200, category: "Housing", date: "2024-06-01", type: "expense" },
  { id: 2, desc: "Salary Deposit", amount: 3800, category: "Other", date: "2024-06-01", type: "income" },
  { id: 3, desc: "Weekly Groceries", amount: -95, category: "Food", date: "2024-06-03", type: "expense" },
  { id: 4, desc: "Netflix", amount: -15, category: "Entertainment", date: "2024-06-04", type: "expense" },
  { id: 5, desc: "Gym Membership", amount: -45, category: "Health", date: "2024-06-05", type: "expense" },
  { id: 6, desc: "Freelance Project", amount: 650, category: "Other", date: "2024-06-07", type: "income" },
  { id: 7, desc: "Metro Card", amount: -33, category: "Transport", date: "2024-06-08", type: "expense" },
  { id: 8, desc: "New Shoes", amount: -120, category: "Shopping", date: "2024-06-10", type: "expense" },
  { id: 9, desc: "Restaurant Dinner", amount: -68, category: "Food", date: "2024-06-12", type: "expense" },
  { id: 10, desc: "Emergency Fund", amount: -300, category: "Savings", date: "2024-06-14", type: "expense" },
  { id: 11, desc: "Phone Bill", amount: -55, category: "Other", date: "2024-06-15", type: "expense" },
  { id: 12, desc: "Coffee Shops", amount: -42, category: "Food", date: "2024-06-17", type: "expense" },
  { id: 13, desc: "Spotify", amount: -10, category: "Entertainment", date: "2024-06-18", type: "expense" },
  { id: 14, desc: "Uber Rides", amount: -28, category: "Transport", date: "2024-06-20", type: "expense" },
  { id: 15, desc: "Side Project Payment", amount: 200, category: "Other", date: "2024-06-22", type: "income" },
];
const CAT_COLORS = { Housing: "#7aaec8", Food: "#7ec8a0", Transport: "#c9b99a", Health: "#e07b6a", Shopping: "#b07ac8", Entertainment: "#c8a87a", Savings: "#7ac8b8", Other: "#888" };

function Dashboard({ balance }) {
  const transactions = SEED_TRANSACTIONS;

  const areaData = useMemo(() => {
    const days = ["Jun 1","Jun 5","Jun 8","Jun 10","Jun 12","Jun 14","Jun 17","Jun 20","Jun 22"];
    let running = 0;
    return days.map((d, i) => { running += (i % 3 === 0 ? 400 : -120); return { date: d, balance: running + 1200 }; });
  }, []);

  const pieData = useMemo(() => {
    const map = {};
    transactions.filter(t => t.amount < 0).forEach(t => { map[t.category] = (map[t.category] || 0) + Math.abs(t.amount); });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [transactions]);

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