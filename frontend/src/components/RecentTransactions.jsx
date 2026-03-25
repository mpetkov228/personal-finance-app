import { formatBalance, formatDate } from "../utils/functions";

function RecentTransactions({ transactions, colors }) {
  return (
    <div className="card">
      <div className="tag" style={{ marginBottom: "1rem" }}>Recent Transactions</div>
      {transactions.slice(0, 5).map(t => (
        <div key={t.id} className="transaction">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: colors[t.category] || "#888", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "Archivo, sans-serif", fontSize: "0.82rem", color: "var(--text)" }}>{t.desc}</div>
              <div style={{ fontFamily: "Archivo, sans-serif", fontSize: "0.68rem", color: "var(--muted)", marginTop: 2 }}>{t.category} · {formatDate(t.date)}</div>
            </div>
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: t.amount > 0 ? "var(--green)" : "var(--red)" }}>
            {t.amount > 0 ? "+" : "-"}{formatBalance(t.amount)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;