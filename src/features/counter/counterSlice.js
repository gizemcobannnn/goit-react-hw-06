import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

//actions store a data gonderir ornek

import { createAction } from "@reduxjs/toolkit";
export const addTask = createAction("tasks/addTask");
console.log(setStatusFilter("hello"));
// { type: "filters/setStatusFilter", payload: "hello" }

const reduxAction = {
  type: "Action type",
  payload: "Payload value",
};
const addTask = {
  type: "tasks/addTask",
  payload: {
    id: "Unique id",
    text: "User entered text",
    completed: false,
  },
};

const deleteTask = {
  type: "tasks/deleteTask", //tasks veya filters)
  payload: "Task id",
};

const toggleCompleted = {
  type: "tasks/toggleCompleted",
  payload: "Task id",
};

const setStatusFilter = {
  type: "filters/setStatusFilter",
  payload: "Filter value",
};

//Dispatch
// Hook içe aktarıyoruz
import { useDispatch } from "react-redux";