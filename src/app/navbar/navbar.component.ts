import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  privilegeTrainee: boolean;
  privilegeAdmin: boolean;
  privilegeNGO: boolean;
  privilegeNone: boolean;
  constructor() { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle() {
    this.privilegeNone = true;
  }

}
