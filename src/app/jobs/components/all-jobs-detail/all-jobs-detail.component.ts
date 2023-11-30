import { Component, Input } from '@angular/core';
import { response } from '../../models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-all-jobs-detail',
  templateUrl: './all-jobs-detail.component.html',
  styleUrls: ['./all-jobs-detail.component.css']
})
export class AllJobsDetailComponent {
  @Input() job: any;
  constructor(private jobService:JobService){}
 
  apply(id:number){
    
    this.jobService.applyJob(id).subscribe((data)=>{
      console.log(data);
    }  )
  }
}
