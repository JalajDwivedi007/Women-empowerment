import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostelTraineeService } from 'src/app/hostel-trainee.service';
import { LoginSignupApprovalService } from 'src/app/services/login-signup-approval.service';
@Component({
  selector: 'app-trainee-hostel-reg',
  templateUrl: './trainee-hostel-reg.component.html',
  styleUrls: ['./trainee-hostel-reg.component.css']
})
export class TraineeHostelRegComponent implements OnInit {
  username: string;
  status: string;
  firstname: string;
  middlename: string;
  lastname: string;
  state: string;
  city: string;
  address: string;
  traineePan: string;
  traineeEducation: string;
  traineeAadhaar: number;
  gFirstname: string;
  gMiddlename: string;
  gLastname: string;
  gEducationDetails: string;
  gRelation: string;
  gMobile: number;
  gEmail: string;
  hName: string;
  hLocation: string;
  hRanBy: string;
  // aadhar: number;
  file: File;
  constructor(private hostelService: HostelTraineeService, private loginService: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }
  usernameSet() {
    this.username = this.loginService.getUsername();
    console.log(this.username);
  }
  checkMobile() {
    console.log(this.gMobile);
    if (!/^[6-9]\d{9}$/.test(this.gMobile.toString())) {
      alert('Mention correct Mobile Number');
      return false;
    }
    if (typeof this.gMobile === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  checkPan() {
    console.log(this.traineePan)
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(this.traineePan)) {
      alert('Mention correct Pan');
      return false;
    }
    if (typeof this.traineePan === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  checkAadhar() {
    console.log(this.traineeAadhaar)
    if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(this.traineeAadhaar.toString())) {
      alert('Mention correct aadhar');
      return false;
    }
    if (typeof this.traineeAadhaar === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  checkEmail() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.gEmail)) {
      alert("Mention correct Email")
      return false;
    }
    if (typeof this.gEmail === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  onSubmit() {
    this.usernameSet()
    console.log(this.file)
    if (this.checkEmail() && this.checkAadhar() && this.checkPan() && this.checkMobile()) {
      let data = {
        username: this.username,
        status: "pending",
        hName: this.hName,
        hLocation: this.hLocation,
        hRanBy: this.hRanBy,
        file: this.file,
        firstname: this.firstname,
        middlename: typeof this.middlename === "undefined" ? "" : this.middlename,
        lastname: this.lastname,
        state: this.state,
        city: this.city,
        address: this.address,
        traineePan: this.traineePan,
        traineeEducation: this.traineeEducation,
        traineeAadhaar: this.traineeAadhaar,
        gFirstname: this.gFirstname,
        gMiddlename: typeof this.gMiddlename === "undefined" ? "" : this.gMiddlename,
        gLastname: this.gLastname,
        gEducationDetails: this.gEducationDetails,
        gRelation: this.gRelation,
        gMobile: this.gMobile,
        gEmail: this.gEmail
      };
      this.hostelService.postData(data).subscribe((res) => {
        // console.log(res);
        this.getInfo();
        alert('Details Submitted Successfully!')
        this.router.navigate(['trainee-info'])
      })
    }
  }
  getInfo() {
    this.hostelService.getData().subscribe((res) => {
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
