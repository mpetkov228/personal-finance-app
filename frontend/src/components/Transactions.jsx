import { formatBalance, formatDate } from "../utils/functions";

function Transactions({ transactions }) {
  return (
    <div>
      <div>
        <div>
          <div className="tag">All Time</div>
          <h2>Transactions</h2>
        </div>
        <button className="btn btn-primary">+ Add Transaction</button>
      </div>

      <div>
        <input placeholder="Search transactions..." type="text" />
      </div>

      <div>
        <div>
          {["Description", "Category", "Date", "Amount"].map(h => (
            <div key={h} className="tag" style={{ marginBottom: 0 }}>{h}</div>
          ))}
        </div>
        {transactions.map(t => (
          <div key={t.id}>
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