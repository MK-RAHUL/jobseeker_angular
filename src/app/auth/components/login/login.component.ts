import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../../models/UserLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backgroundImageUrl = '../../../../../assets/images/LoginPageImg.png';

  users: any[] = [];
  signInUser!: UserLogin;

  constructor(
    private authService: AuthService, 
    private router: Router
    ) {



    this.authService.getAllUsers().subscribe(
      (users: any[]) => {
        console.log(users);
        this.users = users;
      }
    )
  }

  login(loginForm: NgForm) {
    // console.log(loginForm.value);
    // // this.signInUser.username=loginForm.value.username;
    // // this.signInUser.password=loginForm.value.password;
    // this.authService.signIn(loginForm.value).subscribe((response:any)=>{
    // console.log(response,response['accessToken']);
    // localStorage.setItem('accessToken',response['accessToken']);
    // sessionStorage.setItem('email',loginForm.value.email);
    this.router.navigate(['jobseeker-home/findAllJobs']);

    }
    // )

    }

    // }
  
 