import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  username: string;
  password: string;
  confirmpassword: string;
  constructor(private loginService: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
  }
  checkPassword() {
    if (this.password != this.confirmpassword) {
      alert("Passwords dont match")
      return false;
    }
    if (typeof this.password === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  forgotpassword() {
    if (this.checkPassword()) {
      let data = {
        username: this.username,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

      this.loginService.forgotpassword(data).subscribe((res) => {
        console.log(res);
        if (res === null) {
          alert("The Username does not exist!")
        }
        else {
          alert("Password Changed Successfully!");
          this.router.navigate(['login']);
        }
        // alert("Password Changed Successfully!");
        // this.router.navigate(['login']);
      })
    }

  }

}
