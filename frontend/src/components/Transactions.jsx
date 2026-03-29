function Transactions() {
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
      </div>

    </div>
  );
}

export default Transactions;