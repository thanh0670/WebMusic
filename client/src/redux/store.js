import { configureStore } from "@reduxjs/toolkit";
import currentSlice from "./features/counter/currentSlice";
import valueAdminSlice from "./features/counter/valueAdminSlice";
import valueAudioSlice from "./features/API/postAudio";
import resAudioSlice from "./features/API/putAudio";
import resDeleteAudioSlice from "./features/API/deleteAudio";
import valueUserSlice from "./features/counter/valueUserSlice";
import playerReducer from "./features/counter/playerSlice";
import albumUserSlice from "./features/API/album/getAlbumByUser";
import commentsReducer from "./features/API/comment/postAndGetComment";
export const store = configureStore({
  reducer: {
    current: currentSlice,
    admin: valueAdminSlice,
    postAudio: valueAudioSlice,
    putAudio: resAudioSlice,
    deleteAudio: resDeleteAudioSlice,
    user: valueUserSlice,
    audio: playerReducer,
    albums: albumUserSlice,
    commet: commentsReducer,
  },
});
