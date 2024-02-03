import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated!');
    setAmount(100);

    console.log(title);
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
