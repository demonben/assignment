import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from "../lib/api";
export const getDataAsync = createAsyncThunk("/data/getDataAsync", async () => {
  const response = await fetch(
    "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q&per_page=9&page=1"
  );
 
  if (response.ok) {
    const data = await response.json();
    return { data };
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: [
 
  ],
  reducers: {
    addData: (state, action) => {
      const newData = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.push(newData);
    },
  },
  extraReducers: {
    [getDataAsync.fulfilled]: (state, action) => {
      return action.payload.data;
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
