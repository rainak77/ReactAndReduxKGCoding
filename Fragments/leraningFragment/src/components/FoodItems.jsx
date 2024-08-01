import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
