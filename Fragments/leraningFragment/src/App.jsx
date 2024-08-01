import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["shabji", "chal", "greenVegetable", "roti", "milk"];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodItems foodItems={foodItems} />
      <ErrorMessage foodItems={foodItems} />
    </>
  );
}

export default App;
