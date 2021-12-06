import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  path: string = 'api/User/'
  constructor(private http: HttpClient) { }


  login(nombreUsuario: string, password: string): Observable<IResponse> {
    const request = { nombreUsuario, password }
    return this.http.post<IResponse>(`${environment.apiUrl + this.path}login`, request).pipe();
  }

  get isLoggedIn(): boolean {

    const userStorage = localStorage.getItem('USER-INFO')
    return userStorage === null ? false : true
  }
}
