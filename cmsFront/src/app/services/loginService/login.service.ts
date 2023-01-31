import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn:"root"  
})
export class LoginService {
    constructor(private http:HttpClient
        ){}

    login(email:string,password:string){
        
        return this.http.post('http://127.0.0.1:3000/auth/login', {"email":email,"password":password},{ withCredentials:true})
    }

    register(){
        return this.http.post('http://127.0.0.1:3000/auth/register', {})
    }
}