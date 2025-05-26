import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router";

const initialState = {
  dataSong: null,
  data: null,
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
  },
});

export const { setCurrentSong, setCurrentAlbum } = playerSlice.actions;
export default playerSlice.reducer;
