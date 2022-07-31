import { Component, OnInit } from '@angular/core';
import { NgoRegisterService } from '../ngo-register.service';

@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css']
})
export class AdminNgoComponent implements OnInit {
  results: any;

  constructor(private ngoService: NgoRegisterService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.ngoService.getData().subscribe((res) => {
      console.log(res);
      this.results = res;
    });
  }

}
