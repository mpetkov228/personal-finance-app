import { useState } from 'react'
import './App.css'

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

        <button>Dashboard</button>
        <button>Transactions</button>
        <button>Budgets</button>

        <div>
          <div>Net Balance</div>
          <div>+$2,415</div>
        </div>
      </div>

      {/* Main */}
      <main>
        {screen === 'dashboard' && <div>Dashboard</div>}
      </main>
    </>
  )
}

export default App
