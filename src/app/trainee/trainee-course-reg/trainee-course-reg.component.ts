import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from 'src/app/course-trainee.service';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginSignupApprovalService } from 'src/app/services/login-signup-approval.service';

@Component({
  selector: 'app-trainee-course-reg',
  templateUrl: './trainee-course-reg.component.html',
  styleUrls: ['./trainee-course-reg.component.css'],
})
export class TraineeCourseRegComponent implements OnInit {
  username: string;
  status: string;
  firstname: string;
  middlename: string;
  lastname: string;
  state: string;
  city: string;
  address: string;
  aadhaar: bigint;
  pan: String;
  education: string;
  gfirstname: string;
  gmiddlename: string;
  glastname: string;
  geducation: string;
  grelation: string;
  gmobile: bigint;
  gemail: string;
  title: string;
  providedBy: string;
  aboutTra: string;
  file: File;

  constructor(
    private courseService: CourseTraineeService,
    private loginService: LoginSignupApprovalService
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }
  usernameSet() {
    this.username = this.loginService.getUsername();
    console.log(this.username);
  }
  checkAadhar() {
    console.log(this.aadhaar);

    if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(this.aadhaar.toString())) {
      alert('Invalid Adhaar Number');
      return false;
    }

    return true;
  }
  onSubmit() {
    this.checkAadhar();
    this.usernameSet();
    console.log(this.file);
    if (this.checkAadhar()) {
      let data = {
        username: this.username,
        status: 'pending',
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        state: this.state,
        city: this.city,
        address: this.address,
        aadhaar: this.aadhaar,
        pan: this.pan,
        education: this.education,
        gfirstname: this.gfirstname,
        gmiddlename: this.gmiddlename,
        glastname: this.glastname,
        geducation: this.geducation,
        grelation: this.grelation,
        gmobile: this.gmobile,
        gemail: this.gemail,
        title: this.title,
        providedBy: this.providedBy,
        aboutTra: this.aboutTra,
        file: this.file,
      };
      this.courseService.postData(data).subscribe((res) => {
        // console.log(res);
        this.getInfo();
      });
    }
  }
  getInfo() {
    this.courseService.getData().subscribe((res) => {
      console.log(res);
    });
  }
  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if (event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }
}
