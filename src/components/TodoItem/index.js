import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  console.log(React.createElement("h1", { id: "receipe-0" }, "Baked Salmon"));
  const { item } = props;
  return (
    <div className="todoItem">
      <input type="checkbox" checked={item.complete} />
      <p>{item.task}</p>
      <hr />
    </div>
  );
};

export default TodoItem;
