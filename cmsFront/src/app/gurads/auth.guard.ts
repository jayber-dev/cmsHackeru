import { inject } from "@angular/core";
import { UtilService } from "../services/utilService/util.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(UtilService);  
    if(authService.getIsLogged){
        return true
    }
    
    return false
  };