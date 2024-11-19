import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getmovie(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=aa9ff2512d6db6ae8ddc09770f9daa2b'
    );
  }
}
