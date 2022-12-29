import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { RegisterData, RGUserProfile } from "../types";

export default class AuthManagerService {
  static async logUserIn(data: {
    email: string;
    password: string;
  }): Promise<User | null> {
    const { email, password } = data;
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", credentials);

    return credentials?.user;
  }

  static logUserOut() {
    return auth.signOut();
  }

  static async registerUser(data: {
    email: string;
    password: string;
  }): Promise<User | null> {
    const { email, password } = data;
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User Signed up already", credentials);

    return credentials?.user;
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

    return docRef;
  }
}
