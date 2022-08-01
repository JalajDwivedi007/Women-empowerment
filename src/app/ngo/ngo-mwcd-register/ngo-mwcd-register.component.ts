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
  ngoName: String;
  members: Number;
  workAreas: String;
  ngoState: String;
  ngocity: String;
  ngoAddress: String;
  ngoRegistrationNumber: Number;
  ngoAmount: Number;
  ngoMobile: Number;
  ngoDOE: String;
  newCampaign: String;
  ngoProjDetails: String;
  ngoEmail: string;
  ngoWebsite: String;
  //PROJECT IN CHARGE DETAILS
  fname: String;
  mname: String;
  lname: String;
  inchargeState: String;
  inchargecity: String;
  inchargeAddress: String;
  inchargePan: String;
  inchargeEdu: String;
  inchargeAadhar: Number;
  file: File;

  constructor(
    private ngoService: NgoRegisterService,
    private loginService: LoginSignupApprovalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getInfo();
  }
  getusername() {
    this.username = this.loginService.getUsername();
  }
  checkAadhar() {
    console.log(this.inchargeAadhar);
    // if ((this.inchargeAadhar).toString().length < 12) {
    //   alert("Aadhar must be of length 12");
    // }
    if (
      !/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(this.inchargeAadhar.toString())
    ) {
      alert('Mention correct aadhar');
      return false;
    }
    // else {
    //   alert("Aadhar is correct")
    // }
    return true;
  }
  checkEmail() {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ngoEmail)) {
      // alert("Meeting specified requirements")
      alert('Not meeting specified requirements');
      return false;
    }
    // else {
    //   alert("Not meeting specified requirements")
    // }
    if (typeof this.ngoEmail === 'undefined') {
      alert('undefined');
      return false;
    }
    return true;
  }
  onSubmit() {
    // this.checkEmail();
    this.checkAadhar();
    this.getusername();
    console.log(this.file);
    if (this.checkEmail() && this.checkAadhar()) {
      let data = {
        username: this.username,
        status: 'pending',
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
        alert('Details Submitted successfully!');
        this.getInfo();
        this.router.navigate(['ngo-info']);
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
