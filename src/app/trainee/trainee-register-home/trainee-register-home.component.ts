import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainee-register-home',
  templateUrl: './trainee-register-home.component.html',
  styleUrls: ['./trainee-register-home.component.css']
})
export class TraineeRegisterHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  divertToCourseReg() {
    this.router.navigate(["trainee-course-reg"]);
  }
  divertToHostelReg() {
    this.router.navigate(["trainee-hostel-reg"]);
  }
  divertToSukanyaReg() {
    this.router.navigate(["trainee-sukanya-reg"]);
  }

}
