import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CampaingsreportsService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('JWT-TOKEN')}`
  });
  path: string = 'api/customercampaigns/';
  constructor (private http: HttpClient){}

  _getCampaingsReportsbyDoc(doc: any) {
    return this.http.get(`${environment.apiUrl + this.path}getcustomercampaigns?doc=${doc}`).pipe();
   }
}
