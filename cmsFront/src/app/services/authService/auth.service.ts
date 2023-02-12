import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn:"root"  
})
export class AuthService {
    constructor(private http:HttpClient
        ){}

    url:string = 'http://127.0.0.1:3000'

    auth(){
        return this.http.post(`${this.url}/auth/auth`, {},{ withCredentials:true})
    }

    login(email:string,password:string){ 
        return this.http.post(`${this.url}/auth/login`, {"email":email,"password":password},{ withCredentials:true })
    }

    register(form:FormGroup){       
        return this.http.post(`${this.url}/auth/signup`, form)
    }

    logout(){
        return this.http.post('http://127.0.0.1:3000/auth/logout', {},{ withCredentials:true })
    }
}