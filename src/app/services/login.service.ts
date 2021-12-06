import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('JWT-TOKEN')}`);
  path: string = 'api/User/'
  constructor(private http: HttpClient) { }


  login(nombreUsuario: string, password: string): Observable<IResponse> {
    const request = { nombreUsuario, password }

    return this.http.post<IResponse>(`${environment.apiUrl + this.path}login`, request).pipe();
  }


}
