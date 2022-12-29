export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export type LoadingState = "idle" | "loading" | "failed" | "success";

export interface RGUserProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}