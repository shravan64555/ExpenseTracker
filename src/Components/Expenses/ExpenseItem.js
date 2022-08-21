import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
  return (
    <Card className="expense">
      <ExpenseDate date={props.date} />
      <div className="expense_title">
        <h2>{props.title}</h2>
        </div>
        <div className="expense_price">${props.amount}
      </div>
    </Card>
  );
}

export default ExpenseItem;
