import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';

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

function App() {
  const [screen, setScreen] = useState('dashboard');

  return (
    <>
      {/* Sidebar */}
      <div>
        <div>
          <div>Wealth Tracker</div>
          <div>Personal Finance</div>
        </div>

        <button onClick={() => setScreen('dashboard')}>Dashboard</button>
        <button onClick={() => setScreen('transactions')}>Transactions</button>
        <button onClick={() => setScreen('budgets')}>Budgets</button>

        <div>
          <div>Net Balance</div>
          <div>+$2,415</div>
        </div>
      </div>

      {/* Main */}
      <main>
        {screen === 'dashboard' && <Dashboard /> }
        {screen === 'transactions' && <Transactions /> }
        {screen === 'budgets' && <Budgets /> }
      </main>
    </>
  );
}

export default App;
