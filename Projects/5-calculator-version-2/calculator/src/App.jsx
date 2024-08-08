import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calValue, setValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setValue(result);
    } else {
      const newValue = calValue + buttonText;
      setValue(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calValue={calValue} />
      <ButtonsContainer buttonClick={onButtonClick} />
    </div>
  );
}

export default App;
