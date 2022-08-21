import "./ExpenseBar.css";
const ExpenseBar = (props) => {
  var heightValue = "0%";
  if (props.maxValue > 0) {
    heightValue = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div>
      <div className="expense_bar">
        <div className="expense_bar_fill" style={{ height: heightValue }}></div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};
export default ExpenseBar;
