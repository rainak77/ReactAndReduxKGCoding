import styles from "./item.module.css";

export default function Item({ foodItem }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
}
