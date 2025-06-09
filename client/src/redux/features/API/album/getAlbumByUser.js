import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router";

const initialState = {
  albums: [],
  status: "idle",
  error: null,
  dataAlbums: null,
  statusAlbum: "idle",
  errorAlbum: null,
  dataAlbumDetail: null,
  statusAlbumDetaill: "idle",
  errorAlbumDetail: null,
  dataAddAlbum: null,
  statusAddAlbum: "idle",
  errorAddAlbum: null,
};
export const getAlbumDetail = createAsyncThunk(
  "albumUser/getAlbumDetail",
  async (id, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
      const response = await axios.get(
        `http://localhost:8000/api/users/getAlbumDetail/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Lỗi khi lấy chi tiết album" }
      );
    }
  }
);

export const createAlbum = createAsyncThunk(
  "albums/createAlbum",
  async (name, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("MUSIC_ACCESSTOKEN");
      const response = await axios.post(
        "http://localhost:8000/api/users/createAlbum",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Lỗi khi tạo album" }
      );
    }
  }
);

export const getAlbumByUser = createAsyncThunk(
  "albumUser/getAllAlbums",
  async () => {
    try {
      const accessToken = localStorage.getItem("MUSIC_ACCESSTOKEN");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(
        "http://localhost:8000/api/users/getAlbumsByUser",
        config
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  }
);

export const addSongToAlbum = createAsyncThunk(
  "albums/addSongToAlbum",
  async ({ albumId, songId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("MUSIC_ACCESSTOKEN");
      const response = await axios.post(
        "http://localhost:8000/api/users/addSongToAlbum",
        { albumId, songId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Lỗi khi thêm bài hát vào album" }
      );
    }
  }
);

export const albumUserSlice = createSlice({
  name: "albumUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumByUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAlbumByUser.fulfilled, (state, action) => {
        state.status = "successed";
        state.albums = action.payload;
      })
      .addCase(getAlbumByUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // createAlbum
      .addCase(createAlbum.pending, (state) => {
        state.statusAlbum = "loading";
      })
      .addCase(createAlbum.fulfilled, (state, action) => {
        state.statusAlbum = "successed";
        state.dataAlbums = action.payload;
      })
      .addCase(createAlbum.rejected, (state, action) => {
        state.statusAlbum = "failed";
        state.errorAlbum = action.payload?.error || "Tạo album thất bại";
      })
      //getDetailAlbum
      .addCase(getAlbumDetail.pending, (state) => {
        state.statusAlbumDetaill = "loading";
      })
      .addCase(getAlbumDetail.fulfilled, (state, action) => {
        state.statusAlbumDetaill = "succeeded";
        state.dataAlbumDetail = action.payload; // Lưu chi tiết album vào state
      })
      .addCase(getAlbumDetail.rejected, (state, action) => {
        state.statusAlbumDetaill = "failed";
        state.errorAlbumDetail =
          action.payload?.error || "Lỗi khi tải chi tiết album";
      })
      // addSongToAlbum
      .addCase(addSongToAlbum.pending, (state) => {
        state.statusAddAlbum = "loading"; // dùng lại status chi tiết nếu muốn
      })
      .addCase(addSongToAlbum.fulfilled, (state, action) => {
        state.statusAddAlbum = "succeeded";
        state.errorAddAlbum = action.payload.album; // cập nhật album mới sau khi thêm bài hát
      })
      .addCase(addSongToAlbum.rejected, (state, action) => {
        state.statusAddAlbum = "failed";
        state.errorAddAlbum =
          action.payload?.error || "Thêm bài hát vào album thất bại";
      });
  },
});

export default albumUserSlice.reducer;
