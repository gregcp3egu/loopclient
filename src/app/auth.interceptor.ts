import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';

import { from } from 'rxjs';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  constructor(private auth: AuthService ) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    
    return from(this.auth.getAuthorizationToken()).pipe(
        switchMap(
          token => {
            if(token){
                const authReq = req.clone({
                  setHeaders: { Authorization: `Bearer ${token}` }
                });
                return next.handle(authReq);
            }
    
            return next.handle(req);
          }
        )
    )
    
    
 
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    
 
    // send cloned request with header to the next handler.
    
  }
}