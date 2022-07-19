import { Component, OnInit } from '@angular/core';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  privilege: string;
  constructor(private loginService: LoginSignupApprovalService) { }

  ngOnInit(): void {
    this.getTitle();
  }
  getTitle() {
    this.privilege = this.loginService.getTitle();
  }

}
