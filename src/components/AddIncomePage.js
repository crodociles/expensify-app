import React from "react";
import IncomeForm from "./IncomeForm";
import { addIncome } from "../actions/income";
import { connect } from "react-redux";

class AddIncomePage extends React.Component {
  state = {};

  onSubmit = income => {
    this.props.addIncome(income);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Income</h1>
          </div>
        </div>
        <div className="content-container">
          <IncomeForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addIncome: income => dispatch(addIncome(income))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddIncomePage);
