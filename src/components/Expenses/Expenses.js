import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onFilterByYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterByYear={onFilterByYearHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
