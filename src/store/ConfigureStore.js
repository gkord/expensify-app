import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/Expenses";
import filtersReducer from "../reducers/Filters";

export default () => {
  //Store Creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
