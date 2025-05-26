import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  albums: [],
  status: "idle",
  error: null,
  dataAlbums: null,
  statusAlbum: "idle",
  errorAlbum: null,
};

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
        state.status = "succeeded";
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
        state.statusAlbum = "succeeded";
        state.dataAlbums = action.payload;
      })
      .addCase(createAlbum.rejected, (state, action) => {
        state.statusAlbum = "failed";
        state.errorAlbum = action.payload?.error || "Tạo album thất bại";
      });
  },
});

export default albumUserSlice.reducer;
