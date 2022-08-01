import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from '../course-trainee.service';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  noRecords: boolean = false;
  username1: string;
  results: any = [];
  results1: any = [];
  constructor(private courseService: CourseTraineeService, private loginService: LoginSignupApprovalService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getUsername() {
    this.username1 = this.loginService.getUsername();
    console.log(this.username1)
  }
  getInfo() {
    this.getUsername()
    this.courseService.getData().subscribe((res) => {
      // console.log(res);
      this.results = res;

      for (let i = 0; i < this.results.length; i++) {
        console.log(res[i].a.username)
        if (res[i].a.username === this.username1 && res[i].a.status === 'Approved') {
          this.results1.push(res[i])
        }

      }
      console.log(this.results1)
    });
  }
}
