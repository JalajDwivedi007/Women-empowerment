import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from '../course-trainee.service';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';

@Component({
  selector: 'app-trainee-info',
  templateUrl: './trainee-info.component.html',
  styleUrls: ['./trainee-info.component.css']
})
export class TraineeInfoComponent implements OnInit {
  items: any;
  items1: any = [];
  username1: string;
  constructor(private courseService: CourseTraineeService, private loginService: LoginSignupApprovalService) {

  }

  ngOnInit(): void {
    this.getUsername();
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.getTraineeData();
    }, 2000);


  }
  getUsername() {
    this.username1 = this.loginService.getUsername();
    console.log(this.username1)
  }
  getTraineeData() {
    this.getUsername()
    // console.log(this.items.a.username)
    console.log(this.username1)
    this.courseService.getData().subscribe((res) => {
      console.log(res)
      this.items = res;


      for (let i = 0; i < this.items.length; i++) {
        console.log(res[i].a.username)
        if (res[i].a.username === this.username1) {
          this.items1.push(res[i])
        }
        // console.log(this.items1)
      }


      // console.log(res);
    })
  }
}
