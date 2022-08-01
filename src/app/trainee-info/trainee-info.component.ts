import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from '../course-trainee.service';
import { HostelTraineeService } from '../hostel-trainee.service';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';
import { SukanyaTraineeService } from '../sukanya-trainee.service';

@Component({
  selector: 'app-trainee-info',
  templateUrl: './trainee-info.component.html',
  styleUrls: ['./trainee-info.component.css']
})
export class TraineeInfoComponent implements OnInit {
  itemsS: any;
  itemsH: any;
  itemsT: any;
  items1: any = [];
  items2: any = [];
  items3: any = [];
  username1: string;
  constructor(private courseService: CourseTraineeService, private loginService: LoginSignupApprovalService, private hostelService: HostelTraineeService, private ssyService: SukanyaTraineeService) {

  }

  ngOnInit(): void {
    this.getUsername();
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.getTrainingData();
      this.getHostelData();
      this.getSsyData();
    }, 2000);


  }
  getUsername() {
    this.username1 = this.loginService.getUsername();
    console.log(this.username1)
  }
  getTrainingData() {
    this.getUsername()
    // console.log(this.items.a.username)
    console.log(this.username1)
    this.courseService.getData().subscribe((res) => {
      console.log(res)
      this.itemsT = res;


      for (let i = 0; i < this.itemsT.length; i++) {
        console.log(res[i].a.username)
        if (res[i].a.username === this.username1) {
          this.items1.push(res[i])
        }
        // console.log(this.items1)
      }


      // console.log(res);
    })
  }
  getHostelData() {
    this.getUsername()
    // console.log(this.items.a.username)
    console.log(this.username1)
    this.hostelService.getData().subscribe((res1) => {
      console.log(res1)
      this.itemsH = res1;


      for (let i = 0; i < this.itemsH.length; i++) {
        console.log(res1[i].a.username)
        if (res1[i].a.username === this.username1) {
          this.items2.push(res1[i])
        }
        // console.log(this.items1)
      }


      // console.log(res);
    })
  }
  getSsyData() {
    this.getUsername()
    // console.log(this.items.a.username)
    console.log(this.username1)
    this.ssyService.getData().subscribe((res2) => {
      console.log(res2)
      this.itemsS = res2;


      for (let i = 0; i < this.itemsS.length; i++) {
        console.log(res2[i].a.username)
        if (res2[i].a.username === this.username1) {
          this.items3.push(res2[i])
        }
        // console.log(this.items1)
      }


      // console.log(res);
    })
  }
}

