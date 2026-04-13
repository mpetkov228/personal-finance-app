import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';

import { formatBalance } from './utils/functions';

// function reducer(state, action) {
//   switch (action.type) {
//     case "add_transaction":
//       return { ...state, transactions: [{ ...action.payload, id: Date.now() }, ...state.transactions] };
//     case "delete_transaction":
//       return { ...state, transactions: state.transactions.filter(t => t.id === action.id ) };
//   }
// }

const CATEGORIES = ['Housing', 'Food', 'Transport', 'Health', 'Shopping', 'Entertainment', 'Savings', 'Other'];
const CATEGORY_COLORS = { 
  Housing: "#7aaec8",
  Food: "#7ec8a0",
  Transport: "#c9b99a",
  Health: "#e07b6a",
  Shopping: "#b07ac8",
  Entertainment: "#c8a87a",
  Savings: "#7ac8b8",
  Other: "#888"
};
const SCREENS = [
  { id: 'dashboard', label: 'Dashboard', icon: '◈'},
  { id: 'transactions', label: 'Transactions', icon: '⇄'},
  { id: 'budgets', label: 'Budgets', icon: '◎'},
];

const balance = 2415;

function App() {
  const [screen, setScreen] = useState('dashboard');
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">
          <div className="heading">Wealth Tracker</div>
          <div className="sub-heading">Personal Finance</div>
        </div>

        {SCREENS.map(s => (
          <button key={s.id} className={`nav-item ${screen === s.id ? "active" : ""}`} onClick={() => setScreen(s.id)}>
            <span style={{ fontSize: "0.9rem" }}>{s.icon}</span>
            {s.label}
          </button>
        ))}

        <div className="sidebar-balance">
          <div className="tag">Net Balance</div>
          <div className={`balance ${balance > 0 ? "positive" : "negative"}`}>{balance > 0 ? "+" : "-"}{formatBalance(balance)}</div>
        </div>
      </div>

      {/* Main */}
      <main>
        {screen === 'dashboard' && <Dashboard balance={balance} transactions={transactions} /> }
        {screen === 'transactions' && <Transactions /> }
        {screen === 'budgets' && <Budgets /> }
      </main>
    </div>
  );
}

export default App;
