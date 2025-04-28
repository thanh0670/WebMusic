import { configureStore } from '@reduxjs/toolkit'
import currentSlice from './features/counter/currentSlice'
import valueAdminSlice from './features/counter/valueAdminSlice'
import  valueAudioSlice  from './features/API/postAudio'
export const store = configureStore({
    reducer: {
        current: currentSlice,
        admin:valueAdminSlice,
        postAudio:valueAudioSlice
    },
})