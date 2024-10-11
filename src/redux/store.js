import { configureStore } from '@reduxjs/toolkit'
import typingTestReducer from './features/typingTestSlice'

export const store = configureStore({
  reducer: {
    typingTest: typingTestReducer,
  },
})