import { useDispatch, useSelector } from "react-redux";
import { incomeCategories } from "../../data/categories";
import { updateIncomeFilter } from "../../actions/filterActions";

const IncomeFilter = () => {
  const filterValue = useSelector((state) => state.filters.income.filterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Filter by category </label>
      <select
        value={filterValue}
        onChange={(e) => dispatch(updateIncomeFilter(e.target.value))}
      >
        <option value="">Select Income Category</option>
        {incomeCategories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default IncomeFilter;
