import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./store/todoItemsStore";

import "./Styles/App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="container border">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
