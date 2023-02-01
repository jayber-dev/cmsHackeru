import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn:"root"  
})
export class AuthService {
    constructor(private http:HttpClient
        ){}
    

    auth(){
        return this.http.post('http://127.0.0.1:3000/auth/auth', {},{ withCredentials:true})
    }

    login(email:string,password:string){
        
        return this.http.post('http://127.0.0.1:3000/auth/login', {"email":email,"password":password},{ withCredentials:true })
    }

    register(email:string,password:string){
        return this.http.post('http://127.0.0.1:3000/auth/register', {email:email,password:password})
    }

    logout(){
        return this.http.post('http://127.0.0.1:3000/auth/logout', {},{ withCredentials:true })
    }
}