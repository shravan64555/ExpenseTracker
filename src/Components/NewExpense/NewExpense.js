import Card from "../UI/Card";
import { useState } from "react";
import NewExpenseForm from "../NewExpense/NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEdit] = useState(false);
  const AddNewExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseData);
  };
  const isEditingHandler = () => {
    setEdit(true);
  };
  const isEditingHandlerFalse = () => {
    setEdit(false);
  };
  return (
    <Card className="new_Expense">
      {!isEditing && <button onClick={isEditingHandler} className="button1">Add Expense</button>}
      {isEditing && (
        <NewExpenseForm
          onAddNewExpense={AddNewExpenseHandler}
          isEdit={isEditingHandlerFalse}
        />
      )}
    </Card>
  );
};
export default NewExpense;
