import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  const [activeItems, setActiveItems] = useState([]);

  const handleBuybuttonClicked = (currentItem, event) => {
    let newitems = [...activeItems, currentItem];
    setActiveItems(newitems);
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuybutton={(event) => handleBuybuttonClicked(item, event)}
          bought={activeItems.includes(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
