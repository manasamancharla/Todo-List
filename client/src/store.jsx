import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/todo";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
