import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../actions/actions";
import { updateSortValue } from "../actions/filterActions";
import ExpenseFilter from "../components/Filters/ExpenseFilter";

const Expense = () => {
  const dispatch = useDispatch();
  const filteredExpenses = useSelector(
    (state) => state.filters.expenses.filteredExpenses,
  );
  const expenseSort = useSelector((state) => state.sort.expenseSort);

  console.log("EXPENSES: ", filteredExpenses);

  const totalExpenses = filteredExpenses.reduce(
    (acc, currExpense) => acc + currExpense.amount,
    0,
  );

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div>
      <h1>Expense Page</h1>
      <div>
        <label> Sort by amount </label>{" "}
        <input
          type="checkbox"
          value={expenseSort}
          onChange={() =>
            dispatch(
              updateSortValue({
                type: "expenseSort",
                value: !expenseSort,
              }),
            )
          }
        />
      </div>
      <ExpenseFilter />
      <ul>
        {filteredExpenses.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
      <h2>Summary</h2>
      <div>Total Expenses: ${totalExpenses}</div>
    </div>
  );
};

export default Expense;
