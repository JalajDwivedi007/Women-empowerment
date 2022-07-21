import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-legislations',
  templateUrl: './policies-legislations.component.html',
  styleUrls: ['./policies-legislations.component.css']
})
export class PoliciesLegislationsComponent implements OnInit {
  toggle1: boolean = false;
  toggle2: boolean = false;
  toggle3: boolean = false;
  toggle4: boolean = false;
  toggle5: boolean = false;
  toggle6: boolean = false;
  toggle7: boolean = false;
  toggle8: boolean = false;
  toggle9: boolean = false;
  toggle10: boolean = false;
  toggle11: boolean = false;
  toggle12: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle1func() {
    this.toggle1 = !this.toggle1;
  }
  toggle2func() {
    this.toggle2 = !this.toggle2;
  }
  toggle3func() {
    this.toggle3 = !this.toggle3;
  }
  toggle4func() {
    this.toggle4 = !this.toggle4;
  }
  toggle5func() {
    this.toggle5 = !this.toggle5;
  }
  toggle6func() {
    this.toggle6 = !this.toggle6;
  }
  toggle7func() {
    this.toggle7 = !this.toggle7;
  }
  toggle8func() {
    this.toggle8 = !this.toggle8;
  }
  toggle9func() {
    this.toggle9 = !this.toggle9;
  }
  toggle10func() {
    this.toggle10 = !this.toggle10;
  }
  toggle11func() {
    this.toggle11 = !this.toggle11;
  }
  toggle12func() {
    this.toggle12 = !this.toggle12;
  }

}
