import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICampaign } from '../interfaces/campaign.interface';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class CampaignConfigService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('JWT-TOKEN')}`);
  path: string = 'api/campaigns/'
  constructor(private http: HttpClient) { }

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
