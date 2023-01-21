import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUnit = createAsyncThunk("fetchUnit", async (unitId) => {
  try {
    const { data } = await axios.get(`/api/units/${unitId}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const updateUnit = createAsyncThunk(
  "updateUnit",
  async ({ unitId, leaseStart, leaseEnd, occupancy }) => {
    try {
      const { data } = await axios.put(`/api/units/${unitId}`, {
        leaseStart,
        leaseEnd,
        occupancy,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const unitSlice = createSlice({
  name: "unit",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUnit.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateUnit.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUnit = (state) => state.unit;

export default unitSlice.reducer;
