import { configureStore } from '@reduxjs/toolkit'
import currentSlice from './features/counter/currentSlice'
import valueAdminSlice from './features/counter/valueAdminSlice'

export const store = configureStore({
    reducer: {
        current: currentSlice,
        admin:valueAdminSlice
    },
})