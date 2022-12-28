import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../config/firebase.config";

export default class AuthManagerService {
  static async logUserIn(data: { email: string; password: string }) : Promise<User|null> {
    const { email, password } = data;
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", credentials);

    return credentials?.user;
  }

  static logUserOut() {
    return auth.signOut();
  }

  static async registerUser(data: {email: string; password: string}) {
    const { email, password } = data;
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User Signed up already", credentials);
  }

  static getUser() {
    return auth.currentUser;
  }

  static isLoggedIn() {
    return !!auth.currentUser;
  }
}
