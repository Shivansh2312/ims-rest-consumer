import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Service layer which interacts which interacts with 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8085/ims/api/products';

  constructor(private http: HttpClient) { }


  getProductsList(): Observable<any> {

    // invokes spring boot rest api
    return this.http.get(`${this.baseUrl}`);
  }
  getProduct(id: number): Observable<any> {

    // invokes spring boot rest api
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  newProduct(product: Object): Observable<Object> {

    // invokes spring boot rest api
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value:any): Observable<Object> {

    // invokes spring boot rest api
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}