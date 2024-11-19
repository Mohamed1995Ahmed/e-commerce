import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/products';
  private apiUrl2 = 'https://ecommerce.routemisr.com/api/v1/products';

  constructor() {}
  getallproduct(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getspecificproduct(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl2}/${id}`);
  }
}
