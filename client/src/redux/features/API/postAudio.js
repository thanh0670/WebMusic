import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  audioUrl: "",
  imageUrl: "",
  status: "idle",
  error: "",
};

// Thực hiện upload file (audio, image)
export const uploadFiles = createAsyncThunk(
  "dataAdmin/uploadFiles",
  async (fileData, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");

    const formData = fileData;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/uploadAudio",
        formData,
        config
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data); // Ném lỗi nếu có
    }
  }
);

export const valueAudioSlice = createSlice({
  name: "postDataAdmin",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadFiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.audioUrl = action.payload.audioUrl; // Lưu URL của audio
        state.imageUrl = action.payload.imageUrl; // Lưu URL của hình ảnh
      })
      .addCase(uploadFiles.rejected, (state, action) => {
        state.status = "failed"; // Khi upload thất bại
        state.error = action.payload || action.error.message; // Lưu lỗi vào state
      });
  },
});
export const { resetStatus } = valueAudioSlice.actions;
export default valueAudioSlice.reducer;
