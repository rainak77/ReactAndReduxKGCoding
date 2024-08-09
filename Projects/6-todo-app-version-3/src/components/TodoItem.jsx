import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todoName, todoDate, handleDeleteItem }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 text-center">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleDeleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
