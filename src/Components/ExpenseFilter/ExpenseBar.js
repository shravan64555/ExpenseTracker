import "./ExpenseBar.css";
const ExpenseBar = (props) => {
  const MonthlyIncome=1000;
  var heightValue = "0%";
   var IncomeSpent=(props.value/MonthlyIncome)*100;
    heightValue = IncomeSpent + "%";
  return (
    <div>
      <div className="expense_bar">
        <div className="expense_bar_fill" style={ IncomeSpent<100?{height: heightValue }:{height:heightValue, backgroundColor:"red"}}></div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};
export default ExpenseBar;
