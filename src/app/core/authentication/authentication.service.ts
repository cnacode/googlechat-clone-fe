import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '@app/core/models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSource: BehaviorSubject<User>;
  public user: Observable<User>;
  //subject

  constructor(private http: HttpClient) {
    this.userSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.user = this.userSource.asObservable();
  }

  public get currentUser(): User {
    return this.userSource.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/authentication`, { username, password })
      .pipe(
        map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSource.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSource.next(null);
  }
}
