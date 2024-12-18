import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService) as AuthService;
    const router = inject(Router)
   if (authService.isAuthenticated() && localStorage.getItem(authService.isAnAdmin) === "true") {
     return true;
   } else {
    router.navigate(["/home"])
     return false;
   }
};
