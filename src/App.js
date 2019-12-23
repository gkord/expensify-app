import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfigureStore from "./store/ConfigureStore";
import { addExpense } from "./actions/Expenses";
import getVisibleExpenses from "./selectors/Expenses";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import "./styles/App.scss";

const store = ConfigureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
