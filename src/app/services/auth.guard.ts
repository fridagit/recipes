import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, Router} from '@angular/router';
import {User} from 'firebase';
import {AuthService} from './auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<any> {
    return this.authService.user.pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          return this.redirectToLogin();
        }
      }),
      catchError(this.redirectToLogin)
    );
  }

  private redirectToLogin() {
    this.router.navigate(['login']);
    return of(false);
  }
}
