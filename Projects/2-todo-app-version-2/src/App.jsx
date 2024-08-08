import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./Styles/App.css";

function App() {
  const todoItems = [
    {
      todoname: "Buy Milk",
      todoDate: "4/10/2023",
    },
    {
      todoname: "Go to college",
      todoDate: "4/10/2023",
    },
  ];
  return (
    <div className="container">
      <AppName />
      <AddTodo />
      <TodoItems items={todoItems} />
    </div>
  );
}

export default App;
