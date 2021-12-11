import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonosreportsService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('JWT-TOKEN')}`
  });
  path: string = 'api/customerbenefit/';
  constructor(private http: HttpClient) { }

  _getBonosReportsbyDoc(doc: any) {
    return this.http.get(`${environment.apiUrl + this.path}getcustomerbenefit?doc=${doc}`).pipe();
  }

}
