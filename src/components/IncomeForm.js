import React, { Component } from "react";

class IncomeForm extends Component {
  state = {
    salary: 0,
    other: 0,
    error: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.income);

    if (!this.state.salary) {
      this.setState({
        error: "Please provide salary amount."
      });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        salary: parseFloat(this.state.salary, 10) * 100,
        other: this.state.other
      });
    }
  };

  onSalaryChange = e => {
    const salary = e.target.value;
    this.setState({
      salary
    });
  };
  onOtherChange = e => {
    const other = e.target.value;
    this.setState({
      other
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="number"
          className="text-input"
          onChange={this.onSalaryChange}
        />
        <input
          type="number"
          className="text-input"
          onChange={this.onOtherChange}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default IncomeForm;
