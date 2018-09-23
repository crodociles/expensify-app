import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { Link } from "react-router-dom";

export const ExpensesSummary = ({ expenseCount, expensesTotal, income }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  const formattedSalary = numeral(income.salary / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <div className="page-header__title-section">
            {income.salary ? (
              <p>
                Salary is <span>{formattedSalary}</span>
              </p>
            ) : (
              <p>No Income added</p>
            )}
            <div className="page-header__actions">
              <Link className="button" to="/income">
                Add Income
              </Link>
            </div>
          </div>
          <div className="page-header__title-section">
            Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
            <span>{formattedExpensesTotal}</span>
            <div className="page-header__actions">
              <Link className="button" to="/create">
                Add Expense
              </Link>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    income: state.income
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
