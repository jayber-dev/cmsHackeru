import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn:"root"  
})
export class signupService {
    constructor(private http:HttpClient
        ){}

    register(email:string,password:string){
        return this.http.post('http://127.0.0.1:3000/auth/register', {email:email,password:password})
    }
}