import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  privilege: string;
  username: string;
  password: string;
  constructor(private loginService: LoginSignupApprovalService, private router: Router) { }
  items: any = [];
  info: any;
  ngOnInit(): void {
    this.ListUsers();
    this.getTitle();

  }
  getTitle() {
    this.privilege = this.loginService.getTitle();
    // console.log(this.items);
  }
  ListUsers() {
    this.loginService.ListUsers().subscribe((res) => {
      this.items = res;
      // console.log(res);
    });
    // console.log(this.items);
  }
  checkUsername() {
    if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(this.username)) {
      alert("Check Username Format")
      return false;
    }
    if (typeof this.username === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  onLogin() {

    if (this.checkUsername()) {
      let login = {
        username: this.username,
        password: this.password
      }
      console.log(this.username)
      console.log(this.password)
      this.loginService.getLoginValidation(login).subscribe((res) => {
        if (res === null) {
          alert("Invalid credentials! Register or set new password!")
        }
        else {
          this.info = res;
          this.loginService.setUsername(this.username);
          console.log(res["user_type"]);
          if (this.info["user_type"] == "trainee") {
            console.log(this.info["user_type"]);
            this.loginService.setLoginStatus(true);
            this.loginService.setUser("trainee")

            this.router.navigate(["/"]);
          }
          if (this.info["user_type"] === "Admin") {
            console.log("Admin");
            this.loginService.setUser("Admin")
            this.loginService.setLoginStatus(true);
            this.router.navigate(["/"])
          }
          if (this.info["user_type"] === "NGO") {
            console.log("NGO");
            this.loginService.setUser("NGO")
            this.loginService.setLoginStatus(true);
            this.router.navigate(["/"])
          }
        }

      })
    }


  }

}

