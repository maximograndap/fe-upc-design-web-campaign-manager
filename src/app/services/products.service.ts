import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer fake-jwt-token');
  constructor(private http: HttpClient) { }

  listUsers(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/products', { headers: this.headers }).pipe();
  }

  getUser(idProduct: string): Observable<IProduct> {
    return this.http.get<IProduct>(`/products/${idProduct}`, { headers: this.headers }).pipe();
  }

  newUser(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`/products/register`, product).pipe();
  }

  updateUser(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`/products/update`, product).pipe();
  }
}
