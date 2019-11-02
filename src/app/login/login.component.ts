import { AuthService, Response } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  async googleLogin() {
    this.isLoading = true;
    let result: Response = await this.auth.loginWithGoogle();
    if (result.result == true) {
      this.router.navigate(["home"]);
    } else {
      this.isLoading = false;
      alert("Error Logging in");
    }
  }

  async githubLogin() {
    this.isLoading = true;
    let result: Response = await this.auth.loginWithGithub();
    if (result.result == true) {
      this.router.navigate(["home"]);
    } else {
      this.isLoading = false;
      alert(`${result.message}`);
    }
  }
}
