import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn:"root"  
})
export class AuthService {
    constructor(private http:HttpClient
        ){}

    auth(){
        return this.http.post('http://127.0.0.1:3000/auth/auth', {})
    }
}