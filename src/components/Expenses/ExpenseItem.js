import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  /**
   * regular variable does not trigger re-rendering after the value changes (unlike default Angular two-way binding).
   * we need to use state and a function to update the state, to make React re-evaluate this jsx-returning function (here ExpenseItem)
   * if not, React will only evaluate ExpenseItem once (starting from the root and then all the diret children components, and then all the grandchildren and so on)
   *
   * why const here?
   * answer: because when title is updated, ExpenseItem is re-evaluated, therefore we always get a new title state independent from the previous title state
   * but, what about the props.title in parameter?
   * answer: React actually knows whether it's the first time evaluating the ExpenseItem or not
   * if it's not the first time ExpenseItem being evaluated, React will not initialize again with the props.title,
   * instead, it will grab the latest value of the state
   */
  const [title, setTitle] = useState(props.title);
  /**
   * to see if this component is evaluated or re-evaluated
   */
  console.log("Expense item evaluated");
  /**
   * handling click event
   */
  const clickHandler = () => {
    /**
     * notice the log in the console, setTitle does not change value right away, but it schedules the change
     * **/
    setTitle("Electric Bill");
    console.log(title);
  };

  /**
   * handling mouse over event
   */
  const mouseOverHandler = () => {
    console.log("onMouseOver");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} onMouseOver={mouseOverHandler}>
        Click Me xD
      </button>
    </Card>
  );
};

export default ExpenseItem;
