import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { job, response } from '../../models/job';

@Component({
  selector: 'app-alljobs-list',
  templateUrl: './alljobs-list.component.html',
  styleUrls: ['./alljobs-list.component.css']
})
export class AlljobsListComponent implements OnInit {

  jobs: any[] = [];
  resp: response = new response();
  currentPage = 1;
  totalPages = 0;
  totalItems = 0;
  itemsPerPage = 2;
  selectedJob: any;
  searchQuery: string = '';
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs(this.currentPage, this.itemsPerPage, this.searchQuery
    ).subscribe((res: any) => {
      // this.jobs = jobs;
      this.resp = res;
      console.log(JSON.stringify(this.resp));
      this.totalPages=res.totalPages;
      console.log("data :" + this.resp.data[0].title);
      // this.selectedJob = this.jobs[0];
    })
  }

  viewJobDetail(job: any) {
    this.selectedJob = job;
  }


  changePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.getJobs();
    }
  }
}
