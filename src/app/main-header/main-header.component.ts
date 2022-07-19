import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  privilegeTrainee: boolean;
  privilegeAdmin: boolean;
  privilegeNGO: boolean;
  privilegeNone: boolean;
  privilege: boolean;
  constructor() { }

  ngOnInit(): void {
    this.toggle();
  }
  toggle() {
    this.privilegeNone = true;
    this.privilege = false;
  }

}
