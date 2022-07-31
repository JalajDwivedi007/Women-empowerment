import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string;
  password: string;
  confirmpassword: string;
  dob: string;
  user_type: string;
  mobile: number;
  email: string;
  constructor(private signup: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.user_type)
    let data = {
      username: this.username,
      password: this.password,
      confirmpassword: this.confirmpassword,
      dob: this.dob,
      user_type: this.user_type,
      mobile: this.mobile,
      email: this.email
    }
    console.log(data)
    this.signup.postDetails(data).subscribe((res) => {
      console.log(res);
      this.router.navigate(["login"]);
    })
  }
}
