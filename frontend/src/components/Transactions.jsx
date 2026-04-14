import { formatBalance, formatDate } from "../utils/functions";

function Transactions({ transactions }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div className="tag">All Time</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 400 }}>Transactions</h2>
        </div>
        <button className="btn btn-primary">+ Add Transaction</button>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input style={{ flex: 1, minWidth: 160 }} placeholder="Search transactions..." type="text" />
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "1rem", padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
          {["Description", "Category", "Date", "Amount"].map(h => (
            <div key={h} className="tag" style={{ marginBottom: 0 }}>{h}</div>
          ))}
        </div>
        {transactions.map(t => (
          <div key={t.id} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "1rem", alignItems: "center", padding: "0.85rem 1.25rem", borderBottom: "1px solid var(--border)", transition: "background 0.15s" }}>
            <div>
              <span></span>
              <div>{t.desc}</div>
            </div>
            <span>{t.category}</span>
            <span>{formatDate(t.date)}</span>
            <div>
              <span>{t.amount > 0 ? "+" : "-"}{formatBalance(t.amount)}</span>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Transactions;