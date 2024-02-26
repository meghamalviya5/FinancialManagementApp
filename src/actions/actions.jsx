export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://c7b5390d-7b86-4cac-a4e6-1a3b62fe529a-00-14rhbwe78ynnx.sisko.replit.dev/income",
    );
    const data = await response.json();
    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error while fetching income data: ", error);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};
export const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://c7b5390d-7b86-4cac-a4e6-1a3b62fe529a-00-14rhbwe78ynnx.sisko.replit.dev/savings",
    );
    const data = await response.json();
    console.log("data in actions: ", data);
    dispatch({
      type: "FETCH_SAVINGS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log("Error while fetching savings data: ", error);
    dispatch({ type: "FETCH_SAVINGS_FAILURE" });
  }
};
export const fetchExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://c7b5390d-7b86-4cac-a4e6-1a3b62fe529a-00-14rhbwe78ynnx.sisko.replit.dev/expenses",
    );
    const data = await response.json();
    dispatch({ type: "FETCH_EXPENSES_SUCCESS", payload: data ? data : [] });
  } catch (error) {
    console.log("Error while fetching expenses data");
    dispatch({ type: "FETCH_EXPENSES_FAILURE" });
  }
};
export const addEntry = (entry) => async (dispatch) => {
  console.log(
    `https://c7b5390d-7b86-4cac-a4e6-1a3b62fe529a-00-14rhbwe78ynnx.sisko.replit.dev/add-${entry.type}`,
  );
  try {
    const response = await fetch(
      `https://c7b5390d-7b86-4cac-a4e6-1a3b62fe529a-00-14rhbwe78ynnx.sisko.replit.dev/add-${entry.type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      },
    );

    const data = await response.json();
    if (data.success === true) {
      if (entry.type === "income") {
        dispatch({ type: "ADD_INCOME_SUCCESS", payload: data.data });
      } else if (data.type === "expense") {
        dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: data.data });
      } else if (data.type === "savings") {
        dispatch({ type: "ADD_SAVINGS_SUCCESS", payload: data.data });
      }
    }
  } catch (error) {
    console.log("Error adding entry: ", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};
// export const updateIncomeFilter = (filterValue) => async (dispatch) => {
//   dispatch({
//     type: "UPDATE_INCOME_FILTER",
//     payload: filterValue,
//   });
// };
// export const updateExpenseFilter = (filterValue) => async (dispatch) => {
//   dispatch({
//     type: "UPDATE_EXPENSE_FILTER",
//     payload: filterValue,
//   });
// };
// export const updateSavingsFilter = (filterValue) => async (dispatch) => {
//   dispatch({
//     type: "UPDATE_SAVINGS_FILTER",
//     payload: filterValue,
//   });
// };
// export const updateSortValue = (sort) => async (dispatch) => {
//   console.log("sort value in actions update func: ", sort.value);
//   dispatch({
//     type: "SORT_INCOME",
//     payload: { key: sort.type, value: sort.value },
//   });
// };
