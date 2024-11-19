import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/categories';
  private apiurl2 = 'https://ecommerce.routemisr.com/api/v1/categories';

  constructor(private http: HttpClient) {}

  getallcategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getspecificcategories(id: string): Observable<any> {
    const url = `${this.apiurl2}/${id}`; // Append ID to the base URL
    return this.http.get(url); // Make the GET request
  }
}
