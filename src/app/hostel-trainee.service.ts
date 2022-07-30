import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HostelTraineeService {
  url: string = "http://localhost:9090";
  constructor(private http: HttpClient) { }
  // @RequestParam("hName") String hName,
  // 									@RequestParam("hLocation") String hLocation,
  // 									@RequestParam("hRanBy") String hRanBy,
  // 									@RequestParam("traineeFirstname") String traineeFirstname,
  // 									@RequestParam("traineeMiddlename") String traineeMiddlename,
  // 									@RequestParam("traineeLastname") String traineeLastname,
  // 									@RequestParam("traineeState") String traineeState,
  // 									@RequestParam("traineeCity") String traineeCity,
  // 									@RequestParam("traineeAddress") String traineeAddress,
  // 									@RequestParam("traineePan") String traineePan,
  // 									@RequestParam("traineeEducationDetails") String traineeEducationDetails,
  // 									@RequestParam("traineeAadhaar") Long traineeAadhaar,
  // 									@RequestParam("files") MultipartFile file,
  // 									@RequestParam("gFirstName") String gFName,
  // 									@RequestParam("gMiddleName") String gMName,
  // 									@RequestParam("gLastName") String gLName,
  // 									@RequestParam("gEducationDetails") String gEducationDetails,
  // 									@RequestParam("gRelation") String gRelation,
  // 									@RequestParam("gMobile") Long gMobile,
  // 									@RequestParam("gEmail") String gEmai
  postData(data: any) {
    let params = new HttpParams();
    console.log(data.file)
    params = params.append("files", data.file)
    const formData: FormData = new FormData();
    formData.append("files", data.file)
    params = params.append("hName", data.hName);
    params = params.append("hLocation", data.hLocation);
    params = params.append("hRanBy", data.hRanBY);
    params = params.append("traineeFirstname", data.hName)
    params = params.append("traineeMiddlename", data.hName)
    params = params.append("traineeLastname", data.hName)
    params = params.append("traineeState", data.hName)
    params = params.append("traineeCity", data.hName)
    params = params.append("traineeAddress", data.hName)
    params = params.append("traineePan", data.hName)
    params = params.append("traineeEducationDetails", data.hName)
    params = params.append("traineeAadhaar", 22321)
    params = params.append("gFirstName", data.hName)
    params = params.append("gMiddleName", data.hName)
    params = params.append("gLastName", data.hName)
    params = params.append("gEducationDetails", data.hName)
    params = params.append("gRelation", data.hName)
    params = params.append("gMobile", 78328748728)
    params = params.append("gEmail", data.hName)
    return this.http.post(`${this.url}/hostel`, formData, { params: params });
  }
  getData() {
    return this.http.get(`${this.url}/hostels`);
  }
}
