import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions/actions";
import {
  expenseCategories,
  incomeCategories,
  savingsCategories,
} from "../data/categories";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("income");
  const [category, setCategory] = useState("");

  const handleAddEntry = (e) => {
    e.preventDefault();

    dispatch(
      addEntry({
        description,
        amount: parseFloat(amount),
        type: entryType,
        category,
      }),
    );
    setDescription("");
    setAmount("");
    setEntryType("income");
    setCategory("");
  };

  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Entry Type: </label>
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
        </div>

        <div>
          <label>Category: </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {entryType === "income"
              ? incomeCategories.map((category) => (
                  <option value={category}>{category}</option>
                ))
              : entryType === "expense"
                ? expenseCategories.map((category) => (
                    <option value={category}>{category}</option>
                  ))
                : entryType === "savings"
                  ? savingsCategories.map((category) => (
                      <option value={category}>{category}</option>
                    ))
                  : null}
          </select>
        </div>
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
