import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	taskList: [],
	total: 0,
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.taskList.push(action.payload);
			state.total++;
		},
		clearTaskList: (state) => {
			state.taskList = [];
			state.total = 0;
		},
		removeTask: (state, action) => {
			state.taskList.splice(action.payload, 1);
			state.total--;
		},
	},
});

export const { addTask, clearTaskList, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
