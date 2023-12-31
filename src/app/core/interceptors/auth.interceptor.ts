import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const token = this.authservice.getToken();
    // // const provider_id = localStorage.getItem('id');
    // // const role = localStorage.getItem('role');

    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`,
    //       // 'id': provider_id ? provider_id : '', // Add user ID to the headers (if available)
    //       // role: role
    //     }
    //   });


    return next.handle(request);
  }
}
