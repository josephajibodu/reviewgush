import { RGProfile } from "./../types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
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
    };

    console.log("User logged in: ", userObj);

    return userObj;
  }

  static logUserOut() {
    return auth.signOut();
  }

  static async registerUser(data: RegisterData): Promise<RGUser | null> {
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
    };
    console.log("User Signed up already", userObj);

    // Update the users collection
    this.createProfile({ ...data, uid: user.uid });

    return userObj;
  }

  static getUser() {
    return auth.currentUser;
  }

  static isLoggedIn() {
    return !!auth.currentUser;
  }

  static async createProfile(data: RegisterData & { uid: string }) {
    const { email, fullName, phoneNumber, uid } = data;
    await setDoc(doc(db, "users", uid), {
      email,
      phoneNumber,
      fullName,
      uid,
      plan: "free",
    });
  }

  static async updateProfile(data: RegisterData) {
    const { email, fullName, phoneNumber } = data;
    const docRef = await doc(db, "users", "");

    setDoc(
      docRef,
      {
        email,
        phoneNumber,
        fullName,
      },
      { merge: true }
    );
  }

  static async getUserProfile(userId: string) {
    const userData = await getDoc(doc(db, "users", userId));
    console.log("User data fetched", userData);

    return userData.data as RGProfile;
  }
}
