import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ items }) {
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
}
