import { useMemo } from "react";
import { formatBalance } from "../utils/functions";
import StatCard from "./StatCard";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

function Dashboard({ balance }) {
  const areaData = useMemo(() => {
    const days = ["Jun 1","Jun 5","Jun 8","Jun 10","Jun 12","Jun 14","Jun 17","Jun 20","Jun 22"];
    let running = 0;
    return days.map((d, i) => { running += (i % 3 === 0 ? 400 : -120); return { date: d, balance: running + 1200 }; });
  }, []);

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

      <div className="graphs-container">
        <div>
          <div>Balance Trend</div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c9b99a" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#c9b99a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tick={{ fill: "rgba(242,237,230,0.3)", fontSize: 10, fontFamily: "Archivo" }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#202020", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, fontFamily: "Archivo", fontSize: 12, color: "#f2ede6" }} />
              <Area type="monotone" dataKey="balance" stroke="#c9b99a" strokeWidth={1.5} fill="url(#grad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;