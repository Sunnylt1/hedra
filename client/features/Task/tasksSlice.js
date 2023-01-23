import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTasks = createAsyncThunk("tasks/fetchAll", async () => {
  try {
    const { data } = await axios.get("/api/tasks");
    return data;
  } catch (error) {
    return error.message;
  }
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async ({ name, description, isComplete }) => {
    try {
      const { data } = await axios.post("/api/tasks", {
        name,
        description,
        isComplete,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const allTasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectTasks = (state) => state.tasks;

export default allTasksSlice.reducer;
