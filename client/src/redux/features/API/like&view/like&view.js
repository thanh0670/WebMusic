import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:8000/api/users";

// 👁 Tăng lượt xem
export const incrementView = createAsyncThunk(
  "song/incrementView",
  async (songId, thunkAPI) => {
    const response = await axios.patch(`${API_BASE}/view/${songId}`);
    return response.data;
  }
);

// ❤️ Like / Unlike
export const toggleLike = createAsyncThunk(
  "song/toggleLike",
  async (songId, thunkAPI) => {
    const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const response = await axios.patch(
      `${API_BASE}/like/${songId}`,
      null,
      config
    );
    return response.data;
  }
);

// 📊 Lấy thống kê
export const fetchSongStats = createAsyncThunk(
  "song/fetchSongStats",
  async (songId, thunkAPI) => {
    const response = await axios.get(`${API_BASE}/stats/${songId}`);
    return response.data;
  }
);

const songStatsSlice = createSlice({
  name: "songStats",
  initialState: {
    views: 0,
    totalLikes: 0,
    liked: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ⬆ View
      .addCase(incrementView.fulfilled, (state, action) => {
        state.views = action.payload.views;
      })
      // ❤️ Like / Unlike
      .addCase(toggleLike.fulfilled, (state, action) => {
        state.totalLikes = action.payload.totalLikes;
        state.liked = action.payload.liked;
      })
      // 📊 Stats
      .addCase(fetchSongStats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongStats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.views = action.payload.totalViews;
        state.totalLikes = action.payload.totalLikes;
      })
      .addCase(fetchSongStats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default songStatsSlice.reducer;
