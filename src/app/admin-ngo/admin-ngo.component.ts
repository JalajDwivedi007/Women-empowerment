import { Component, OnInit } from '@angular/core';
import { CourseTraineeService } from '../course-trainee.service';
import { NgoRegisterService } from '../ngo-register.service';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css'],
})
export class AdminNgoComponent implements OnInit {
  results: any = [];
  results1: any = [];
  appPen: boolean = true;
  constructor(
    private ngoService: NgoRegisterService,
    private courseService: CourseTraineeService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  // result.status
  getInfo() {
    this.ngoService.getData().subscribe((res) => {
      console.log(res);
      this.results1 = res;
      for (let i = 0; i < this.results1.length; i++) {
        if (res[i]["status"] === "pending") {

          this.results.unshift(res[i]);
        }
      }


    });
  }
  documentDownload(id: number, filename: string) {
    this.courseService
      .downloadFile(id)
      .subscribe((blob) => fileSaver.saveAs(blob, filename));
  }
  approveApp(id: number) {
    this.ngoService.changeApplicationStatus(id, 'Approved').subscribe((res) => {
      console.log(id);
      this.appPen = false;
    });
  }
  rejectApp(id: number) {
    this.ngoService.changeApplicationStatus(id, 'Rejected').subscribe((res) => {
      console.log(id);
      this.appPen = false;
    });
  }
}
