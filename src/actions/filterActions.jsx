export const updateIncomeFilter = (filterValue) => async (dispatch) => {
  dispatch({
    type: "UPDATE_INCOME_FILTER",
    payload: filterValue,
  });
  // console.log("calling next dispact on update income action");
  dispatch({ type: "UPDATE_INCOME_FILTER_DATA", payload: filterValue });
};

export const updateExpenseFilter = (filterValue) => async (dispatch) => {
  dispatch({
    type: "UPDATE_EXPENSE_FILTER",
    payload: filterValue,
  });
  dispatch({ type: "UPDATE_EXPENSE_FILTER_DATA", payload: filterValue });
};

export const updateSavingsFilter = (filterValue) => async (dispatch) => {
  dispatch({
    type: "UPDATE_SAVINGS_FILTER",
    payload: filterValue,
  });
  dispatch({ type: "UPDATE_SAVINGS_FILTER_DATA", payload: filterValue });
};

export const updateSortValue = (sort) => async (dispatch) => {
  console.log("sort type in actions update func: ", sort.type);

  console.log("sort value in actions update func: ", sort.value);
  if (sort.type === "incomeSort") {
    dispatch({
      type: "SORT_INCOME",
      payload: sort.value,
    });
  } else if (sort.type === "expenseSort") {
    dispatch({ type: "SORT_EXPENSE", payload: sort.value });
  } else if (sort.type === "savingsSort") {
    dispatch({ type: "SORT_SAVINGS", payload: sort.value });
  }
};
