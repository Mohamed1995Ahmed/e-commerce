import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cooky = inject(CookieService);
  const router = inject(Router);
  const platform_id = inject(PLATFORM_ID);

  // Check if the auth token exists in cookies
  const authToken = cooky.get('authToken');
  if (isPlatformBrowser(platform_id)) {
    //typeof cooky !== 'undefined'
    if (authToken && authToken.trim() !== '') {
      return true; // User is authenticated
    }

    // Redirect to login or deny access
    router.navigate(['/login']);
    return false;
  } else {
    return false;
  }
};
