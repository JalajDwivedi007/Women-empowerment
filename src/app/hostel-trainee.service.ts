import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HostelTraineeService {
  url: string = "http://localhost:9090";
  constructor(private http: HttpClient) { }

  postData(data: any) {
    let params = new HttpParams();
    params = params.append("files", data.file)
    console.log(data);
    const formData: FormData = new FormData();
    formData.append("files", data.file)
    params = params.append("hName", data.hName);
    params = params.append("hLocation", data.hLocation);
    params = params.append("hRanBy", data.hRanBY);
    params = params.append("traineeFirstname", data.firstname)
    params = params.append("traineeMiddlename", data.middlename)
    params = params.append("traineeLastname", data.lastname)
    params = params.append("traineeState", data.state)
    params = params.append("traineeCity", data.city)
    params = params.append("traineeAddress", data.address)
    params = params.append("traineePan", data.traineePan)
    params = params.append("traineeEducationDetails", data.traineeEducation)
    params = params.append("traineeAadhaar", data.traineeAadhaar)
    params = params.append("gFirstName", data.gFirstName)
    params = params.append("gMiddleName", data.gMiddleName)
    params = params.append("gLastName", data.gLastName)
    params = params.append("gEducationDetails", data.gEducationDetails)
    params = params.append("gRelation", data.gRelation)
    params = params.append("gMobile", data.gMobile)
    params = params.append("gEmail", data.gEmail)
    params = params.append("username", data.username)
    params = params.append("status", data.status)
    return this.http.post(`${this.url}/hostel`, formData, { params: params });
  }
  getData() {
    return this.http.get(`${this.url}/hostels`);
  }
}
