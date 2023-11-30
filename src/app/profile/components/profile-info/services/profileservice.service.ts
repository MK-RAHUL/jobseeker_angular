import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http: HttpClient) { }

  getallskills(){
    return this.http.get<any[]>(environment.baseurl + '/api/v1/skills')
  }
}
