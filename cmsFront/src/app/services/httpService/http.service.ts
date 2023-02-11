import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/enviroments/enviroment";
@Injectable({
    providedIn: 'root',
})
export class httpService {
    constructor(
        private http: HttpClient,
        
    ){}
    private readonly url: string = environment.apiUrl
    private readonly options = { withCredentials: true };

   

    get<T>(suffixUrl:string,additionalSuffix:string){
        return this.http.get(`${this.url}`)
    }

    post<T>(){
        return this.http.post(`${this.url}`,{})
    }
}