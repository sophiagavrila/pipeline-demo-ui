import { hostURL } from './../../environments/environment';
import { User } from 'src/app/models/user';
import { ClientMessage } from './../models/client-message';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = `${hostURL}:5000/api/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log it to the console if something goes wrong

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  public registerUser(user: User): Observable<Response>  {
    // this will return a client message if we are successfully able to POST a hero to our server 
    return this.http.post<Response>(`${url}/add`, user, this.httpOptions)
    .pipe(
      catchError(this.handleError<Response>('cannot register user!'))
    )
  }

}
