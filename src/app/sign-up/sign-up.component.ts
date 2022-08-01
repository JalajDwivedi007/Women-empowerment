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
  checkEmail() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      // alert("Meeting specified requirements")
      alert(" Email Not meeting specified requirements")
      return false;
    }
    // else {
    //   alert("Not meeting specified requirements")
    // }
    if (typeof this.email === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  checkMobile() {
    if (!/^[6-9]\d{9}$/.test(String(this.mobile))) {
      alert("Mobile Wrong Format")
      return false;
    }
    if (typeof this.mobile === "undefined") {
      alert('undefined');
      return false;
    }
    return true;

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
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  checkUsername() {
    if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(this.username)) {
      alert("Username must be 8 to 20 characters long and should be alphanumeric")
      return false;
    }
    if (typeof this.username === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  onSubmit() {
    console.log(this.user_type)
    if (this.checkEmail() && this.checkMobile() && this.checkPassword() && this.checkUsername()) {
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
        console.log(res["status"]);
        if (res["status"] === "User Record  Added Successfully!") {
          alert(res["status"]);
          this.router.navigate(["login"]);
        }
        else {
          alert(res["status"]);
        }
        // this.router.navigate(["login"]);
      })
    }
  }
}
