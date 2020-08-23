import React from "react";

const Todos = ({ todos }) => {
  const notCompletedTodoList = todos.filter((todo) => {
    if (todo.completed === false) {
      return todo;
    }
  });
  const todoList = notCompletedTodoList.map((todo) => {
    return (
      <div className="collection-item">
        <p>{todo.content}</p>
      </div>
    );
  });
  return <div className="collection">{todoList}</div>;
};

export default Todos;
