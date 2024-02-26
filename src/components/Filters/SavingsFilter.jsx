import { useDispatch, useSelector } from "react-redux";
import { savingsCategories } from "../../data/categories";
import { updateSavingsFilter } from "../../actions/filterActions";

const SavingsFilter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Filter by category </label>
      <select
        value={state.filters.savings.filterValue}
        onChange={(e) => dispatch(updateSavingsFilter(e.target.value))}
      >
        <option value="">Select Savings Category</option>
        {savingsCategories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SavingsFilter;
