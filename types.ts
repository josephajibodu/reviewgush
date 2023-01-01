import { User, UserMetadata } from "firebase/auth";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export type LoadingState = "idle" | "loading" | "failed" | "success";

export interface RGUserProfile {
  fullName: string;
  phoneNumber: string;
  email: string;
  plan: string;
}

export interface RGUser {
  uid: string;
  email: string | null;
  phoneNumber: string | null;
  displayName: string | null;
  emailVerified: boolean;
  refreshToken: string;
}

export interface RGProfile {}

export interface CachedUser {
  user: RGUser;
  profile: RGProfile;
}
