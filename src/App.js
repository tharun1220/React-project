import React from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.15,
      date: new Date(2021, 3, 31),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 184.45,
      date: new Date(2021, 8, 11),
    },
    {
      id: "e3",
      title: "Food",
      amount: 200.89,
      date: new Date(2021, 7, 21),
    },
    {
      id: "e4",
      title: "Movies",
      amount: 150.99,
      date: new Date(2021, 11, 1),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
