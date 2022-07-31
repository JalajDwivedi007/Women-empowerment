import { Component, OnInit } from '@angular/core';
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
  ngoEmail: String;
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

  constructor(private ngoService: NgoRegisterService, private loginService: LoginSignupApprovalService) {}

  ngOnInit(): void {
    // this.getInfo();
  }
  getusername(){
    this.username=this.loginService.getUsername();
  }

  onSubmit() {
    this.getusername()
    console.log(this.file);
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
      this.getInfo();
    });
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
