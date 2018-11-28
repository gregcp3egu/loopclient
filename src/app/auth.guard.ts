import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { map, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.as.currentUserObservable.pipe(
        take(1),
        map(user => {
            return !!user
        }),
        tap( loggedIn => {
            console.log("loggedIn: ", loggedIn);
            if (!loggedIn) {
                this.router.navigate(['/auth']);
            }
        })
    );
  }
}
