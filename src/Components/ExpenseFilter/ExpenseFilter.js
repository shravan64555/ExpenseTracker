import './ExpenseFilter.css'
import './ExpenseChart'

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeFilterYear(event.target.value)
  };
  return (
    
   <div>
   <div className="expense_filter">
   <h2> Filter by Year</h2>
   <form>
     <select onChange={yearChangeHandler} value={props.selected}>
       <option value='2018'>2018</option>
       <option value='2019'>2019</option>
       <option value='2020'>2020</option>
       <option value='2021'>2021</option>
       <option value='2022'>2022</option>
     </select>
   </form>
   </div>
   </div>
  );
};
export default ExpenseFilter;
