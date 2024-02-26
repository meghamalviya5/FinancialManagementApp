import { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [reportType, setReportType] = useState("");
  const [report, setReport] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    savings: 0,
    expenseBreakdown: {},
  });
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  const generateReport = () => {
    console.log("in generateReport: ", reportType);
    if (reportType === "incomeVsExpenses") {
      console.log("in generateReport: ", income);

      const totalIncome = income.reduce(
        (acc, income) => acc + income.amount,
        0,
      );
      const totalExpenses = expenses.reduce(
        (acc, expense) => acc + expense.amount,
        0,
      );
      const savings = totalIncome - totalExpenses;
      setReport((oldReport) => ({
        ...oldReport,
        totalIncome,
        totalExpenses,
        savings,
      }));
    } else if (reportType === "expenseBreakdown") {
      const expenseBreakdown = {};
      expenses.forEach((transaction) => {
        const { category, amount } = transaction;
        if (expenseBreakdown[category]) {
          expenseBreakdown[category] += amount;
        } else {
          expenseBreakdown[category] = amount;
        }
      });
      setReport((oldReport) => ({ ...oldReport, expenseBreakdown }));
    }
  };

  return (
    <div className="report">
      <h2>Financial Reports</h2>

      <div>
        <label>Select Report Type: </label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select a report type</option>
          <option value="incomeVsExpenses">Income vs. Expenses</option>
          <option value="expenseBreakdown">Expense Breakdown</option>
        </select>
      </div>
      <button onClick={generateReport}>Generate Report</button>

      {report.totalIncome > 0 && reportType === "incomeVsExpenses" && (
        <div>
          <h3>Report</h3>
          <div>
            <p>Total Income: ${report.totalIncome}</p>
            <p>Total Expenses: ${report.totalExpenses}</p>
            <p>Total Savings: ${report.savings}</p>
          </div>
        </div>
      )}

      {Object.keys(report.expenseBreakdown).length > 0 &&
        reportType === "expenseBreakdown" && (
          <div>
            <h4>Expense Breakdown</h4>
            {Object.keys(report.expenseBreakdown).map((category, index) => (
              <li key={index}>
                {category}: ${report.expenseBreakdown[category]}
              </li>
            ))}
          </div>
        )}
    </div>
  );
};

export default Dashboard;
