import { configureStore } from '@reduxjs/toolkit'
import coinReducer from "../features/coin/coinSlice";
import authReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    auth: authReducer
  },
});
