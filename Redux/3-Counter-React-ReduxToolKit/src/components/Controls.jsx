import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, counterSlice } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const InputElement = useRef(0);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterSlice.actions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const add = () => {
    dispatch(counterActions.add({ num: InputElement.current.value }));
    InputElement.current.value = "";
  };
  const subtract = () => {
    dispatch(counterActions.subtract({ num: InputElement.current.value }));
    InputElement.current.value = "";
  };
  const handleToggle = () => {
    dispatch(privacyActions.toggle());
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
