import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SukanyaTraineeService {
  url: string = "http://localhost:9090";
  constructor(private http: HttpClient) { }
  postData(data: any) {
    let params = new HttpParams();
    console.log(data.file)
    params = params.append("files", data.file)
    const formData: FormData = new FormData();
    formData.append("files", data.file)
    params = params.append("traineeFirstname", data.firstname)
    params = params.append("traineeMiddlename", data.middlename)
    params = params.append("traineeLastname", data.lastname)
    params = params.append("traineeState", data.state)
    params = params.append("traineeCity", data.city)
    params = params.append("traineeAddress", data.address)
    params = params.append("traineePan", data.pan)
    params = params.append("traineeEducationDetails", data.education)
    params = params.append("traineeAadhaar", data.aadhar)
    params = params.append("gFirstName", data.gfirstname)
    params = params.append("gMiddleName", data.gmiddlename)
    params = params.append("gLastName", data.glastname)
    params = params.append("gEducationDetails", data.geducation)
    params = params.append("gRelation", data.relation)
    params = params.append("gMobile", data.gmobile)
    params = params.append("gEmail", data.gemail)
    params = params.append("ssyname", "")
    return this.http.post(`${this.url}/ssy`, formData, { params: params });
  }
  getData() {
    return this.http.get(`${this.url}/ssy`);
  }


}
