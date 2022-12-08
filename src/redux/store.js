import { configureStore } from '@reduxjs/toolkit'
import {globalReducer} from './data/globalSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})



