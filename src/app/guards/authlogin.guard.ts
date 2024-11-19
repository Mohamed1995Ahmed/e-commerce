import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authloginGuard: CanActivateFn = (route, state) => {
  const cooky = inject(CookieService);
  const router = inject(Router);

  // Check if the auth token exists in cookies
  const authToken = cooky.get('authToken');
  if (authToken && authToken.trim() !== '') {
    router.navigate(['/home']);
    return false; // User is authenticated
  }

  // Redirect to login or deny access

  return true;
};
