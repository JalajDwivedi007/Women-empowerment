import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginSignupApprovalService {
  url: string = "http://localhost:9090/womenempowerment";
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  titleset: string;
  user: string;
  loginStatus: boolean = false;
  constructor(private http: HttpClient) { }
  setTitle(title: string) {
    this.titleset = title;
  }
  getTitle() {
    return this.titleset;
  }
  setUser(user: string) {
    this.user = user;
  }
  setLoginStatus(loggedIn: boolean) {

    this.loginStatus = loggedIn;
    console.log(this.loginStatus)
  }
  getLoginStatus() {
    console.log("Navbar interact")
    return this.loginStatus;
  }
  getUser() {
    console.log(this.user)
    return this.user;
  }
  ListUsers() {
    // console.log(this.http.get(`${this.url}/users`));
    return this.http.get(`${this.url}/users`);
  }
  getLoginValidation(data: any) {
    console.log(data)
    return this.http.post(`${this.url}/login`, data = data);
  }
}
