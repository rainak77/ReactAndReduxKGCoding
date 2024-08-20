import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelcomeMessage = () => {
  const { items } = useContext(TodoItemsContext);
  return (
    items.length === 0 && <div className={styles.welcome}>Enjoy your day</div>
  );
};

export default WelcomeMessage;
