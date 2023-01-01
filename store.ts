import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type
export type AppDispatch = typeof store.dispatch