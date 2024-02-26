import { useDispatch, useSelector } from "react-redux";
import { expenseCategories } from "../../data/categories";
import { updateExpenseFilter } from "../../actions/filterActions";

const ExpenseFilter = () => {
  const filterValue = useSelector(
    (state) => state.filters.expenses.filterValue,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <label>Filter by category </label>
      <select
        value={filterValue}
        onChange={(e) => dispatch(updateExpenseFilter(e.target.value))}
      >
        <option value="">Select Expense Category</option>
        {expenseCategories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
