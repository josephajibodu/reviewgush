import { RGProfile } from './../types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { RegisterData, RGUser, RGUserProfile } from "../types";

export default class AuthManagerService {
  static async logUserIn(data: {
    email: string;
    password: string;
  }): Promise<RGUser | null> {
    const { email, password } = data;
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    const userObj: RGUser = {
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      uid: user.uid,
      refreshToken: user.refreshToken,
      isAnonymous: user.isAnonymous
    }

    console.log("User logged in: ", userObj);
    

    return userObj;
  }

  static logUserOut() {
    return auth.signOut();
  }

  static async registerUser(data: {
    email: string;
    password: string;
  }): Promise<RGUser | null> {
    const { email, password } = data;
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;
    const userObj: RGUser = {
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      uid: user.uid,
      refreshToken: user.refreshToken,
      isAnonymous: user.isAnonymous
    }
    console.log("User Signed up already", userObj);

    return userObj;
  }

  static getUser() {
    return auth.currentUser;
  }

  static isLoggedIn() {
    return !!auth.currentUser;
  }

  static async updateProfile(data: RegisterData) {
    const { email, firstName, lastName, phoneNumber } = data;
    const docRef = await addDoc(collection(db, "users"), {
      email,
      firstName,
      lastName,
      phoneNumber,
    });
  }

  static async getUserProfile(userId: string) {
    const userData = await getDoc(doc(db, "users", userId));
    console.log("User data fetched", userData);
    
    return userData.data as RGProfile;
  }
}
