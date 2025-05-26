import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: "",
};

export const dataUser = createAsyncThunk(
  "API/getdata rom database",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/getData"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const valueUserSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dataUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(dataUser.fulfilled, (state, action) => {
        state.status = "successed";
        state.response = action.payload;
      })
      .addCase(dataUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { } = currentSlice.actions

export default valueUserSlice.reducer;
