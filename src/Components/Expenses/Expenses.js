import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseBarChart from "./ExpenseBarChart";
function Expenses(props) {
  const [FilteredYear, setFilteredYear] = useState("2022");

  const FilterChangeHandler = (changeYear) => {
    setFilteredYear(changeYear);
  };
  const FilteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilterYear={FilterChangeHandler}
        selected={FilteredYear}
      />
      <ExpenseBarChart expenses={FilteredExpenses} />
      <ExpenseList FilteredLists={FilteredExpenses} />
    </Card>
  );
}
export default Expenses;
