import "./ExpenseChart.css";
import ExpenseBar from "./ExpenseBar";
const ExpenseChart = (props) => {
  const values=props.dataPoints.map(datapoint=>
    datapoint.value)
  const totalMax=Math.max(...values)
  return (
    <div className="expense_chart">
      <div className="expense_chart_bar">
        {props.dataPoints.map((datapoint) => {
          return (
            <ExpenseBar
              label={datapoint.label}
              value={datapoint.value}
              maxValue={totalMax}
              key={datapoint.label}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ExpenseChart;
