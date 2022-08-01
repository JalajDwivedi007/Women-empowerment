import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NgoRegisterService {
  url: string = 'http://localhost:9090';
  constructor(private http: HttpClient) { }

  postData(data: any) {
    let params = new HttpParams();
    console.log(data.file);
    params = params.append('files', data.files);
    const formData: FormData = new FormData();
    formData.append('files', data.files);
    params = params.append('ngoName', data.ngoName);
    params = params.append('members', data.members);
    params = params.append('workAreas', data.workAreas);
    params = params.append('ngoState', data.ngoState);
    params = params.append('ngocity', data.ngocity);
    params = params.append('ngoAddress', data.ngoAddress);
    params = params.append('ngoRegistrationNumber', data.ngoRegistrationNumber);
    params = params.append('ngoDOE', data.ngoDOE);
    params = params.append('newCampaign', data.newCampaign);
    params = params.append('ngoProjDetails', data.ngoProjDetails);
    params = params.append('ngoAmount', data.ngoAmount);
    params = params.append('ngoMobile', data.ngoMobile);
    params = params.append('ngoEmail', data.ngoEmail);
    params = params.append('ngoWebsite', data.ngoWebsite);
    params = params.append('fname', data.fname);
    params = params.append('mname', data.mname);
    params = params.append('lname', data.lname);
    params = params.append('inchargeState', data.inchargeState);
    params = params.append('inchargecity', data.inchargecity);
    params = params.append('inchargeAddress', data.ngoAddress);
    params = params.append('inchargePan', data.inchargePan);
    params = params.append('inchargeEdu', data.inchargeEdu);
    params = params.append('inchargeAadhaar', data.inchargeAadhar);
    params = params.append("username", data.username);
    params = params.append("status", data.status);
    return this.http.post(`${this.url}/ngo`, formData, { params: params });
  }
  getData() {
    return this.http.get(`${this.url}/ngos`);
  }
  changeApplicationStatus(id: number, status: string) {
    let params = new HttpParams();
    params = params.append('status', status);
    return this.http.put(`${this.url}/changeNGOApplicationStatus/` + id, {}, { params: params });
  }
}
