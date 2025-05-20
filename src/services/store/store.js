import { configureStore } from '@reduxjs/toolkit'
import languageSliceReducer from './languageSlice'

export const store = configureStore({
  reducer: {
    language: languageSliceReducer,
  },
})
