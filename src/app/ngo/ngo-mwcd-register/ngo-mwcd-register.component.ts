import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { NgoRegisterService } from 'src/app/ngo-register.service';
import { LoginSignupApprovalService } from 'src/app/services/login-signup-approval.service';


@Component({
  selector: 'app-ngo-mwcd-register',
  templateUrl: './ngo-mwcd-register.component.html',
  styleUrls: ['./ngo-mwcd-register.component.css'],
})
export class NgoMwcdRegisterComponent implements OnInit {
  username: string;
  status: string;
  ngoName: string;
  members: Number;
  workAreas: string;
  ngoState: string;
  ngocity: string;
  ngoAddress: string;
  ngoRegistrationNumber: Number;
  ngoAmount: Number;
  ngoMobile: Number;
  ngoDOE: string;
  newCampaign: string;
  ngoProjDetails: string;
  ngoEmail: string;
  ngoWebsite: string;
  //PROJECT IN CHARGE DETAILS

  fname: string;
  mname: string;
  lname: string;
  inchargeState: string;
  inchargecity: string;
  inchargeAddress: string;
  inchargePan: string;
  inchargeEdu: string;

  inchargeAadhar: Number;
  file: File;

  constructor(private ngoService: NgoRegisterService, private loginService: LoginSignupApprovalService, private router: Router) { }

  ngOnInit(): void {
    // this.getInfo();
  }
  getusername() {
    this.username = this.loginService.getUsername();
  }
  checkAadhar() {
    console.log(this.inchargeAadhar)
    // if ((this.inchargeAadhar).toString().length < 12) {
    //   alert("Aadhar must be of length 12");
    // }
    if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(this.inchargeAadhar.toString())) {
      alert('Mention correct aadhar');
      return false;
    }
    // else {
    //   alert("Aadhar is correct")
    // }
    return true;
  }
  checkPan(){
    if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test((this.inchargePan))){
      alert("Enter correct PAN Number")
      return false;
    }
    if (typeof this.inchargePan === "undefined") {
      alert('undefined');
     return false;
    }
    return true;
  }
  checkMobile(){
    if (!/^[6-9]\d{9}$/.test(String(this.ngoMobile))){
      alert("Mobile Wrong Format")
      return false;
    }
    if (typeof this.ngoMobile === "undefined") {
      alert('undefined');
     return false;
    }
    return true;

  }
  checkEmail() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ngoEmail)) {
      // alert("Meeting specified requirements")

      alert(" Email Not meeting specified requirements")


      return false;
    }
    // else {
    //   alert("Not meeting specified requirements")
    // }
    if (typeof this.ngoEmail === "undefined") {
      alert('undefined');
      return false;
    }
    return true;
  }
  onSubmit() {
    // this.checkEmail();

    // this.checkAadhar();
    this.getusername();
    console.log(this.file);
    if (this.checkEmail() && this.checkAadhar() && this.checkPan() && this.checkMobile()) {
      let data = {
        username: this.username,
        status: "pending",
        ngoName: this.ngoName,
        members: this.members,
        workAreas: this.workAreas,
        ngoState: this.ngoState,
        ngocity: this.ngocity,
        ngoAddress: this.ngoAddress,
        ngoRegistrationNumber: this.ngoRegistrationNumber,
        ngoDOE: this.ngoDOE,
        newCampaign: this.newCampaign,
        ngoProjDetails: this.ngoProjDetails,
        ngoAmount: this.ngoAmount,
        ngoMobile: this.ngoMobile,
        ngoEmail: this.ngoEmail,
        ngoWebsite: this.ngoWebsite,
        //Project in-charge
        fname: this.fname,
        mname: this.mname,
        lname: this.lname,
        inchargeState: this.inchargeState,
        inchargecity: this.inchargecity,
        inchargeAddress: this.inchargeAddress,
        inchargePan: this.inchargePan,
        inchargeEdu: this.inchargeEdu,
        inchargeAadhar: this.inchargeAadhar,
        files: this.file,
      };
      this.ngoService.postData(data).subscribe((res) => {
        // console.log(res);
        alert("Details Submitted successfully!")
        this.getInfo();
        this.router.navigate(['ngo-info'])

      });
    }
    // let data = {
    //   username: this.username,
    //   status: "pending",
    //   ngoName: this.ngoName,
    //   members: this.members,
    //   workAreas: this.workAreas,
    //   ngoState: this.ngoState,
    //   ngocity: this.ngocity,
    //   ngoAddress: this.ngoAddress,
    //   ngoRegistrationNumber: this.ngoRegistrationNumber,
    //   ngoDOE: this.ngoDOE,
    //   newCampaign: this.newCampaign,
    //   ngoProjDetails: this.ngoProjDetails,
    //   ngoAmount: this.ngoAmount,
    //   ngoMobile: this.ngoMobile,
    //   ngoEmail: this.ngoEmail,
    //   ngoWebsite: this.ngoWebsite,
    //   //Project in-charge
    //   fname: this.fname,
    //   mname: this.mname,
    //   lname: this.lname,
    //   inchargeState: this.inchargeState,
    //   inchargecity: this.inchargecity,
    //   inchargeAddress: this.inchargeAddress,
    //   inchargePan: this.inchargePan,
    //   inchargeEdu: this.inchargeEdu,
    //   inchargeAadhar: this.inchargeAadhar,
    //   files: this.file,
    // };
    // this.ngoService.postData(data).subscribe((res) => {
    //   // console.log(res);
    //   this.getInfo();
    // });
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  getInfo() {
    this.ngoService.getData().subscribe((res) => {
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
