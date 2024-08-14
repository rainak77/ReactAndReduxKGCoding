import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ handleNewItem }) {
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButton = (event) => {
    event.preventDefault();
    const nameValue = todoNameElement.current.value;
    const dateValue = todoDateElement.current.value;
    handleNewItem(nameValue, dateValue);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            {" "}
            <BiMessageAdd />{" "}
          </button>
        </div>
        <div>{}</div>
      </form>
    </div>
  );
}

export default AddTodo;
