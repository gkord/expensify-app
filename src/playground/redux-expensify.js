import { createStore, combineReducers } from "redux";

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SORT_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action, type) {
        default:
            return state;
    }

}

//Store Creation
const store = createStore(expensesReducer)
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "djcndj",
      description: "January Rent",
      note: "this was the final payment for that address",
      amount: 150000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
