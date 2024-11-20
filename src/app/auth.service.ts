import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; // Import the cookie service
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userdata: any;
  private readonly router = inject(Router);
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  setregister(data: object): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }

  // Function to send login data to the backend API
  setlogin(data: object): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }

  setToken(token: string): void {
    // Set the token with an expiration time (optional)
    this.cookieService.set('authToken', token, 7); // Token expires in 7 days
  }

  // Function to get the token from the cookie
  getToken(): string | null {
    return this.cookieService.get('authToken');
  }
  saveuserdata(): void {
    if (this.cookieService.get('authToken') !== null) {
      this.userdata = jwtDecode(this.cookieService.get('authToken')!);
      console.log(this.userdata);
    }
  }

  // Function to delete the token from the cookie
  deleteToken(): void {
    this.cookieService.delete('authToken', '/'); // Specify the path where the cookie is set
  }

  logout(): void {
    this.deleteToken();
    this.userdata = null;
    this.router.navigate(['/login']);
  }
}
