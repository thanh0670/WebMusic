import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataSong: null, // Bài hát đang phát
  data: null, // Thông tin album hiện tại
  arrayDataSong: [], // Danh sách bài hát trong album
  originalArraySong: [],
  currentIndex: 0, // Index bài hát đang phát
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.dataSong = action.payload;
    },
    setCurrentAlbum: (state, action) => {
      state.data = action.payload;
    },
    setArrayDataSong: (state, action) => {
      state.arrayDataSong = action.payload;
    },
    setOriginalArraySong(state, action) {
      state.originalArraySong = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
      // Cập nhật luôn bài hát tương ứng:
      const song = state.arrayDataSong[action.payload];
      if (song) state.dataSong = song;
    },
    nextSong: (state) => {
      const nextIdx = (state.currentIndex + 1) % state.arrayDataSong.length;
      state.currentIndex = nextIdx;
      state.dataSong = state.arrayDataSong[nextIdx];
    },
    prevSong: (state) => {
      const length = state.arrayDataSong.length;
      const prevIdx = (state.currentIndex - 1 + length) % length;
      state.currentIndex = prevIdx;
      state.dataSong = state.arrayDataSong[prevIdx];
    },
  },
});

export const {
  setCurrentSong,
  setCurrentAlbum,
  setArrayDataSong,
  setCurrentIndex,
  setOriginalArraySong,
  nextSong,
  prevSong,
} = playerSlice.actions;

export default playerSlice.reducer;
