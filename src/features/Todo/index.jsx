import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const inittodoList = [
    {
      id: 1,
      title: "name1",
      status: "new",
    },
    {
      id: 2,
      title: "name2",
      status: "completed",
    },
    {
      id: 3,
      title: "name3",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(inittodoList);
  const [fillterr, setFillter] = useState("all");

  const handleTodoClick = (todo, index) => {
    // clone current array to  the new one
    const newTodoList = [...todoList];

    console.log(todo, index);

    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // update
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    setFillter("all");
  };
  const handleShowCompleted = () => {
    setFillter("completed");
  };
  const handleShowNew = () => {
    setFillter("new");
  };
  const renderTodoList = todoList.filter(
    (todo) => fillterr === "all" || fillterr === todo.status
  );
  console.log(renderTodoList);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show new</button>
      </div>
    </div>
  );
}

export default TodoFeature;
