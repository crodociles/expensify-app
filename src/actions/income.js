import database from "../firebase/firebase";

// ADD_INCOME - REDUX
export const addIncome = income => ({
  type: "ADD_INCOME",
  income
});

//ADD_ICOME - DB & REDUX
// export const startAddIncome = (incomeData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const { salary = "", other = "" } = incomeData;
//     const income = { salary, other };
//     console.log(income);
//     return database
//       .ref(`users/${uid}/income`)
//       .push(income)
//       .then(ref => {
//         dispatch(
//           addIncome({
//             id: ref.key,
//             ...income
//           })
//         );
//       });
//   };
// };
