import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <div className="mb-4">Counter current Value: {counter}</div>;
};

export default DisplayCounter;
