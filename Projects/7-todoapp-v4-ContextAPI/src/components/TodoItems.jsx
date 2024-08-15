import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import React, { useContext } from "react";

const TodoItems = () => {
  const { items } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <TodoItem
          key={item.todoname}
          todoName={item.todoname}
          todoDate={item.todoDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
