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
  results: any = [];
  results1: any = [];
  results2: any = [];
  resultsT: any = [];
  resultsH: any = [];
  resultsS: any = [];
  appPen: boolean = true;
  appPen1: boolean = true;
  appPen2: boolean = true;
  constructor(private courseService: CourseTraineeService, private hostelService: HostelTraineeService, private sukanyaService: SukanyaTraineeService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  // result1.a.status
  getInfo() {
    this.courseService.getData().subscribe((res) => {
      console.log(res);
      this.resultsT = res;
      for (let i = 0; i < this.resultsT.length; i++) {
        if (res[i]["a"]["status"] === "pending") {
          this.results.unshift(res[i])
        }
      }
      // this.results = res;
    });
    this.hostelService.getData().subscribe((res1) => {
      // this.results.concat(res1);
      // console.log(res1);
      this.resultsH = res1;
      for (let i = 0; i < this.resultsH.length; i++) {
        if (res1[i]["a"]["status"] === "pending") {
          this.results1.unshift(res1[i])
        }
      }
      // this.results1 = res1;
    });
    this.sukanyaService.getData().subscribe((res2) => {
      // this.results.concat(res2);
      // console.log(res2);
      this.resultsS = res2;
      for (let i = 0; i < this.resultsS.length; i++) {
        if (res2[i]["a"]["status"] === "pending") {
          this.results2.unshift(res2[i])
        }
      }
      // this.results2 = res2;
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
  approveApp1(id: number) {
    this.courseService.changeApplicationStatus(id, "Approved").subscribe((res) => {
      console.log(id);
      this.appPen1 = false;
    })
  }
  rejectApp1(id: number) {
    this.courseService.changeApplicationStatus(id, "Rejected").subscribe((res) => {
      console.log(id);
      this.appPen1 = false;
    })
  }
  approveApp2(id: number) {
    this.courseService.changeApplicationStatus(id, "Approved").subscribe((res) => {
      console.log(id);
      this.appPen2 = false;
    })
  }
  rejectApp2(id: number) {
    this.courseService.changeApplicationStatus(id, "Rejected").subscribe((res) => {
      console.log(id);
      this.appPen2 = false;
    })
  }
}

// function saveAs(blob: Blob, id: number): void {
//   throw new Error('Function not implemented.');
// }
