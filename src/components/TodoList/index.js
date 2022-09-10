import React from "react";
import TodoItem from "../TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  const { todoList } = props;
  return (
    <div className="todolist">
      <h2>To-do List</h2>
      <div className="list">
        {todoList.map((item) => {
          return <TodoItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
