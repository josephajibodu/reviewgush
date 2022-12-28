import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import AuthManagerService from "../../services/AuthManagerService";
import { LoadingState, LoginData, RegisterData } from "../../types";

export interface AuthState {
  user: User | null;
  status: LoadingState;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
};

// Async Thunks

/**
 * Log User In with Email and Password
 */
export const logUserIn = createAsyncThunk("auth/logUserIn", async (data: LoginData, {rejectWithValue}) => {
  try {
     return AuthManagerService.logUserIn(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

/**
 * Log User out of their account
 */
export const logUserOut = createAsyncThunk("auth/logUserOut", async (_, {rejectWithValue}) => {
  try {
    return AuthManagerService.logUserOut();
  } catch (error) {
    return rejectWithValue(error);
  }
});

/**
 * Register a new user account
 */
export const registerUser = createAsyncThunk("auth/registerUser", async (data: RegisterData, {rejectWithValue}) => {
  try {
    return AuthManagerService.registerUser(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // logUserIn Reducer
    builder.addCase(logUserIn.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(logUserIn.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(logUserIn.rejected, (state, action) => {
      state.status = "failed";
    });


    // logUserOut Reducer
    builder.addCase(logUserOut.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(logUserOut.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(logUserOut.rejected, (state, action) => {
      state.status = "failed";
    });


    // registerNewUser Reducer
    builder.addCase(registerUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
    });


  },
});
