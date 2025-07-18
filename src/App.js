import {useState} from 'react'
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const InitialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 0, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,UpdateExpense]=useState(InitialExpenses)
  
  const newExpenseHandler=(expenseData)=>{
    console.log(expenseData)
    UpdateExpense(prevExpense=>{
      return [expenseData,...prevExpense]
    })
  }
  return (
    <div className="App">
    <p> Hi Checking clud build</p>
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
