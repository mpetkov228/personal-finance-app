import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { formatBalance } from "../utils/functions";

function SpendingChart({ pieData, colors }) {
  return (
    <div className="card" style={{ flex: 1, minWidth: 200 }}>
      <div className="tag">Spending by Category</div>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={68} dataKey="value" paddingAngle={3}>
            {pieData.map((entry) => <Cell key={entry.name} fill={colors[entry.name] || "#888"} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "#202020", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, fontFamily: "Archivo", fontSize: 11, color: "#f2ede6" }} formatter={(v) => formatBalance(v)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;