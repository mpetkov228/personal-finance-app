import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';

import { formatBalance } from './utils/functions';

function reducer(state, action) {
  switch (action.type) {
    case "add_transaction":
      return { ...state, transactions: [{ ...action.payload, id: Date.now() }, ...state.transactions] };
    case "delete_transaction":
      return { ...state, transactions: state.transactions.filter(t => t.id === action.id ) };
  }
}

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
// const SEED_TRANSACTIONS = [
//   { id: 1, desc: "Monthly Rent", amount: -1200, category: "Housing", date: "2024-06-01", type: "expense" },
//   { id: 2, desc: "Salary Deposit", amount: 3800, category: "Other", date: "2024-06-01", type: "income" },
//   { id: 3, desc: "Weekly Groceries", amount: -95, category: "Food", date: "2024-06-03", type: "expense" },
//   { id: 4, desc: "Netflix", amount: -15, category: "Entertainment", date: "2024-06-04", type: "expense" },
//   { id: 5, desc: "Gym Membership", amount: -45, category: "Health", date: "2024-06-05", type: "expense" },
//   { id: 6, desc: "Freelance Project", amount: 650, category: "Other", date: "2024-06-07", type: "income" },
//   { id: 7, desc: "Metro Card", amount: -33, category: "Transport", date: "2024-06-08", type: "expense" },
//   { id: 8, desc: "New Shoes", amount: -120, category: "Shopping", date: "2024-06-10", type: "expense" },
//   { id: 9, desc: "Restaurant Dinner", amount: -68, category: "Food", date: "2024-06-12", type: "expense" },
//   { id: 10, desc: "Emergency Fund", amount: -300, category: "Savings", date: "2024-06-14", type: "expense" },
//   { id: 11, desc: "Phone Bill", amount: -55, category: "Other", date: "2024-06-15", type: "expense" },
//   { id: 12, desc: "Coffee Shops", amount: -42, category: "Food", date: "2024-06-17", type: "expense" },
//   { id: 13, desc: "Spotify", amount: -10, category: "Entertainment", date: "2024-06-18", type: "expense" },
//   { id: 14, desc: "Uber Rides", amount: -28, category: "Transport", date: "2024-06-20", type: "expense" },
//   { id: 15, desc: "Side Project Payment", amount: 200, category: "Other", date: "2024-06-22", type: "income" },
// ];
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
