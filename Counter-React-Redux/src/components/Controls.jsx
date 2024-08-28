import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const InputElement = useRef(0);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const add = () => {
    dispatch({
      type: "ADD",
      payload: { num: InputElement.current.value },
    });
    InputElement.current.value = "";
  };
  const subtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: InputElement.current.value },
    });
    InputElement.current.value = "";
  };
  const handleToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
        <button type="button" className="btn btn-primary" onClick={increment}>
          +1
        </button>
        <button type="button" className="btn btn-success" onClick={decrement}>
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
          privacy toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          ref={InputElement}
          type="number"
          placeholder="Enter number"
          name="number"
        />
        <button type="button" className="btn btn-primary" onClick={add}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={subtract}>
          subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
