import { updateFilteredData } from "../utils/utils";

const initialState = {
  income: [],
  expenses: [],
  savings: [],
  loading: false,
  error: null,
  filters: {
    income: {
      filterValue: "",
      filteredIncome: [],
    },
    expenses: {
      filterValue: "",
      filteredExpenses: [],
    },
    savings: {
      filterValue: "",
      filteredSavings: [],
    },
  },
  sort: {
    incomeSort: false,
    expenseSort: false,
    savingsSort: false,
  },
};

const financeReducer = (state = initialState, action) => {
  console.log(
    `in reducer: state:  ${JSON.stringify(state)}, action: ${action.type}`,
  );
  switch (action.type) {
    case "ADD_ENTRY_FAILURE":
      return { ...state, loading: false, error: "Error adding new entry" };
    case "ADD_INCOME_SUCCESS":
      return {
        ...state,
        income: [...state.income, action.payload],
        filters: {
          ...state.filters,
          income: {
            ...state.filters.income,
            filteredIncome: [
              ...state.filters.income.filteredIncome,
              action.payload,
            ],
          },
        },
        loading: false,
        error: null,
      };
    case "ADD_EXPENSE_SUCCESS":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        filters: {
          ...state.filters,
          expenses: {
            ...state.filters.expenses,
            filteredExpenses: [
              ...state.filters.expenses.filteredExpenses,
              action.payload,
            ],
          },
        },
        loading: false,
        error: null,
      };
    case "ADD_SAVINGS_SUCCESS":
      return {
        ...state,
        expenses: [...state.savings, action.payload],
        filters: {
          ...state.filters,
          savings: {
            ...state.filters.savings,
            filteredSavings: [
              ...state.filters.savings.filteredSavings,
              action.payload,
            ],
          },
        },
        loading: false,
        error: null,
      };
    case "FETCH_INCOME_SUCCESS": {
      return {
        ...state,
        income: action.payload,
        filters: {
          ...state.filters,
          income: { ...state.filters.income, filteredIncome: action.payload },
        },
        loading: false,
        error: null,
      };
    }
    case "FETCH_EXPENSES_SUCCESS": {
      return {
        ...state,
        expenses: action.payload,
        filters: {
          ...state.filters,
          expenses: {
            ...state.filters.expenses,
            filteredExpenses: action.payload,
          },
        },
        loading: false,
        error: null,
      };
    }
    case "FETCH_SAVINGS_SUCCESS": {
      console.log("SAVINGS IN FETCH: ", action.payload);
      return {
        ...state,
        savings: action.payload,
        filters: {
          ...state.filters,
          savings: {
            ...state.filters.savings,
            filteredSavings: action.payload,
          },
        },
        loading: false,
        error: null,
      };
    }
    case "FETCH_DATA_LOADING":
      return { ...state, loading: true };
    case "FETCH_INCOME_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching income data",
      };
    case "FETCH_EXPENSES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching expenses data",
      };
    case "FETCH_SAVINGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching savings data",
      };

    //filters
    case "UPDATE_INCOME_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          income: {
            ...state.filters.income,
            filterValue: action.payload,
          },
        },
      };

    case "UPDATE_INCOME_FILTER_DATA": {
      const filteredData = updateFilteredData(
        state.filters.income.filterValue,
        state.income,
      );
      // console.log("filteredData in update filter data case: ", filteredData);
      return {
        ...state,
        filters: {
          ...state.filters,
          income: {
            ...state.filters.income,
            filteredIncome: filteredData,
          },
        },
      };
    }

    case "UPDATE_EXPENSE_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          expenses: {
            ...state.filters.expenses,
            filterValue: action.payload,
          },
        },
      };

    case "UPDATE_EXPENSE_FILTER_DATA": {
      const filteredData = updateFilteredData(
        state.filters.expenses.filterValue,
        state.expenses,
      );
      // console.log("filteredData in update filter data case: ", filteredData);
      return {
        ...state,
        filters: {
          ...state.filters,
          expenses: {
            ...state.filters.expenses,
            filteredExpenses: filteredData,
          },
        },
      };
    }

    case "UPDATE_SAVINGS_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          savings: {
            ...state.filters.savings,
            filterValue: action.payload,
          },
        },
      };
    case "UPDATE_SAVINGS_FILTER_DATA": {
      const filteredData = updateFilteredData(
        state.filters.savings.filterValue,
        state.savings,
      );
      return {
        ...state,
        filters: {
          ...state.filters,
          savings: {
            ...state.filters.savings,
            filteredSavings: filteredData,
          },
        },
      };
    }
    //sorting
    case "SORT_INCOME": {
      const value = action.payload;
      console.log("value in sort income: ", value);
      let data = [];
      if (value === true) {
        data = state.filters.income.filteredIncome.sort(
          (a, b) => a.amount - b.amount,
        );
      }
      return {
        ...state,
        sort: { ...state.sort, incomeSort: value },
        filtes: {
          ...state.filters,
          income: { ...state.filters.income, filteredIncome: data },
        },
      };
    }
    case "SORT_EXPENSE": {
      const value = action.payload;
      console.log("value in sort expense: ", value);
      let data = [];
      if (value === true) {
        data = state.filters.expenses.filteredExpenses.sort(
          (a, b) => a.amount - b.amount,
        );
      }
      console.log("EXPENSE DATA !!!!!!!!!!!: ", JSON.stringify(data));
      return {
        ...state,
        sort: { ...state.sort, expenseSort: value },
        filters: {
          ...state.filters,
          expenses: { ...state.filters.expenses, filteredExpenses: data },
        },
      };
    }
    case "SORT_SAVINGS": {
      const value = action.payload;
      let data = [];
      if (value === true) {
        data = state.filters.savings.filteredSavings.sort(
          (a, b) => a.amount - b.amount,
        );
      }
      console.log("SAVINGS DATA !!!!!!!!!!!: ", JSON.stringify(data));
      return {
        ...state,
        sort: { ...state.sort, savingsSort: value },
        filters: {
          ...state.filters,
          savings: { ...state.filters.savings, filteredSavings: data },
        },
      };
    }
    default:
      return state;
  }
};

export default financeReducer;
