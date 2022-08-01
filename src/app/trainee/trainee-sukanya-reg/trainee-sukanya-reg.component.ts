import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupApprovalService } from 'src/app/services/login-signup-approval.service';
import { SukanyaTraineeService } from 'src/app/sukanya-trainee.service';

@Component({
  selector: 'app-trainee-sukanya-reg',
  templateUrl: './trainee-sukanya-reg.component.html',
  styleUrls: ['./trainee-sukanya-reg.component.css']
})
export class TraineeSukanyaRegComponent implements OnInit {
  username: string;
  status: string;
  firstname: string;
  middlename: string;
  lastname: string;
  state: string;
  city: string;
  address: string;
  aadhar: number;
  pan: string;
  education: string;
  gfirstname: string;
  gmiddlename: string;
  glastname: string;
  // gstate: string;
  // gcity: string;
  // gaddress: string;
  //gaadhar: number;
  //gpan: number;
  geducation: string;
  relation: string;
  gmobile: number;
  gemail: string;
  file: File;



  constructor(private sukanyaService: SukanyaTraineeService, private loginService: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getUsername() {
    this.username = this.loginService.getUsername();
  }
  checkMobile(){
    console.log(this.gmobile);
    if(!/^[6-9]\d{9}$/.test(this.gmobile.toString())){
      alert('Mention correct Mobile Number');
      return false;
    }
    if (typeof this.gmobile === "undefined") {
       alert('undefined');
       return false;
     }
    return true;
 }
  checkPan(){
    console.log(this.pan)
    if(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(this.pan)){
      alert('Mention correct Pan');
      return false;
    }
    if (typeof this.pan === "undefined") {
      alert('undefined');
      return false;
    }
    return true; 
    }
  checkAadhar() {
    console.log(this.aadhar)
    if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(this.aadhar.toString())) {
      alert('Mention correct aadhar')
      return false;
    }
    if (typeof this.aadhar === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  checkEmail() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.gemail)) {
      alert("Mention correct Email")
      return false;
    }
    if (typeof this.gemail === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  onSubmit() {
    this.getUsername()
    console.log(this.file)
    if (this.checkEmail() && this.checkAadhar() && this.checkPan() && this.checkMobile()){
      let data = {
        username: this.username,
        status: "pending",
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        state: this.state,
        city: this.city,
        address: this.address,
        aadhar: this.aadhar,
        pan: this.pan,
        education: this.education,
        gfirstname: this.gfirstname,
        gmiddlename: this.gmiddlename,
        glastname: this.glastname,
        // gstate: this.gstate,
        // gcity: this.gcity,
        // gaddress: this.gaddress,
        //paadhar: this.gaadhar,
        //gpan: this.gpan,
        geducation: this.geducation,
        relation: this.relation,
        gmobile: this.gmobile,
        gemail: this.gemail,
        file: this.file
      }
      this.sukanyaService.postData(data).subscribe((res) => {
        // console.log(res);
        this.getInfo();
        alert('Details Submitted Successfully!')
        this.router.navigate(['trainee-info'])
      })
    }
  }
  getInfo() {
    this.sukanyaService.getData().subscribe((res) => {
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
