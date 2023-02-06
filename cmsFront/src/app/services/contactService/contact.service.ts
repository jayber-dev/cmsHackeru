import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class ContactService{
    constructor(
        private http:HttpClient
    ){}

    getContacts(from){
        return this.http.get(`http://127.0.0.1:3000/contacts/`,{params:{"from":from}})
    }

    getContact(id){
        console.log(id);
        
        return this.http.get(`http://127.0.0.1:3000/contacts/contact/${id}`)
    }

    searchContacts(query,from){
        return this.http.get(`http://127.0.0.1:3000/contacts/search/${query}`,{params:{"from":from}})
    }
}