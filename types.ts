import { User, UserMetadata } from "firebase/auth";

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

export interface RGUser {
  uid: string;
  email: string | null;
  phoneNumber: string | null;
  displayName: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  refreshToken: string;
}

export interface RGProfile {

}