import React from "react";
import TodoList from "../TodoList";
import "./App.css";

const todoList = [
  {
    task: "Go for the shopping",
    complete: true,
  },
  {
    task: "Start preparing for exam",
    complete: true,
  },
  {
    task: "Book tickets",
    complete: false,
  },
  {
    task: "Pack the bags, and take one extra trolley",
    complete: true,
  },
  {
    task: "Web check-in and print the boarding pass",
    complete: false,
  },
];

const getPeople = (count) =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onError = (err) => rejects(err);
    request.send();
  });

const App = () => {
  getPeople(5)
    .then((members) => console.log(members))
    .catch((error) => console.log(error));
  return (
    <div className="app">
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
