import { Component, OnInit } from '@angular/core';
import { LoginSignupApprovalService } from '../login-signup-approval.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  privilegeTrainee: boolean;
  privilegeAdmin: boolean;
  privilegeNGO: boolean;
  privilegeNone: boolean;
  constructor(private loginService: LoginSignupApprovalService) { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle() {
    this.privilegeNone = true;
  }
  loginToggleAsTrainee() {
    // this.privilegeTrainee = true;
    // this.privilegeNone = false;
    this.loginService.setTitle("Trainee");
  }
  loginToggleAsNGO() {
    this.loginService.setTitle("NGO");
  }
  loginToggleAsAdmin() {
    this.loginService.setTitle("Admin");
  }

}
