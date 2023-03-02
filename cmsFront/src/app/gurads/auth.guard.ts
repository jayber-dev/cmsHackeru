import { inject } from "@angular/core";
import { UtilService } from "../services/utilService/util.service";
import { Router } from "@angular/router";
import { httpService } from "../services/httpService/http.service";
import { CookieService } from "ngx-cookie-service";

export const authGuard = () => {
    const authService = inject(UtilService);  
    const http = inject(httpService)
    const cookieService = inject(CookieService)
    http.post('auth/auth',{'t':cookieService.get('log')}).subscribe(data => {
        if (data['islogged']) {
            return true
        } else {
            return false
        }
    })
        
  };