import React from "react";
import { useSelector } from "react-redux";

import "../index.css";
import { Tasks } from "../icons";

export default function NavBar() {
  const total = useSelector((store) => store.task.total);

  return (
    <nav>
      <h1>To-do List</h1>
      <Tasks />
      <span className="total-container">{total}</span>
    </nav>
  );
}
