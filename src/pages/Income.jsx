import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../actions/actions";
import { updateSortValue } from "../actions/filterActions";
import IncomeFilter from "../components/Filters/IncomeFilter";

const Income = () => {
  const dispatch = useDispatch();
  const filteredIncome = useSelector(
    (state) => state.filters.income.filteredIncome,
  );
  // console.log("filtered INcome in INcome.jsx: ", filteredIncome);

  const incomeSort = useSelector((state) => state.sort.incomeSort);

  const totalIncome = filteredIncome.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div>
      <h1>Income Page</h1>
      <div>
        <label> Sort by amount </label>{" "}
        <input
          type="checkbox"
          value={incomeSort}
          onChange={() =>
            dispatch(
              updateSortValue({ type: "incomeSort", value: !incomeSort }),
            )
          }
        />
      </div>
      <IncomeFilter />
      <ul>
        {filteredIncome.map((transaction, index) => (
          <li key={index}>
            {transaction.description} : ${transaction.amount}
          </li>
        ))}
      </ul>
      <h2>Summary</h2>
      <div>Total Summary: ${totalIncome}</div>
    </div>
  );
};

export default Income;
