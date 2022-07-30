import { Component, OnInit } from '@angular/core';
import { HostelTraineeService } from 'src/app/hostel-trainee.service';
@Component({
  selector: 'app-trainee-hostel-reg',
  templateUrl: './trainee-hostel-reg.component.html',
  styleUrls: ['./trainee-hostel-reg.component.css']
})
export class TraineeHostelRegComponent implements OnInit {
  firstname: string;
  hName: string;
  hLocation: string;
  hRanBy: string;
  file: File;
  constructor(private hostelService: HostelTraineeService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  onSubmit() {
    console.log(this.file)
    let data = {
      hName: this.hName,
      hLocation: this.hLocation,
      hRanBy: this.hRanBy,
      file: this.file
      // traineeFirstname: this.firstname

    }

    this.hostelService.postData(data).subscribe((res) => {
      // console.log(res);
      this.getInfo();
    })

  }
  getInfo() {
    this.hostelService.getData().subscribe((res) => {
      console.log(res);
    });
  }
  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if (event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }

}
