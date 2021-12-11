import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICampaign } from '../interfaces/campaign.interface';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class CampaignService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('JWT-TOKEN')}`
  });
  path: string = 'api/campaigns/'
  constructor(private http: HttpClient) { }

  list(): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.apiUrl + this.path}getcampaignsall`).pipe();
  }

  get(idCampania?: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.apiUrl + this.path}getcampaign?idCampania=${idCampania}`).pipe();
  }

  add(campaign: ICampaign): Observable<IResponse> {
    const request = {
      nombreCampania: campaign.nombreCampania,
      descCampania: campaign.descCampania,
      fechaInicio: campaign.fechaInicio,
      fechaFin: campaign.fechaFin,
      idTipoCampania: Number(campaign.idTipoCampania),
      idTipoBeneficio: Number(campaign.idTipoBeneficio),
    }

    return this.http.post<IResponse>(`${environment.apiUrl + this.path}insertcampaign`, request, { headers: this.headers }).pipe();
  }

  update(campaign: ICampaign): Observable<IResponse> {
    const request = {
      idCampania: campaign.idCampania,
      nombreCampania: campaign.nombreCampania,
      descCampania: campaign.descCampania,
      fechaInicio: campaign.fechaInicio,
      fechaFin: campaign.fechaFin,
      idTipoCampania: Number(campaign.idTipoCampania),
      idTipoBeneficio: Number(campaign.idTipoBeneficio),
    }
    return this.http.post<IResponse>(`${environment.apiUrl + this.path}updatecampaign`, request, { headers: this.headers }).pipe();
  }
}
