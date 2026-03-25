import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip } from "recharts";

function BalanceChart({ areaData }) {
  return (
    <div className="card" style={{ flex: 2, minWidth: 260 }}>
      <div className="tag" style={{ marginBottom: "1rem" }}>Balance Trend</div>
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
  );
}

export default BalanceChart;