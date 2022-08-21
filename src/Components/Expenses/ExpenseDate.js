import './ExpenseDate.css'
function ExpenseDate(props){
    const Month=props.date.toLocaleString('en-US',{month:'long'})
    const Day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const Year=props.date.getFullYear()
    return(
        <div className="expense_date">
        <div className="expense_date_month">{Month}</div>
        <div className="expense_date_year">{Year}</div>
        <div className="expense_date_day">{Day}</div>
      </div>
    )
}
export default ExpenseDate;