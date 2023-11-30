import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(environment.baseurl + '/users')
  }

  signUp(user: any) {
    return this.http.post(environment.baseurl + '/jobseeker/register', user)
  }

  getUserById(id: string) {
    return this.http.get<any[]>(environment.baseurl + '/users/'+id)
  }
  signIn(user:UserLogin){

    return this.http.post(environment.baseurl + '/users/login/', user)
  }
  getToken(): any {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }

}
