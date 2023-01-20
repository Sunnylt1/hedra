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

const allTasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectTasks = (state) => state.tasks;

export default allTasksSlice.reducer;
