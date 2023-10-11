import { configureStore } from "@reduxjs/toolkit";
import sportReducer from "./features/sportSlice";

export const store = configureStore({
  reducer: {
    sport: sportReducer,
  },
});
