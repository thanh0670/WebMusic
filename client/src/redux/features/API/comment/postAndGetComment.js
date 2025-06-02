// redux/features/commentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// POST bình luận
export const postComment = createAsyncThunk(
  "comment/postComment",
  async ({ songId, content }, thunkAPI) => {
    const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const response = await axios.post(
      "http://localhost:8000/api/users/createComment",
      { songId, content },
      config
    );
    return response.data;
  }
);

// GET bình luận theo bài hát
export const getComments = createAsyncThunk(
  "comment/getComments",
  async (songId, thunkAPI) => {
    const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Cache-Control": "no-cache", // Gộp header vào đây luôn
      },
    };
    const response = await axios.get(
      `http://localhost:8000/api/users/getCommentsBySong/${songId}`,
      config // đúng cú pháp
    );
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    postStatus: "idle",
    postError: null,
    getStatus: "idle",
    getError: null,
    comments: [],
    commentPost: null,
  },
  reducers: {
    resetPostStatus: (state) => {
      state.postStatus = "idle";
      state.postError = null;
      state.commentPost = null;
    },
  },
  extraReducers: (builder) => {
    // POST
    builder
      .addCase(postComment.pending, (state) => {
        state.postStatus = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.postStatus = "succeeded";
        state.commentPost = action.payload;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.postStatus = "failed";
        state.postError = action.error.message;
      });

    // GET
    builder
      .addCase(getComments.pending, (state) => {
        state.getStatus = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.getStatus = "succeeded";
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.getStatus = "failed";
        state.getError = action.error.message;
      });
  },
});
export const { resetPostStatus } = commentSlice.actions;

export default commentSlice.reducer;
