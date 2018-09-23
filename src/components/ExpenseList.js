import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        <div>
          <div className="list-category">Rent</div>
          {props.expenses.map(
            expense =>
              expense.category === "rent" && (
                <ExpenseListItem key={expense.id} {...expense} />
              )
          )}
          <div className="list-category">Entertainment</div>
          {props.expenses.map(
            expense =>
              expense.category === "entertainment" && (
                <ExpenseListItem key={expense.id} {...expense} />
              )
          )}
          <div className="list-category">Food</div>
          {props.expenses.map(
            expense =>
              expense.category === "food" && (
                <ExpenseListItem key={expense.id} {...expense} />
              )
          )}
          <div className="list-category">Travel</div>
          {props.expenses.map(
            expense =>
              expense.category === "travel" && (
                <ExpenseListItem key={expense.id} {...expense} />
              )
          )}
          <div className="list-category">Other</div>
          {props.expenses.map(
            expense =>
              expense.category === "other" && (
                <ExpenseListItem key={expense.id} {...expense} />
              )
          )}
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
