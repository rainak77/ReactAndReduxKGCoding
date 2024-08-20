import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 text-center">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
