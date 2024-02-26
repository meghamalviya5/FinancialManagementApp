import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import IncomeExpenseForm from "./pages/IncomeExpenseForm";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Savings from "./pages/Savings";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul className="nav-bar">
              <li className="nav-items">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="nav-items">
                <Link to="/new-entries">New Entries</Link>
              </li>
              <li className="nav-items">
                <Link to="/income">Income</Link>
              </li>
              <li className="nav-items">
                <Link to="/expenses">Expenses</Link>
              </li>
              <li className="nav-items">
                <Link to="/savings">Savings</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/new-entries" element={<IncomeExpenseForm />}></Route>
            <Route path="/income" element={<Income />}></Route>
            <Route path="/expenses" element={<Expense />}></Route>
            <Route path="/savings" element={<Savings />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
