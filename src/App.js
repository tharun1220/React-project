import ExpenseItem from "./Components/ExpenseItem";

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

  return (
    <div>
      <h2> Let's get started </h2>
      
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
