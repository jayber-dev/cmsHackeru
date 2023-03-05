import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/app/enviroments/enviroment";

@Injectable({
    providedIn: 'root',
})
export class httpService {
    constructor(
        private http: HttpClient,
        private cookieService:CookieService,
    ){}
    private readonly url: string = environment.apiUrl
    private readonly options = { withCredentials: true };

   

    get<T>(path:string,params:any){
        return this.http.get(`${this.url}/${path}`,{params:{params:params,t:this.cookieService.get('log')}})
    }

    post<T>(path,body){
        return this.http.post(`${this.url}/${path}`,body,this.options)
    }

    put<T>(path:string,body) {
        return this.http.put(`${this.url}/`,body,this.options)
    }

    delete<T>(path:string) {
        return this.http.delete(`${this.url}/${path}`, this.options)
    }
}