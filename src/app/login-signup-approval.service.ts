import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupApprovalService {
  titleset: string;
  constructor() { }
  setTitle(title: string) {
    this.titleset = title;
  }
  getTitle() {
    return this.titleset;
  }
}
