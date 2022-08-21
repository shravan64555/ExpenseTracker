import './NewExpenseForm.css'
import {useState} from 'react';
const NewExpenseForm=(props)=>{
    const [userInput,setUserInput]=useState({
        title:'',
        amount:'',
        date:''
    })
    const TitleChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {...prevState,title:event.target.value}
        })
    }
    const AmountChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {...prevState,amount:+event.target.value}
        })
    }
    const DateChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {...prevState,date:new Date(event.target.value)}
        })
    }
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        props.onAddNewExpense(userInput)
        setUserInput((prevState)=>{
            return{
                title:'',
                amount:'',
                date:''
            }
        })
    }
    return(
        <form className="new_expense_form" onSubmit={formSubmitHandler}>
        <label>Title:</label>
        <input type="text" value={userInput.title} onChange={TitleChangeHandler} />
        <label >Amount:</label>
        <input type="number" min="1" step="0.1" value={userInput.amount} onChange={AmountChangeHandler}/>
        <br></br>
        <br/>
        <label>Date:</label>
        <input type="Date" min="2018-01-01" max='2022-12-31' value={userInput.date} onChange={DateChangeHandler} />
        <button type="button" onClick={props.isEdit}>Cancel</button>
        <button type="submit">Add Expense</button>
        </form>
    )
}
export default NewExpenseForm;