import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Empty } from "../icons";

import { useDispatch } from "react-redux";
import { addTask, removeTask } from "../features/todo";

import "../index.css";

export default function TaskList() {
  const total = useSelector((store) => store.task.total);

  const taskList = useSelector((store) => store.task.taskList);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleSidebar = () => {
    setMenuVisible(!menuVisible);
  };

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      task: event.target.task.value,
      description: event.target.description.value,
      category: event.target.category.value,
    };
    dispatch(addTask(task));
    setMenuVisible(!menuVisible);
  }

  function RemoveTask(index) {
    dispatch(removeTask(index));
  }
  if (total < 1) {
    return (
      <>
        <div className="emptyContainer">
          <Empty />
          <div>
            <h2>You have no tasks today!</h2>
            <p>Click on the tasks button to add tasks.</p>
          </div>
        </div>
        <button className="addClass" onClick={toggleSidebar}>
          Add Task
        </button>

        {/* Conditional Rendering of Menu*/}

        {menuVisible && (
          <>
            <div className="overlay" onClick={toggleSidebar}></div>
            <>
              <div className="menu-container">
                <button id="xButton" onClick={toggleSidebar}>
                  x
                </button>
                <hr />

                <form onSubmit={handleSubmit}>
                  <h2 id="addHeader">Add a Task</h2>

                  <div className="input-group">
                    <input type="text" required id="task" />
                    <label htmlFor="task">Task</label>
                  </div>
                  <div className="input-group">
                    <input type="text" required id="description" />
                    <label htmlFor="description" id="descLabel">
                      Description
                    </label>
                  </div>
                  <div className="input-group">
                    <input type="text" required id="category" />
                    <label htmlFor="category" id="catLabel">
                      Category
                    </label>
                  </div>
                  <button type="submit" className="sub">
                    Add
                  </button>
                </form>
              </div>
            </>
          </>
        )}
      </>
    );
  }

  return (
    <>
      <div style={{ position: "relative", top: "50px" }}>
        <div className="tasks-container">
          {taskList.map((task, index) => (
            <div className="taskDiv" key={index}>
              <input type="checkbox" name="taskCheckbox" />

              <span style={{ fontSize: "20px" }}> {task.task} </span>
              <span>{task.description} </span>

              <div id="catDiv">
                <div>#{task.category}</div>
              </div>
              <span className="remove-task" onClick={() => RemoveTask(index)}>
                X
              </span>
            </div>
          ))}
        </div>
        <button id="addTaskBtn" onClick={toggleSidebar}>
          Add Task
        </button>
      </div>

      {/* Conditional Rendering of Menu*/}
      {menuVisible && (
        <>
          <div className="overlay" onClick={toggleSidebar}></div>
          <>
            <div className="menu-container">
              <button id="xButton" onClick={toggleSidebar}>
                x
              </button>
              <hr />

              <form onSubmit={handleSubmit}>
                <h2 id="addHeader">Add a Task</h2>

                <div className="input-group">
                  <input type="text" required id="task" />
                  <label htmlFor="task">Task</label>
                </div>
                <div className="input-group">
                  <input type="text" required id="description" />
                  <label htmlFor="description" id="descLabel">
                    Description
                  </label>
                </div>
                <div className="input-group">
                  <input type="text" required id="category" />
                  <label htmlFor="category" id="catLabel">
                    Category
                  </label>
                </div>
                <button type="submit" className="sub">
                  Add
                </button>
              </form>
            </div>
          </>
        </>
      )}
    </>
  );
}
