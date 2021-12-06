import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

//import { retry } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CampaingsreportsService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer fake-jwt-token');
  constructor (private http: HttpClient){}

  _getCampaingsReportsbyDoc(doc: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get('https://localhost:44309/api/customercampaigns/getcustomercampaigns?doc='+doc);
   }

  // getCustomerCampaignReportbyDoc(doc: string) {
  //  return this.http.get<Customercampaingreport[]>('https://localhost:44309/api/customercampaigns/getcustomercampaigns?doc='+doc,
  //  {params: {idSol: doc}})
  //  .pipe(retry(0));
  //}




}
