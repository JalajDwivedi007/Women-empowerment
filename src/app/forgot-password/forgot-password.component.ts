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
  forgotpassword() {
    let data = {
      username: this.username,
      password: this.password,
      confirmpassword: this.confirmpassword
    }

    this.loginService.forgotpassword(data).subscribe((res) => {
      console.log(res);
      alert("Password Changed Successfully!");
      this.router.navigate(['login']);
    })
  }

}
