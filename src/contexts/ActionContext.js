import React, { createContext, useState, useEffect, useContext } from "react";

const ActionContext = createContext({});

export function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <ActionContext.Provider value={{ todos, setTodos }}>
      {children}
    </ActionContext.Provider>
  );
}

export function useTodo() {
  const { todos, setTodos } = useContext(ActionContext);

  const handleAddTodo = (todoInput) =>
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  const handleTodoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo";
    }
    setTodos(cloneTodos);
  };

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing";
    }
    setTodos(cloneTodos);
  };

  const handleDoneClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "done";
    }
    setTodos(cloneTodos);
  };

  useEffect(() => {
    if (!todos.length)
    setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
  
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);
  return [
    { todos: todos.filter((todo) => todo.type === "todo"),
      doing: todos.filter((todo) => todo.type === "doing"),
      dones: todos.filter((todo) => todo.type === "done"),
    },
    { handleAddTodo, handleTodoClick, handleDoClick, handleDoneClick }
  ];
}

export default ActionContext;
