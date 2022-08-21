import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = (props) => {
  if (props.FilteredLists.length == 0) {
    return <h2>No expenses found</h2>;
  }
  return (
    <div>
      {props.FilteredLists.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default ExpenseList;
