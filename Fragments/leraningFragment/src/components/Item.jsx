import styles from "./item.module.css";

const Item = ({ foodItem, bought, handleBuybutton }) => {
  return (
    <li
      id={`${foodItem}listItem`}
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuybutton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
