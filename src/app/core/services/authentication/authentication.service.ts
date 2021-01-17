import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from '@app/core/models';
import { environment } from '@environments/environment';

/**
 * Authentication service is responsible for:
 *  1. User authentication, namely login and logout
 *  2. Allowing access the currently logged in user
 *
 * Usage:
 * Components can subscribe() to the public user: Observable property
 * Notifications are sent when the this.userSource.next() method is called in the login() and logout() methods
 * UserSource keeps hold of the current value and emits it to any new subscribers as soon as they subscribe
 *
 * @export
 * @class AuthenticationService
 * @property user {Observable} - current user object
 * @property userSource{BehaviorSubject}
 *
 * @method
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSource: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSource.asObservable();
  }

  /**
   * getter function for user source
   * @returns User
   */
  public get currentUser(): User {
    return this.userSource.value;
  }

  /**
   * @param  {string} username
   * @param  {string} password
   * @returns Observable
   */
  login(username: string, password: string): Observable<HttpClient> {
    return this.http
      .post<any>(`${environment.apiUrl}/authentication`, { username, password })
      .pipe(
        catchError(response => {
          console.log(response);
          return throwError(response);
        }),
        map(response => {
          const { user } = response;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));

          this.userSource.next(user);
          return user;
        })
      );
  }

  /**
   * logs user out by:
   *  1.removing user information from local storage
   *  2.alerting observer components that user data is null
   * @returns void
   */
  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSource.next(null);
  }
}
