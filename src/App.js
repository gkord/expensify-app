import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfigureStore from "./store/ConfigureStore";
import { addExpense } from "./actions/Expenses"
import { setTextFilter, sortByDate } from "./actions/Filters"
import getVisibleExpenses from "./selectors/Expenses"
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import "./styles/App.scss";

const store = ConfigureStore();

store.dispatch(addExpense({description: "Water Bill"}))
store.dispatch(addExpense({ description: "Gas Bill" }));
store.dispatch(setTextFilter('water'))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        {/* Switch goes through each Route checking if it's a match, if not it will render 404 page */}
      </BrowserRouter>
    );
  }
}

export default App;
