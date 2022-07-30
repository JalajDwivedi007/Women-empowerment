import { Component, OnInit } from '@angular/core';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  privilegeTrainee: boolean;
  privilegeAdmin: boolean;
  privilegeNGO: boolean;
  privilegeNone: boolean;
  execute: boolean = false;
  isLoggedIn: boolean;
  user: string;
  flag: number = 0;
  constructor(
    private loginService: LoginSignupApprovalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.privilegeNone = true;
    setTimeout(() => {
      //<<<---using ()=> syntax

      this.isLoggedIn = this.loginService.getLoginStatus();
      console.log(this.isLoggedIn);
      if (!this.isLoggedIn) {
        this.ngOnInit();
      }
      this.viewNavbar(this.isLoggedIn);
    }, 5000);
    // while (this.isLoggedIn) {
    //   this.privilegeNone = true;
    //   this.isLoggedIn = this.loginService.getLoginStatus();
    //   console.log(this.isLoggedIn);
    //   if (this.isLoggedIn) {
    //     this.viewNavbar(this.isLoggedIn);
    //     break;
    //   }
    // }
    // do {
    //   this.privilegeNone = true;
    //   this.isLoggedIn = this.loginService.getLoginStatus();
    //   console.log(this.isLoggedIn);
    //   if (this.isLoggedIn) {
    //     // this.viewNavbar(this.isLoggedIn);
    //     this.flag = 1;
    //     break;
    //   }
    // } while (this.flag === 0)
  }
  onLoad(): void {
    // this.privilegeNone = true;
    this.isLoggedIn = this.loginService.getLoginStatus();
    // console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      // this.toggle();
      console.log(this.isLoggedIn);
    } else {
      // this.privilegeNone = true;
      // this.ngOnInit();
    }
  }
  viewNavbar(login: boolean) {
    if (login) {
      this.privilegeNone = false;
      this.user = this.loginService.getUser();
      if (this.user === 'Admin') {
        this.privilegeAdmin = true;
      }
      if (this.user === 'trainee') {
        this.privilegeTrainee = true;
      }
      if (this.user === 'NGO') {
        this.privilegeNGO = true;
      }
    }
  }
  // ngAfterViewInit() {
  //   // this.isLoggedIn = this.loginService.getLoginStatus();
  //   console.log(this.loginService.getLoginStatus())
  //   console.log(this.isLoggedIn);
  //   if (this.isLoggedIn) {
  //     this.toggle();
  //   }
  //   else {
  //     this.privilegeNone = true;
  //     // this.ngOnInit();
  //   }
  // }
  // NgOnInit(): void {
  //   this.toggle();
  // }

  toggle() {
    this.privilegeNGO = true;
    // this.privilegeNone = true;
    let user = this.loginService.getUser();
    console.log(user);
    // if (user !== null) {
    //   this.privilegeNone = true;
    // }
    // else {
    // let user1 = this.loginService.getUser();
    // console.log("Inside navbar")
    // console.log(user1)
    // if (user === "Admin") {
    //   // this.privilegeNone=false;
    //   this.privilegeAdmin = true;
    //   console.log("Admin")
    // }
    // else if (user === "NGO") {
    //   // this.privilegeNone=false;
    //   console.log("NGO")
    //   this.privilegeNGO = true;
    // }
    // else if (user === "trainee") {
    //   // this.privilegeNone=false;
    //   this.privilegeTrainee = true;
    //   console.log("Trainee")
    // }
    // else {
    //   this.privilegeNone = true;
    // }
    // }
  }
  loginToggleAsTrainee() {
    // this.privilegeTrainee = true;
    // this.privilegeNone = false;
    this.loginService.setTitle('Trainee');
    // this.router.navigate(["login"]);
  }
  loginToggleAsNGO() {
    this.loginService.setTitle('NGO');
    // this.router.navigate(["login"]);
  }
  loginToggleAsAdmin() {
    this.loginService.setTitle('Admin');
    // this.router.navigate(["login"]);
  }
  userSet() {
    let user = this.loginService.getUser();
    console.log('Inside navbar');
    console.log(user);
    if (user === 'Admin') {
      // this.privilegeNone=false;
      this.privilegeAdmin = true;
      console.log('Admin');
    } else if (user === 'NGO') {
      // this.privilegeNone=false;
      console.log('NGO');
      this.privilegeNGO = true;
    } else if (user === 'trainee') {
      // this.privilegeNone=false;
      this.privilegeTrainee = true;
      console.log('Trainee');
    } else {
      this.privilegeNone = true;
    }
  }
}
