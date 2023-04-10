import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [selectedYear, setSelectedYear] = useState("2023");
  const onFilterByYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    setExpenses(
      props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
      })
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterByYear={onFilterByYearHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
