const expensesReducerDefaultState = "";
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return action.income;
    default:
      return state;
  }
};
