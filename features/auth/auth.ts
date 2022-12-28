import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth"

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserIn: (state) => {

    }
  }
})

export const { logUserIn }  = authSlice.actions;

export default authSlice.reducer;