import React, { useState } from "react";
import "./index.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearTaskList } from "./features/todo";

export const Tasks = ({}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
      {toggleMenu && <TasksMenu onClick={handleClick} />}
    </>
  );
};

export const TasksMenu = ({ onClick }) => {
  const total = useSelector((store) => store.task.total);

  const taskList = useSelector((store) => store.task.taskList);

  const dispatch = useDispatch();

  const clearAll = (e) => {
    if (taskList.length == 0) {
      e.preventDefault();
    } else {
      dispatch(clearTaskList(taskList));
      setToggleMenu(!toggleMenu);
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClick}></div>
      <div className="menu-container">
        <button id="xButton" onClick={onClick}>
          x
        </button>
        <hr />
        <form className="totalTasks">
          <h2 style={{ color: "black" }}>Total Tasks : {total}</h2>
          <button type="submit" id="clearBtn2" onClick={clearAll}>
            Clear All Tasks
          </button>
        </form>
      </div>
    </>
  );
};

export const Empty = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="empty"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
      />
    </svg>
  );
};
