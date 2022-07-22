import { Component, OnInit } from '@angular/core';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
import { Router } from '@angular/router';
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
  constructor(private loginService: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle() {
    this.privilegeNGO = true;
  }
  loginToggleAsTrainee() {
    // this.privilegeTrainee = true;
    // this.privilegeNone = false;
    this.loginService.setTitle("Trainee");
    // this.router.navigate(["login"]);
  }
  loginToggleAsNGO() {
    this.loginService.setTitle("NGO");
    // this.router.navigate(["login"]);
  }
  loginToggleAsAdmin() {
    this.loginService.setTitle("Admin");
    // this.router.navigate(["login"]);
  }

}
