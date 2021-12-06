import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonosreportsService {

  constructor (private http: HttpClient){}

  _getBonosReportsbyDoc(doc: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get('https://localhost:44309/api/customerbenefit/getcustomerbenefit?doc='+doc);

   }

}
