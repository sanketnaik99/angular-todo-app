import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

export interface User {
  email: string;
  uid: string;
  displayName?: string;
  photoURL?: string;
}

export interface Response {
  result: boolean;
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentUser: User;
  isLoggedIn: boolean = false;

  constructor(private auth: AngularFireAuth) {}

  loginWithGoogle() {
    return new Promise<Response>(response => {
      this.auth.auth
        .signInWithPopup(new auth.GoogleAuthProvider())
        .then(res => {
          if (res.user) {
            this.currentUser = {
              email: res.user.email,
              uid: res.user.uid,
              photoURL: res.user.photoURL,
              displayName: res.user.displayName
            };
          }
          this.isLoggedIn = true;
          response({ result: true, message: "SUCCESS" });
        })
        .catch(err => {
          console.log(err);
          response({ result: false, message: err["message"] });
        });
    });
  }

  loginWithGithub() {
    return new Promise<Response>(response => {
      this.auth.auth
        .signInWithPopup(new auth.GithubAuthProvider())
        .then(res => {
          console.log(res);
          if (res.user) {
            this.currentUser = {
              email: res.user.email,
              uid: res.user.uid,
              photoURL: res.user.photoURL,
              displayName: res.user.displayName
            };
          }
          this.isLoggedIn = true;
          response({ result: true, message: "SUCCESS" });
        })
        .catch(err => {
          console.log(err);
          response({ result: false, message: err["message"] });
        });
    });
  }
}
