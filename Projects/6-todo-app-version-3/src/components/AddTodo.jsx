import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    console.log("value-", event.target.value);
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButton = () => {
    handleNewItem(todoName, date);
    setDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            value={todoName}
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleAddButton}
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
