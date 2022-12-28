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
  password_confirmation: string;
}

export type LoadingState = "idle" | "loading" | "failed" | "success";