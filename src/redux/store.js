import { configureStore } from '@reduxjs/toolkit'
import typingTestReducer from './fetures/TypingTestereSlice'

export const store = configureStore({
  reducer: {
    typingTest: typingTestReducer,
  },
})