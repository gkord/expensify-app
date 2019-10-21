import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const ExpenseDashBoardPage = () => {
  return <div>This is the dashboard component</div>;
};
const AddExpensePage = () => {
  return <div>This is the expense component</div>;
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ExpenseDashBoardPage} />
          <Route path="/create" component={AddExpensePage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
