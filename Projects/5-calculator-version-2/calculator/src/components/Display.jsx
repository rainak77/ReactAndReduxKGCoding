import styles from "./Display.module.css";
export default function Display({ calValue }) {
  return (
    <input value={calValue} className={styles.display} type="text" readOnly />
  );
}
