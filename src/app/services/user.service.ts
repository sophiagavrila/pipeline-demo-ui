import { awsUrl,  } from './../../environments/environment';
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = `${awsUrl}/api/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  // POST
  public registerUser(user: User): Observable<User> {
    // this will return a client message if we are successfully able to POST a hero to our server 
    return this.http.post<User>(`${url}/add`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET - all
  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET - by username
  public findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${url}/find/${username}`)
      .pipe(
        catchError(this.handleError)
      )

  }

  // DELETE
  deleteUser(id: number) {
    console.log('deleting...')
    let deleteUrl = `${url}/${id}`
    console.log(deleteUrl)
    this.http.request('delete', deleteUrl).subscribe(console.log);
  }
}
