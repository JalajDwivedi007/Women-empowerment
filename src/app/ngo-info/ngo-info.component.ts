import { Component, OnInit } from '@angular/core';
import { NgoRegisterService } from '../ngo-register.service';
import { NgoMwcdRegisterComponent } from '../ngo/ngo-mwcd-register/ngo-mwcd-register.component';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';

@Component({
  selector: 'app-ngo-info',
  templateUrl: './ngo-info.component.html',
  styleUrls: ['./ngo-info.component.css']
})
export class NgoInfoComponent implements OnInit {
    
  

    items: any;
    items1: any = [];
    username1: string;
    constructor(private  ngoService:NgoRegisterService, private loginService: LoginSignupApprovalService) {
  
    }
  
    ngOnInit(): void {
      this.getUsername();
      setTimeout(() => {
        //<<<---using ()=> syntax
        this.getNgoData();
      }, 2000);
  
  
    }
    getUsername() {
      this.username1 = this.loginService.getUsername();
      console.log(this.username1)
    }
    getNgoData() {
      this.getUsername()
      // console.log(this.items.a.username)
      console.log(this.username1)
      this.ngoService.getData().subscribe((res) => {
        console.log(res)
        this.items = res;
  
  
        for (let i = 0; i < this.items.length; i++) {
          console.log(res[i].username)
          if (res[i].username === this.username1) {
            this.items1.push(res[i])
          }
          // console.log(this.items1)
        }
  
  
        // console.log(res);
      })
    }

}
