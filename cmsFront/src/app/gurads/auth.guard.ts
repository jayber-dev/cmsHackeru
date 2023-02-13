import { inject } from "@angular/core";
import { UtilService } from "../services/utilService/util.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(UtilService);
    const router = inject(Router)
    console.log('authGuard#canActivate called');
    
    if(authService.getIsLogged){
        return true
    }
    
    return false
  };