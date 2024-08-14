import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./Styles/App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      todoname: "Buy Milk",
      todoDate: "4/10/2023",
    },
    {
      todoname: "Go to college",
      todoDate: "4/10/2023",
    },
  ];
  const [todoItems, setItems] = useState([]);
  const handleNewItem = (itemName, ItemDate) => {
    // const newtodoItems = [
    //   ...todoItems,
    //   { todoname: itemName, todoDate: ItemDate },
    // ];

    setItems((currentItems) => [
      ...currentItems,
      { todoname: itemName, todoDate: ItemDate },
    ]);
  };

  const handleDeleteItem = (itemname) => {
    const filteredItem = todoItems.filter((item) => item.todoname !== itemname);
    setItems(filteredItem);
  };

  return (
    <center className="container border">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems handleDeleteItem={handleDeleteItem} items={todoItems} />
    </center>
  );
}

export default App;
