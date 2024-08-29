import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterValue } = useSelector((store) => store.counter);

  return <div className="mb-4">Counter current Value: {counterValue}</div>;
};

export default DisplayCounter;
