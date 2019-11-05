import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/Filters";

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) =>{
        props.dispatch(setTextFilter(e.target.value))
        console.log(e.target.value)
    }} />
  </div>
);

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ExpenseListFilters);
