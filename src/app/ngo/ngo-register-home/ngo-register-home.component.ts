import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ngo-register-home',
  templateUrl: './ngo-register-home.component.html',
  styleUrls: ['./ngo-register-home.component.css']
})
export class NgoRegisterHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  divertToCourseRegister() {
    this.router.navigate(["ngo-course-register"]);
  }
  divertToMWCDRegister() {
    this.router.navigate(["ngo-mwcd-register"]);
  }

}
