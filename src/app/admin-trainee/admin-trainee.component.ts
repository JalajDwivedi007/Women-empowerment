import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from 'src/app/course-trainee.service';
import { HostelTraineeService } from '../hostel-trainee.service';
import { SukanyaTraineeService } from '../sukanya-trainee.service';
// import { saveAs } from 'file-saver';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-admin-trainee',
  templateUrl: './admin-trainee.component.html',
  styleUrls: ['./admin-trainee.component.css']
})
export class AdminTraineeComponent implements OnInit {
  results: any;
  results1: any;
  results2: any;
  appPen: boolean = true;
  constructor(private courseService: CourseTraineeService, private hostelService: HostelTraineeService, private sukanyaService: SukanyaTraineeService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.courseService.getData().subscribe((res) => {
      console.log(res);
      this.results = res;
    });
    this.hostelService.getData().subscribe((res1) => {
      // this.results.concat(res1);
      // console.log(res1);
      this.results1 = res1;
    });
    this.sukanyaService.getData().subscribe((res2) => {
      // this.results.concat(res2);
      // console.log(res2);
      this.results2 = res2;
    });
  }
  // blob => saveAs(blob, fileData.filename)
  // this.downloadService
  //     .download(fileData.filename)
  //     .subscribe(blob => saveAs(blob, fileData.filename));
  documentDownload(id: number, filename: string) {
    this.courseService.downloadFile(id).subscribe(blob => fileSaver.saveAs(blob, filename));

  }
  approveApp(id: number) {
    this.courseService.changeApplicationStatus(id, "Approved").subscribe((res) => {
      console.log(id);
      this.appPen = false;
    })
  }
  rejectApp(id: number) {
    this.courseService.changeApplicationStatus(id, "Rejected").subscribe((res) => {
      console.log(id);
      this.appPen = false;
    })
  }
}

// function saveAs(blob: Blob, id: number): void {
//   throw new Error('Function not implemented.');
// }
