import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["Shabji", "Ghee", "Salad"]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let totalItems = [...foodItems, newFoodItem];
      setFoodItems(totalItems);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <h1 className="food-heading ">Healthy Food</h1>
      <FoodInput handleKeyDown={handleKeyDown} />
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;
