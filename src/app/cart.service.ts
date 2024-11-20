import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myheader: any = { token: this._auth.getToken() };

  constructor(private router: HttpClient, private _auth: AuthService) {}
  getproducttocart(id: string): Observable<any> {
    console.log('ggggggg', this.myheader);
    return this.router.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {
        productId: id,
      },
      { headers: this.myheader }
    );
  }
}
