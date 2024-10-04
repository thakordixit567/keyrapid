import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
  }

  const typingTestSlice = createSlice({
    name: "typingTest",
    initialState,
    reducers: {}
  })

  export default typingTestSlice.reducer