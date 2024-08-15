import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

const TodoItemsContextProvider = ({ children }) => {
  const todoItemReducer = (currentTodoItems, action) => {
    let newTodoitems = currentTodoItems;
    if (action.type === "ADDNEW_ITEM") {
      newTodoitems = [
        ...currentTodoItems,
        {
          todoname: action.payload.itemName,
          todoDate: action.payload.ItemDate,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoitems = newTodoitems.filter(
        (item) => item.todoname !== action.payload.itemname
      );

      return newTodoitems;
    }
    return newTodoitems;
  };
  const [items, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addItem = (itemName, ItemDate) => {
    const newItemAction = {
      type: "ADDNEW_ITEM",
      payload: {
        itemName,
        ItemDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (itemname) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemname,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
