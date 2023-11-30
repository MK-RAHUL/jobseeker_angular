import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { job } from '../../models/job';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  appliedJobList: any[] = [];

  constructor( private jobServcie: JobService ) {}

  ngOnInit() {
    this.jobServcie.getAppliedJobs().subscribe((appliedJobs: any) => {

      this.appliedJobList=appliedJobs.data;
      console.log(appliedJobs.data);
    //   for(let i=0; i<appliedJobs.length; i++) {
    //     this.jobServcie.getJobsById(appliedJobs[i].jobId).subscribe(
    //       (data: any[]) => {
            
    //         console.log(data);
            
    //         this.appliedJobList.push({
    //           data: appliedJobs[i],
    //           job: data
    //         })

          
            
    //       }
    //     )
    //   } 
    // })
  })

}}
