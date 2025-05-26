import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  response: "",
  status: "idle",
  error: "",
};

// Thực hiện DELETE audio
export const deleteAudio = createAsyncThunk(
  "deleteFiles",
  async ({ id }, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/admin/deleteAudio/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response?.data?.message || "Xoá audio thất bại"
      );
    }
  }
);
export const resDeleteAudioSlice = createSlice({
  name: "deleteDataAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAudio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAudio.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
      })
      .addCase(deleteAudio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default resDeleteAudioSlice.reducer;
