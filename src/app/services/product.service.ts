import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('JWT-TOKEN')}`);
  path: string = 'api/product/'
  constructor(private http: HttpClient) { }

  list(): Observable<IResponse> {
    console.log('HEADERS:', this.headers);
    return this.http.get<IResponse>(`${environment.apiUrl + this.path}getallproducts`).pipe();
  }

  get(idProduct: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.apiUrl + this.path}getproduct?idProduct=${idProduct}`).pipe();
  }

  add(product: IProduct): Observable<IResponse> {
    const request = {
      nombreProducto: product.nombreProducto,
      descProducto: product.descProducto,
      precioProducto: Number(product.precioProducto),
      idCategoriaProducto: Number(product.idCategoriaProducto),
    }

    return this.http.post<IResponse>(`${environment.apiUrl + this.path}insertproduct`, request, { headers: this.headers }).pipe();
  }

  update(product: IProduct): Observable<IResponse> {
    const request = {
      idProducto: product.idProducto,
      nombreProducto: product.nombreProducto,
      descProducto: product.descProducto,
      precioProducto: Number(product.precioProducto),
      idCategoriaProducto: Number(product.idCategoriaProducto),
    }
    return this.http.post<IResponse>(`${environment.apiUrl + this.path}updateproduct`, request, { headers: this.headers }).pipe();
  }
}
