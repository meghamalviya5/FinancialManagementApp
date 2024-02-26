import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSavings } from "../actions/actions";
import { updateSortValue } from "../actions/filterActions";
import SavingsFilter from "../components/Filters/SavingsFilter";

const Savings = () => {
  const dispatch = useDispatch();

  const filteredSavings = useSelector(
    (state) => state.filters.savings.filteredSavings,
  );
  const savingsSort = useSelector((state) => state.sort.savingsSort);

  console.log("SAVINGS:  ", filteredSavings);
  const totalSavings = filteredSavings.reduce(
    (acc, currSaving) => acc + currSaving.amount,
    0,
  );

  useEffect(() => {
    console.log("in savings useEffect..calling fetchSavings");
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <div>
      <h1>Savings Page</h1>
      <div>
        <label> Sort by amount </label>{" "}
        <input
          type="checkbox"
          value={savingsSort}
          onChange={() =>
            dispatch(
              updateSortValue({
                type: "savingsSort",
                value: !savingsSort,
              }),
            )
          }
        />
      </div>
      <SavingsFilter />
      <ul>
        {filteredSavings.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: {transaction.amount}
          </li>
        ))}
      </ul>
      <h2>Summary</h2>
      <div>Total savings: ${totalSavings}</div>
    </div>
  );
};

export default Savings;
