import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProperty = createAsyncThunk(
  "fetchProperty",
  async (propertyId) => {
    try {
      const { data } = await axios.get(`/api/properties/${propertyId}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const editProperty = createAsyncThunk(
  "editProperty",
  async ({
    propertyId,
    name,
    address,
    imageUrl,
    yearBuilt,
    totalUnits,
    description,
  }) => {
    try {
      const { data } = await axios.put(`/api/properties/${propertyId}`, {
        name,
        address,
        imageUrl,
        yearBuilt,
        totalUnits,
        description,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProperty.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editProperty.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectProperty = (state) => state.property;

export default propertySlice.reducer;
