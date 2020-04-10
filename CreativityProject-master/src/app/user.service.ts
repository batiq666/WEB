import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './User';
import { users } from './users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'login'
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUser(username: string): Observable<User> {
    return of(users.find(user => user.username === username));
  }

  getAll() {
    return this.http.get<User[]>(`/users`);
}

  register(user: User) {
    return this.http.post(`/users/register`, user);
}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
    };
  }

}
